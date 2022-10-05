import React from 'react';
import { Transition } from "react-transition-group";
import $ from 'jquery';
import * as THREE from "three";
import { TweenMax, TimelineMax, Linear, Expo, Power4 } from 'gsap';
import city from '../assets/pexels-anubhaw-anand-2027697.jpg';
import profil from '../assets/profil.JPG';
import produit from '../assets/pexels-anubhaw-anand-2027697.jpg';
import chemise from '../assets/pexels-gdtography-911738.jpg';
import './home.css';
import hoverEffect from 'hover-effect'
import fluid from '../assets/fluid.jpg';
import wave from '../assets/7.jpg';
import Carousel from 'react-elastic-carousel';
import Navbar from './Navbar';
import Traduction from './Traduction';
import linkedin from '../assets/104639.png';
import mail from '../assets/mail.png';

class Home extends React.Component {


    componentDidMount() {

        //code cursor page 
        const cursor = document.querySelector('#cursor');
        const cursorCircle = cursor.querySelector('.cursor__circle');

        const mouse = { x: -100, y: -100 }; 
        const pos = { x: 0, y: 0 };
        const speed = 0.1; 

        const updateCoordinates = e => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }

        window.addEventListener('mousemove', updateCoordinates);


        function getAngle(diffX, diffY) {
           return Math.atan2(diffY, diffX) * 180 / Math.PI;
        }

        function getSqueeze(diffX, diffY) {
            const distance = Math.sqrt(
                Math.pow(diffX, 2) + Math.pow(diffY, 2)
            );
            const maxSqueeze = 0.15;
            const accelerator = 1500;
            return Math.min(distance / accelerator, maxSqueeze);
        }


        const updateCursor = () => {;
            const diffX = Math.round(mouse.x - pos.x);
            const diffY = Math.round(mouse.y - pos.y);

            pos.x += diffX * speed;
            pos.y += diffY * speed;

            const angle = getAngle(diffX, diffY);
            const squeeze = getSqueeze(diffX, diffY);

            const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) + ')';
            const rotate = 'rotate(' + angle + 'deg)';
            const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

