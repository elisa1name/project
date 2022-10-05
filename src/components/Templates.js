import React from 'react'
import $ from 'jquery';
import * as THREE from "three";
import { TweenMax, TimelineMax, Linear, Expo, Power4 } from 'gsap';
import hoverEffect from 'hover-effect'
import wave from '../assets/7.jpg';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {Helmet} from 'react-helmet';


class Templates extends React.Component {
  componentDidMount() {
    {/*
    Array.from(document.querySelectorAll('.imgBox')).forEach((e) => {
      const imgs = Array.from(e.querySelectorAll('img'));
      new hoverEffect({
        parent: e,
        intensity: 0.3,
        image1: imgs[0].getAttribute('src'),
        image2: imgs[1].getAttribute('src'),
        displacementImage: 'fluid.jpg'
      });
    });
  */}
 
    new hoverEffect({
      parent: document.querySelector('.template-photo'),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      image1: 'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      displacementImage: wave
    }); 

    new hoverEffect ({
      parent: document.querySelector('.template-parfum'),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      image1: 'https://images.pexels.com/photos/4202349/pexels-photo-4202349.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      displacementImage: wave
    });
    new hoverEffect ({
      parent: document.querySelector('.template-cosmetic'),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      image1: 'https://images.pexels.com/photos/4202924/pexels-photo-4202924.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      displacementImage: wave
    });

    new hoverEffect({
      parent: document.querySelector('.template-cuisine'),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      image1: 'https://images.pexels.com/photos/1251196/pexels-photo-1251196.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      displacementImage: wave
  });
  new hoverEffect({
    parent: document.querySelector('.gallery'),
    intensity1: 0.1,
    intensity2: 0.1,
    angle2: Math.PI / 2,
    image1: 'https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    displacementImage: wave
  }); 

  new hoverEffect ({
    parent: document.querySelector('.template-food'),
    intensity1: 0.1,
    intensity2: 0.1,
    angle2: Math.PI / 2,
    image1: 'https://images.pexels.com/photos/5713248/pexels-photo-5713248.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    displacementImage: wave
  });

  new hoverEffect ({
    parent: document.querySelector('.template-animalerie'),
    intensity1: 0.1,
    intensity2: 0.1,
    angle2: Math.PI / 2,
    image1: 'https://images.pexels.com/photos/4588047/pexels-photo-4588047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    displacementImage: wave
  });

  new hoverEffect ({
    parent: document.querySelector('.template-coffee'),
    intensity1: 0.1,
    intensity2: 0.1,
    angle2: Math.PI / 2,
    image1: 'https://images.pexels.com/photos/3151766/pexels-photo-3151766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    displacementImage: wave
  });

  new hoverEffect ({
    parent: document.querySelector('.template-ecology'),
    intensity1: 0.1,
    intensity2: 0.1,
    angle2: Math.PI / 2,
    image1: 'https://images.pexels.com/photos/1654255/pexels-photo-1654255.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    displacementImage: wave
  });

  new hoverEffect ({
    parent: document.querySelector('.template-books'),
    intensity1: 0.1,
    intensity2: 0.1,
    angle2: Math.PI / 2,
    image1: 'https://images.pexels.com/photos/3368816/pexels-photo-3368816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    displacementImage: wave
  });

  new hoverEffect ({
    parent: document.querySelector('.template-standing'),
    intensity1: 0.1,
    intensity2: 0.1,
    angle2: Math.PI / 2,
    image1: 'https://images.pexels.com/photos/930004/pexels-photo-930004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    displacementImage: wave
  });

  new hoverEffect ({
    parent: document.querySelector('.template-honey'),
    intensity1: 0.1,
    intensity2: 0.1,
    angle2: Math.PI / 2,
    image1: 'https://images.pexels.com/photos/3913549/pexels-photo-3913549.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    displacementImage: wave
  });

  new hoverEffect ({
    parent: document.querySelector('.template-portfolione'),
    intensity1: 0.1,
    intensity2: 0.1,
    angle2: Math.PI / 2,
    image1: 'https://images.pexels.com/photos/4050430/pexels-photo-4050430.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    displacementImage: wave
  });

  new hoverEffect ({
    parent: document.querySelector('.template-portfoliotwo'),
    intensity1: 0.1,
    intensity2: 0.1,
    angle2: Math.PI / 2,
    image1: 'https://images.pexels.com/photos/2624399/pexels-photo-2624399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    displacementImage: wave
  });

  new hoverEffect ({
    parent: document.querySelector('.template-portfoliothree'),
    intensity1: 0.1,
    intensity2: 0.1,
    angle2: Math.PI / 2,
    image1: 'https://images.pexels.com/photos/4099388/pexels-photo-4099388.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    displacementImage: wave
  });
  
  }
 
