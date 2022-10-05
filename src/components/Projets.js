import React from 'react'
import $ from 'jquery';
import * as THREE from "three";
import { TweenMax, TimelineMax, Linear, Expo, Power4 } from 'gsap';
import hoverEffect from 'hover-effect'
import wave from '../assets/7.jpg';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {Helmet} from 'react-helmet';


class Projets extends React.Component {
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
      parent: document.querySelector('.template-visigo'),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      image1: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      displacementImage: wave
    }); 

    new hoverEffect ({
      parent: document.querySelector('.template-parfum'),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      image1: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      image2: 'https://images.pexels.com/photos/4107897/pexels-photo-4107897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      displacementImage: wave
    });
    new hoverEffect ({
      parent: document.querySelector('.template-cosmetic'),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      image1: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
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
   
    <h1 className="project-box" style={{"margin-bottom": "40px" }}>En ligne</h1>
    <div className="box-city-menu">
      <div className="test">
           
        <div>
          <a href="/visigo" className="liens-menu">
          <div className="template-visigo">
            <div className="overlay">
            </div>
              <div className="flight-info">
                <div className="flight-locations">
                  <div>
                    <p className="title-project">Visigo</p>
                    <p className="date-project">2020</p>
                    <p className="description-project">Agence de communication audiovisuelle à Paris</p>
                  </div>
                </div>
            </div>
          </div>
          </a>
        </div>
      <a href="/Spp" className="liens-menu">
      <div className="template-box">
        <div className="template-parfum">
          <div className="overlay">
          </div>
            <div className="flight-info">
              <div className="flight-locations">
                <div>
                    <p className="title-project">Spp</p>
                    <p className="date-project">2020</p>
                    <p className="description-project">Projets de recherche & Publications</p>
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
export default Projets;

