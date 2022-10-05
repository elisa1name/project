import React from 'react'
import $ from 'jquery';
import * as THREE from "three";
import { TweenMax, TimelineMax, Linear, Expo, Power4 } from 'gsap';
import hoverEffect from 'hover-effect'
import wave from '../assets/7.jpg';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {Helmet} from 'react-helmet';


class Menu extends React.Component {
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
        parent: document.querySelector('.city-menu'),
        intensity1: 0.1,
        intensity2: 0.1,
        angle2: Math.PI / 2,
        image1: 'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        displacementImage: wave
    });
    new hoverEffect({
      parent: document.querySelector('.city-menu-NY'),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      image1: 'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      displacementImage: wave
    }); 

    new hoverEffect ({
      parent: document.querySelector('.city-menu-Milan'),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      image1: 'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      displacementImage: wave
    });
    new hoverEffect ({
      parent: document.querySelector('.city-menu-londre'),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      image1: 'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      displacementImage: wave
    });

    new hoverEffect({
      parent: document.querySelector('.projet'),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      image1: 'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      displacementImage: wave
  });
  new hoverEffect({
    parent: document.querySelector('.projetone'),
    intensity1: 0.1,
    intensity2: 0.1,
    angle2: Math.PI / 2,
    image1: 'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    displacementImage: wave
  }); 

  new hoverEffect ({
    parent: document.querySelector('.projettwo'),
    intensity1: 0.1,
    intensity2: 0.1,
    angle2: Math.PI / 2,
    image1: 'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
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
    {/*<div class="container">
          <div class="imgBox">
              <img src={louvre} />
              <img src={img4} />
          </div>
          <div class="imgBox">
              <img src={louvre} />
              <img src={img4} />
          </div>
    </div>*/}
    <h1 className="project-box" style={{"margin-bottom": "40px" }}>Projects</h1>
    <div className="box-city-menu">
      <div className="test">
            {/* <h1 className="liens-menu">Boutiques</h1>*/}
        <div>
        {/* <h1 className="liens-menu-about">Propos</h1>*/}
          <a href="/Londres" className="liens-menu">
          <div className="city-menu-NY">
            <div className="overlay">
            {/* <a href="/Londres" className="liens-menu"></a>*/}
              {/* <Link to={`AboutUs`}></Link>*/}
            </div>
              <div className="flight-info">
                <div className="flight-locations">
                  <div>
                    <p className="title-project">Projet</p>
                    <p className="date-project">2021</p>
                    <p className="description-project">timeless. Black is the colour of Eternity.</p>
                  </div>
                </div>
            </div>
          </div>
          </a>
        </div>
      <a href="/Milan" className="liens-menu">
      <div className="milan-box">
        <div className="city-menu-Milan">
          <div className="overlay">
              {/* <a href="/Milan" className="liens-menu"></a>*/}
              {/*<Link to={`AboutUs`}></Link>*/}
          </div>
            <div className="flight-info">
              <div className="flight-locations">
                <div>
                    <p className="title-project">Projet</p>
                    <p className="date-project">2021</p>
                    <p className="description-project">timeless. Black is the colour of Eternity.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      </a>
      <a href="/ny" className="liens-menu">
      <div className="milan-box">
        <div className="city-menu-londre">
          <div className="overlay">
              {/* <a href="/ny" className="liens-menu"></a>*/}
            {/* <Link to={`AboutUs`}></Link>*/}
          </div>
            <div className="flight-info">
              <div className="flight-locations">
                <div>
                    <p className="title-project">Projet</p>
                    <p className="date-project">2021</p>
                    <p className="description-project">timeless. Black is the colour of Eternity.</p>
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
          <a href="/Londres" className="liens-menu">
          <div className="projet">
            <div className="overlay">
            {/* <a href="/Londres" className="liens-menu"></a>*/}
              {/* <Link to={`AboutUs`}></Link>*/}
            </div>
              <div className="flight-info">
                <div className="flight-locations">
                  <div>
                    <p className="title-project">Projet</p>
                    <p className="date-project">2021</p>
                    <p className="description-project">timeless. Black is the colour of Eternity.</p>
                  </div>
                </div>
            </div>
          </div>
          </a>
        </div>
      <a href="/Milan" className="liens-menu">
      <div className="milan-box">
        <div className="projettwo">
          <div className="overlay">
              {/* <a href="/Milan" className="liens-menu"></a>*/}
              {/*<Link to={`AboutUs`}></Link>*/}
          </div>
            <div className="flight-info">
              <div className="flight-locations">
                <div>
                    <p className="title-project">Projet</p>
                    <p className="date-project">2021</p>
                    <p className="description-project">timeless. Black is the colour of Eternity.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      </a>
      <a href="/ny" className="liens-menu">
      <div className="milan-box">
        <div className="projetone">
          <div className="overlay">
              {/* <a href="/ny" className="liens-menu"></a>*/}
            {/* <Link to={`AboutUs`}></Link>*/}
          </div>
            <div className="flight-info">
              <div className="flight-locations">
                <div>
                    <p className="title-project">Projet</p>
                    <p className="date-project">2021</p>
                    <p className="description-project">timeless. Black is the colour of Eternity.</p>
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
export default Menu;