           cursor.style.transform = translate;
           cursorCircle.style.transform = rotate + scale;
       };

        function loop() {;
            updateCursor();
            requestAnimationFrame(loop);
        };

        requestAnimationFrame(loop);



        const cursorModifiers = document.querySelectorAll('[cursor-class]');

        cursorModifiers.forEach(curosrModifier => {;
            curosrModifier.addEventListener('mouseenter', function () {;
                const className = this.getAttribute('cursor-class');
                cursor.classList.add(className);
            });

            curosrModifier.addEventListener('mouseleave', function () {;
               const className = this.getAttribute('cursor-class');
               cursor.classList.remove(className);
            });
        });

        //code three js animation vague 
        class Slider {
            constructor() {
                this.bindAll()

                this.vert = `
                    varying vec2 vUv;
                    void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `

                this.frag = `
                    varying vec2 vUv;

                    uniform sampler2D texture1;
                    uniform sampler2D texture2;
                    uniform sampler2D disp;

                    uniform float dispPower;
                    uniform float intensity;

                    uniform vec2 size;
                    uniform vec2 res;

                    vec2 backgroundCoverUv( vec2 screenSize, vec2 imageSize, vec2 uv ) {
                    float screenRatio = screenSize.x / screenSize.y;
                    float imageRatio = imageSize.x / imageSize.y;
                    vec2 newSize = screenRatio < imageRatio 
                        ? vec2(imageSize.x * (screenSize.y / imageSize.y), screenSize.y)
                        : vec2(screenSize.x, imageSize.y * (screenSize.x / imageSize.x));
                    vec2 newOffset = (screenRatio < imageRatio 
                        ? vec2((newSize.x - screenSize.x) / 2.0, 0.0) 
                        : vec2(0.0, (newSize.y - screenSize.y) / 2.0)) / newSize;
                    return uv * screenSize / newSize + newOffset;
                    }

                    void main() {
                    vec2 uv = vUv;
                    
                    vec4 disp = texture2D(disp, uv);
                    vec2 dispVec = vec2(disp.x, disp.y);
                    
                    vec2 distPos1 = uv + (dispVec * intensity * dispPower);
                    vec2 distPos2 = uv + (dispVec * -(intensity * (1.0 - dispPower)));
                    
                    vec4 _texture1 = texture2D(texture1, distPos1);
                    vec4 _texture2 = texture2D(texture2, distPos2);
                    
                    gl_FragColor = mix(_texture1, _texture2, dispPower);
                    }
                `

                this.el = document.querySelector('.js-slider')
                this.inner = this.el.querySelector('.js-slider__inner')
                this.slides = [...this.el.querySelectorAll('.js-slide')]
                this.bullets = [...this.el.querySelectorAll('.js-slider-bullet')]
               
               
                this.renderer = null
                this.scene = null
                this.clock = null
                this.camera = null

                this.images = [
                    'https://images.pexels.com/photos/1529881/pexels-photo-1529881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                    //'https://cdn.vintygrace.com/assets/fernando-lavin.jpg',
                    'https://images.pexels.com/photos/212269/pexels-photo-212269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    'https://images.pexels.com/photos/194735/pexels-photo-194735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                ]
                
                this.data = {
                    current: 0,
                    next: 1,
                    total: this.images.length - 1,
                    delta: 0
                }

                this.state = {
                    animating: false,
                    text: false,
                    initial: true
                }

                this.textures = null

                this.init()
            }

            bindAll() {
                ['render', 'nextSlide']
                    .forEach(fn => this[fn] = this[fn].bind(this))
            }

            setStyles() {
                this.slides.forEach((slide, index) => {
                    if (index === 0) return
                    TweenMax.set(slide, { autoAlpha: 0 })
                  
                })

                this.bullets.forEach((bullet, index) => {
                    if (index === 0) return
                  
                    const txt = bullet.querySelector('.js-slider-bullet__text')
                    const line = bullet.querySelector('.js-slider-bullet__line')

                    TweenMax.set(txt, {
                        alpha: 0.25
                    })
                    TweenMax.set(line, {
                        scaleX: 0,
                        transformOrigin: 'left'
                    })
                })
            }

            cameraSetup() {
                this.camera = new THREE.OrthographicCamera(
                    this.el.offsetWidth / -2,
                    this.el.offsetWidth / 2,
                    this.el.offsetHeight / 2,
                    this.el.offsetHeight / -2,
                    1,
                    1000
                )

                this.camera.lookAt(this.scene.position)
                this.camera.position.z = 1
            }

            setup() {
                this.scene = new THREE.Scene()
                this.clock = new THREE.Clock(true)

                this.renderer = new THREE.WebGLRenderer({ alpha: true })
                this.renderer.setPixelRatio(window.devicePixelRatio)
                this.renderer.setSize(this.el.offsetWidth, this.el.offsetHeight)

                this.inner.appendChild(this.renderer.domElement)
            }

            loadTextures() {
                const loader = new THREE.TextureLoader()
                loader.crossOrigin = ''

                this.textures = []
                this.images.forEach((image, index) => {
                    const texture = loader.load(image + '?v=' + Date.now(), this.render)

                    texture.minFilter = THREE.LinearFilter
                    texture.generateMipmaps = false

                    if (index === 0 && this.mat) {
                        this.mat.uniforms.size.value = [
                            texture.image.naturalWidth,
                            texture.image.naturalHeight
                        ]
                    }

                    this.textures.push(texture)
                })

                this.disp = loader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/rock-_disp.png', this.render)
                this.disp.magFilter = this.disp.minFilter = THREE.LinearFilter
                this.disp.wrapS = this.disp.wrapT = THREE.RepeatWrapping
            }

            createMesh() {
                this.mat = new THREE.ShaderMaterial({
                    uniforms: {
                        dispPower: { type: 'f', value: 0.0 },
                        intensity: { type: 'f', value: 0.5 },
                        res: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                        size: { value: new THREE.Vector2(1, 1) },
                        texture1: { type: 't', value: this.textures[0] },
                        texture2: { type: 't', value: this.textures[1] },
                        disp: { type: 't', value: this.disp }
                    },
                    transparent: true,
                    vertexShader: this.vert,
                    fragmentShader: this.frag
                })

                const geometry = new THREE.PlaneBufferGeometry(
                    this.el.offsetWidth,
                    this.el.offsetHeight,
                    1
                )

                const mesh = new THREE.Mesh(geometry, this.mat)

                this.scene.add(mesh)
            }

            transitionNext() {
                TweenMax.to(this.mat.uniforms.dispPower, 2.5, {
                    value: 1,
                    ease: Expo.easeInOut,
                    onUpdate: this.render,
                    onComplete: () => {
                        this.mat.uniforms.dispPower.value = 0.0
                        this.changeTexture()
                        this.render.bind(this)
                        this.state.animating = false
                    }
                })

                const current = this.slides[this.data.current]
                const next = this.slides[this.data.next]

                const currentImages = current.querySelectorAll('.js-slide__img')
                const nextImages = next.querySelectorAll('.js-slide__img')


                const currentText = current.querySelectorAll('.js-slider__text-line div')
                const nextText = next.querySelectorAll('.js-slider__text-line div')

                $("#one").css("opacity", "1");

                const currentBullet = this.bullets[this.data.current]
                const nextBullet = this.bullets[this.data.next]

                const currentBulletTxt = currentBullet.querySelectorAll('.js-slider-bullet__text')
                const nextBulletTxt = nextBullet.querySelectorAll('.js-slider-bullet__text')

                const currentBulletLine = currentBullet.querySelectorAll('.js-slider-bullet__line')
                const nextBulletLine = nextBullet.querySelectorAll('.js-slider-bullet__line')

                const tl = new TimelineMax({ paused: true })

                if (this.state.initial) {
                    TweenMax.to('.js-scroll', 1.5, {
                        yPercent: 100,
                        alpha: 0,
                        ease: Power4.easeInOut
                    })

                    this.state.initial = false
                }

                tl
                    .staggerFromTo(currentImages, 1.5, {
                        yPercent: 0,
                        scale: 1
                    }, {
                        yPercent: -185,
                        scaleY: 1.5,
                        ease: Expo.easeInOut
                    }, 0.075)
                    .to(currentBulletTxt, 1.5, {
                        alpha: 0.25,
                        ease: Linear.easeNone
                    }, 0)
                    .set(currentBulletLine, {
                        transformOrigin: 'right'
                    }, 0)
                    .to(currentBulletLine, 1.5, {
                        scaleX: 0,
                        ease: Expo.easeInOut
                    }, 0)

                if (currentText) {
                    tl
                        .fromTo(currentText, 2, {
                            yPercent: 0
                        }, {
                            yPercent: -100,
                            ease: Power4.easeInOut
                        }, 0)
                }

                tl
                    .set(current, {
                        autoAlpha: 0
                    })
                    .set(next, {
                        autoAlpha: 1
                    }, 1)

                if (nextText) {
                    tl
                        .fromTo(nextText, 2, {
                            yPercent: 100
                        }, {
                            yPercent: 0,
                            ease: Power4.easeOut
                        }, 1.5)
                }

                tl
                    .staggerFromTo(nextImages, 1.5, {
                        yPercent: 150,
                        scaleY: 1.5
                    }, {
                        yPercent: 0,
                        scaleY: 1,
                        ease: Expo.easeInOut
                    }, 0.075, 1)
                    .to(nextBulletTxt, 1.5, {
                        alpha: 1,
                        ease: Linear.easeNone
                    }, 1)
                    .set(nextBulletLine, {
                        transformOrigin: 'left'
                    }, 1)
                    .to(nextBulletLine, 1.5, {
                        scaleX: 1,
                        ease: Expo.easeInOut
                    }, 1)

                tl.play()
            }

            transitionPrev() {
               
            }

            prevSlide() {
                //if (this.state.animating) return

                //this.state.animating = true

               
                //this.data.current = this.data.current === this.data.total ? 0 : this.data.current - 1
                //this.data.next = this.data.current === this.data.total ? 0 : this.data.current - 1
            }

            nextSlide() {
                if (this.state.animating) return

                this.state.animating = true

                this.transitionNext()

                this.data.current = this.data.current === this.data.total ? 0 : this.data.current + 1
                this.data.next = this.data.current === this.data.total ? 0 : this.data.current + 1
             
            }

            changeTexture() {
                this.mat.uniforms.texture1.value = this.textures[this.data.current]
                this.mat.uniforms.texture2.value = this.textures[this.data.next]
            }

            listeners() {
                window.addEventListener('wheel', this.nextSlide, { passive: true })
            }
            
            

            clickscroll(){

                //this.transitionNext();

                const btnone = document.querySelector("#one")
                $("#one").css("opacity", "1");

                btnone.addEventListener('click', () => {
                    // console.log('butttonone')
                    this.slides.forEach((slide, index) => {
                        TweenMax.set(slide, { autoAlpha: 0 })
                    //   console.log(index)
                      //alert( slide + ": " + index );
                      return [1]
                    })
    
                    this.bullets.forEach((bullet, index) => {
                        if (index === 0) return
                      
                        const txt = bullet.querySelector('.js-slider-bullet__text')
                        const line = bullet.querySelector('.js-slider-bullet__line')
                        
    
                        TweenMax.set(txt, {
                            alpha: 0.25
                        })
                        TweenMax.set(line, {
                            scaleX: 0,
                            transformOrigin: 'left'
                        })
                    })
                    this.nextSlide() 
                })

                const btntwo = document.querySelector("#two")
                btntwo.addEventListener('click', () => {
                    // console.log('butttontwo')
                    
                    //this.nextSlide() 
                })

                const btnthree = document.querySelector("#three")
                btnthree.addEventListener('click', () => {
                    // console.log('buttonthree')
                    
                    //this.nextSlide() 
                })

                const btnfour  = document.querySelector("#four")
                btnfour.addEventListener('click', () => {
                    // console.log('buttonfour')
                    //this.nextSlide() 
                })
            }
           

            render() {
                this.renderer.render(this.scene, this.camera)
            }

            init() {
                this.setup()
                this.cameraSetup()
                this.loadTextures()
                this.createMesh()
                this.setStyles()
                this.render()
                this.listeners()
                this.prevSlide()
                this.clickscroll()
            }
        }

        // Toggle active link
        const links = document.querySelectorAll('.js-nav a')

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault()
                links.forEach(other => other.classList.remove('is-active'))
                link.classList.add('is-active')
            })
        })

        // Init classes
        const slider = new Slider()       
        
        var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };
    
        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];
    
            if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
    
            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
            var that = this;
            var delta = 200 - Math.random() * 100;
    
            if (this.isDeleting) { delta /= 2; }
    
            if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
            }
    
            setTimeout(function() {
            that.tick();
            }, delta);
        };
    
        //FUNCTION POUR ANIMATION TEXTE
        window.onload = function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                  new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // CSS INJECTER A L'ANIMATION
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css);
        };

        
    }

    render() {
        return (
            <>
                <div className="slider js-slider">
                    <div id="cursor">
                        <div className="cursor__circle"></div>
                    </div>
                    <div className="slider__inner js-slider__inner"></div>
                    <div className="navbar-top">
                       {/*navbar*/}
                    </div>
                        {/*<div className="inline-menu">
                            <div className="header-logo">Menu</div>
                            <div className="header-login"><Click/></div>
                        </div>*/}

                   <div className="slide js-slide">
                        <div className="slide__content">
                            <div className="slider__text-line js-slider__text-line text-line-right-title">
                                <div></div>
                                <div class="slider__text-line js-slider__text-line"><div>Front-end</div></div>
                                <div class="slider__text-line js-slider__text-line"><div>developpeuse</div></div>
                                <div class="slider__text-line js-slider__text-line"><div>A paris</div></div>
                            </div>
                        </div>
                    </div>
          
                    <div className="slide js-slide">
                        <div className="inline-menu slider__text-line js-slider__text-line">
                           {/* <div className="navbar-top"><Navbar /></div>*/}
                        </div>
                        <div className="slide__content js-slide__img">
                            <div className="text-center"></div>
                            <figure class="slide__img js-slide__img">
                              {/* <img src={logo} />*/}
                            </figure>
                            <figure class="slide__img js-slide__img">
                                <img src={"https://images.pexels.com/photos/3992776/pexels-photo-3992776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}/>
                            </figure>
                        </div>

                       <div className="slider__text js-slider__text">
                            <figure className="slide__img js-slide__img">
                               <div class="description-competences">
                                   <p style={{fontSize: "36px", lineHeight: "normal", color: "black", textTransform: "initial"}}>Je réalise des sites internet avec le souci du détail et un rendu ﬁdèle au design.</p>
                                    <hr></hr>
                                    <div>01. Intégrateur HTML - CSS - JS</div>
                                    <hr></hr>
                                    <div>02. Intégrateur REACT - BOOSTRAP - THREEJS</div>
                                    <hr></hr>
                                    <div>03. Développeur WordPress</div>
                                    <hr></hr>
                               </div>
                            </figure>
                            <div className="slider__text-line js-slider__text-line">
                                <div></div>
                            </div>
                          
                        </div>
                    </div>

                    <div className="slide js-slide">
                        <div className="slide__content">
                            <figure className="slide__img js-slide__img">
                                <img src={city}  style={{filter: "brightness(0.6)"}}/>
                            </figure>
                            <div className="slider__text-line js-slider__text-line text-line-left">
                                <div></div>
                                <div class="slider__text-line js-slider__text-line"><a href="/Templates"><div>Mes templates </div></a></div>
                                <div class="slider__text-line js-slider__text-line"><a href="/Templates"><div>créer avec un CMS</div></a></div>
                                <div class="slider__text-line js-slider__text-line"><a href="/Templates"><div>voir</div></a></div>
                            </div>
                            <a className="button-title-shop" variant="primary" href="/Shop">
                                <div className="slide__img js-slide__img">
                                </div>
                            </a>
                            <figure className="slide__img js-slide__img">
                                <a href="projets">
                                    <img src={produit}  style={{filter: "brightness(0.6)"}}></img>
                                </a>
                            </figure>
                            <div className="slider__text-line js-slider__text-line text-line-right">
                                <div></div>
                                <div class="slider__text-line js-slider__text-line"><a href="/Projets"><div>Mes sites </div></a></div>
                                <div class="slider__text-line js-slider__text-line"><a href="/Projets"><div>en lignes</div></a></div>
                                <div class="slider__text-line js-slider__text-line"><a href="/Projets"><div>voir</div></a></div>
                            </div>
                        </div>
                    </div>

                    <div className="slide js-slide">
                        <div className="slide__content">
                            <figure className="slide__img js-slide__img">
                             <div class="footer">
                                <div><h3 style={{fontSize: "36px", lineHeight: "normal", color: "black", textTransform: "initial", fontFamily: "serif"}}>Démarrons un projet ensemble, n’hésitez pas à me contacter</h3></div>
                                <div class="logo">
                                    <a href="https://www.linkedin.com/in/elisa-vallée-41132b181/" target="_blank"><img src={linkedin} style={{width: "50px", height:"50px",position: "initial"}}></img></a>
                                    <a href="mailto:elisavf@hotmail.fr"><img src={mail} style={{width: "50px", height:"50px", position: "initial"}}></img></a>
                                </div>
                                
                             </div>
                            </figure>
                        </div>
                    </div>



                    <nav className="slider__nav js-slider__nav">
                        <div className="slider-bullet js-slider-bullet">
                            <span className="slider-bullet__text js-slider-bullet__text">1</span>
                            <span className="slider-bullet__line js-slider-bullet__line"></span>
                        </div>
                        <div className="slider-bullet js-slider-bullet">
                            <span className="slider-bullet__text js-slider-bullet__text" id="two">2</span>
                            <span className="slider-bullet__line js-slider-bullet__line"></span>
                        </div>
                        <div className="slider-bullet js-slider-bullet">
                            <span className="slider-bullet__text js-slider-bullet__text" id="three">3</span>
                            <span className="slider-bullet__line js-slider-bullet__line"></span>
                        </div>
                        <div className="slider-bullet js-slider-bullet">
                            <span className="slider-bullet__text js-slider-bullet__text"  id="four">4</span>
                            <span className="slider-bullet__line js-slider-bullet__line"></span>
                        </div>
                        <div className="slider-bullet js-slider-bullet">
                            <span className="slider-bullet__text js-slider-bullet__text"   id="one" style={{fontSize: "25px", marginTop: "-25%", marginLeft: "20%", opacity:
                        "1"}}> </span>
                            <span className="slider-bullet__line js-slider-bullet__line"></span>
                        </div>
                    </nav>
                    
                    <div className="typewriter">
                        <h1>
                        </h1>
                    </div>

                    <div className="scroll">
                    {/*<div className="scroll js-scroll">*/}
                        Scroll Down
                    </div>

                </div>

                <div className="vert-text">
                    <span><a href="Shop" className="liens-home-shops"> Elisa Vallée<br /> Developpeuse</a> </span>
                </div>
                
            </>
        )
    }

}



export default Home;