  render() {
    return (
      <>
      <Helmet>
          <style>{'body { background-color:  #101010; display: inherit; overflow-y: scroll;}'}</style>
      </Helmet>
 
    <h1 className="project-box" style={{"margin-bottom": "40px" }}>Templates</h1>
    <div className="box-city-menu">
      <div className="test">
            {/* <h1 className="liens-menu">Boutiques</h1>*/}
        <div>
        {/* <h1 className="liens-menu-about">Propos</h1>*/}
          <a href="/photographe" className="liens-menu">
          <div className="template-photo">
            <div className="overlay">
            {/* <a href="/Londres" className="liens-menu"></a>*/}
              {/* <Link to={`AboutUs`}></Link>*/}
            </div>
              <div className="flight-info">
                <div className="flight-locations">
                  <div>
                    <p className="title-project">Photographe</p>
                    <p className="date-project">2020</p>
                    <p className="description-project">template style blog</p>
                  </div>
                </div>
            </div>
          </div>
          </a>
        </div>
      <a href="/Parfum" className="liens-menu">
      <div className="template-box">
        <div className="template-parfum">
          <div className="overlay">
              {/* <a href="/Milan" className="liens-menu"></a>*/}
              {/*<Link to={`AboutUs`}></Link>*/}
          </div>
            <div className="flight-info">
              <div className="flight-locations">
                <div>
                    <p className="title-project">Parfum</p>
                    <p className="date-project">2020</p>
                    <p className="description-project">template thème fantastique</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      </a>
      <a href="/Cosmetique" className="liens-menu">
      <div className="template-box">
        <div className="template-cosmetic">
          <div className="overlay">
              {/* <a href="/ny" className="liens-menu"></a>*/}
            {/* <Link to={`AboutUs`}></Link>*/}
          </div>
            <div className="flight-info">
              <div className="flight-locations">
                <div>
                    <p className="title-project">Cosmetique</p>
                    <p className="date-project">2020</p>
                    <p className="description-project">templates e-commerce cosmetic</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      </a>
    </div>
  </div>
  <div className="box-city-menu">
      <div className="test">
            {/* <h1 className="liens-menu">Boutiques</h1>*/}
        <div>
        {/* <h1 className="liens-menu-about">Propos</h1>*/}
          <a href="/Cooking" className="liens-menu">
          <div className="template-cuisine">
            <div className="overlay">
            {/* <a href="/Londres" className="liens-menu"></a>*/}
              {/* <Link to={`AboutUs`}></Link>*/}
            </div>
              <div className="flight-info">
                <div className="flight-locations">
                  <div>
                    <p className="title-project">Restaurant</p>
                    <p className="date-project">2021</p>
                    <p className="description-project">Presentation d'un restaurant</p>
                  </div>
                </div>
            </div>
          </div>
          </a>
        </div>
      <a href="/Gallery" className="liens-menu">
      <div className="template-box">
        <div className="gallery">
          <div className="overlay">
              {/* <a href="/Milan" className="liens-menu"></a>*/}
              {/*<Link to={`AboutUs`}></Link>*/}
          </div>
            <div className="flight-info">
              <div className="flight-locations">
                <div>
                    <p className="title-project">Art</p>
                    <p className="date-project">2021</p>
                    <p className="description-project">timeless. Black is the colour of Eternity.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      </a>
      <a href="/Food" className="liens-menu">
      <div className="template-box">
        <div className="template-food">
          <div className="overlay">
              {/* <a href="/ny" className="liens-menu"></a>*/}
            {/* <Link to={`AboutUs`}></Link>*/}
          </div>
            <div className="flight-info">
              <div className="flight-locations">
                <div>
                    <p className="title-project">Food</p>
                    <p className="date-project">2021</p>
                    <p className="description-project">template food</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      </a>
    </div>
  </div>
  <div className="box-city-menu">
      <div className="test">
            {/* <h1 className="liens-menu">Boutiques</h1>*/}
        <div>
        {/* <h1 className="liens-menu-about">Propos</h1>*/}
          <a href="/Pets" className="liens-menu">
          <div className="template-animalerie">
            <div className="overlay">
            {/* <a href="/Londres" className="liens-menu"></a>*/}
              {/* <Link to={`AboutUs`}></Link>*/}
            </div>
              <div className="flight-info">
                <div className="flight-locations">
                  <div>
                    <p className="title-project">Animalerie</p>
                    <p className="date-project">2021</p>
                    <p className="description-project">Template e-commerce</p>
                  </div>
                </div>
            </div>
          </div>
          </a>
        </div>
      <a href="/Coffee" className="liens-menu">
      <div className="template-box">
        <div className="template-coffee">
          <div className="overlay">
              {/* <a href="/Milan" className="liens-menu"></a>*/}
              {/*<Link to={`AboutUs`}></Link>*/}
          </div>
            <div className="flight-info">
              <div className="flight-locations">
                <div>
                    <p className="title-project">Café</p>
                    <p className="date-project">2020</p>
                    <p className="description-project">Template presentation de café</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      </a>
      <a href="/Ecology" className="liens-menu">
      <div className="template-box">
        <div className="template-ecology">
          <div className="overlay">
              {/* <a href="/ny" className="liens-menu"></a>*/}
            {/* <Link to={`AboutUs`}></Link>*/}
          </div>
            <div className="flight-info">
              <div className="flight-locations">
                <div>
                    <p className="title-project">Ecology</p>
                    <p className="date-project">2020</p>
                    <p className="description-project"></p>
                </div>
            </div>
          </div>
        </div>
      </div>
      </a>
    </div>
  </div>
  <div className="box-city-menu">
      <div className="test">
            {/* <h1 className="liens-menu">Boutiques</h1>*/}
        <div>
        {/* <h1 className="liens-menu-about">Propos</h1>*/}
          <a href="/Book" className="liens-menu">
          <div className="template-books">
            <div className="overlay">
            {/* <a href="/Londres" className="liens-menu"></a>*/}
              {/* <Link to={`AboutUs`}></Link>*/}
            </div>
              <div className="flight-info">
                <div className="flight-locations">
                  <div>
                    <p className="title-project">Librairie</p>
                    <p className="date-project">2020</p>
                    <p className="description-project">Template ventes de livres</p>
                  </div>
                </div>
            </div>
          </div>
          </a>
        </div>
      <a href="/Standing" className="liens-menu">
      <div className="template-box">
        <div className="template-standing">
          <div className="overlay">
              {/* <a href="/Milan" className="liens-menu"></a>*/}
              {/*<Link to={`AboutUs`}></Link>*/}
          </div>
            <div className="flight-info">
              <div className="flight-locations">
                <div>
                    <p className="title-project">Home</p>
                    <p className="date-project">2020</p>
                    <p className="description-project">template home standing</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      </a>
      <a href="/Honey" className="liens-menu">
      <div className="template-box">
        <div className="template-honey">
          <div className="overlay">
              {/* <a href="/ny" className="liens-menu"></a>*/}
            {/* <Link to={`AboutUs`}></Link>*/}
          </div>
            <div className="flight-info">
              <div className="flight-locations">
                <div>
                    <p className="title-project">Miel</p>
                    <p className="date-project">2020</p>
                    <p className="description-project">template e-commerce de miel</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      </a>
    </div>
  </div>
  <div className="box-city-menu">
      <div className="test">
            {/* <h1 className="liens-menu">Boutiques</h1>*/}
        <div>
        {/* <h1 className="liens-menu-about">Propos</h1>*/}
          <a href="/PortfolioOne" className="liens-menu">
          <div className="template-portfolione">
            <div className="overlay">
            {/* <a href="/Londres" className="liens-menu"></a>*/}
              {/* <Link to={`AboutUs`}></Link>*/}
            </div>
              <div className="flight-info">
                <div className="flight-locations">
                  <div>
                    <p className="title-project">Portfolio</p>
                    <p className="date-project">2020</p>
                    <p className="description-project">Template Portfolio</p>
                  </div>
                </div>
            </div>
          </div>
          </a>
        </div>
      <a href="/PortfolioTwo" className="liens-menu">
      <div className="template-box">
        <div className="template-portfoliotwo">
          <div className="overlay">
              {/* <a href="/Milan" className="liens-menu"></a>*/}
              {/*<Link to={`AboutUs`}></Link>*/}
          </div>
            <div className="flight-info">
              <div className="flight-locations">
                <div>
                    <p className="title-project">Portfolio</p>
                    <p className="date-project">2020</p>
                    <p className="description-project">Template Portfolio</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      </a>
      <a href="/PortfolioThree" className="liens-menu">
      <div className="template-box">
        <div className="template-portfoliothree">
          <div className="overlay">
              {/* <a href="/ny" className="liens-menu"></a>*/}
            {/* <Link to={`AboutUs`}></Link>*/}
          </div>
            <div className="flight-info">
              <div className="flight-locations">
                <div>
                  <p className="title-project">Portfolio</p>
                  <p className="date-project">2020</p>
                  <p className="description-project">Template Portfolio</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      </a>
    </div>
  </div>
  <div className="vert-text">
      <span><a href="Shop" className="liens-home-shops"> 2019 & 2022<br /> Projets</a> </span>
  </div>
               
                            
           
      <script src="dist/hover.umd.js"></script>
      <script src="js/imagesloaded.pkgd.min.js"></script>
      <script src="dist/hover-effect.umd.js"></script>
      <script src="dist/hover-effect.js"></script>
      <script src="hover-effect.js"></script>
      </>
    )
  }
}
export default Templates;

