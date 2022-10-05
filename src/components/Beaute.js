import React from 'react'
import $ from 'jquery';
import * as THREE from "three";
import { TweenMax, TimelineMax, Linear, Expo, Power4 } from 'gsap';
import hoverEffect from 'hover-effect'
import wave from '../assets/7.jpg';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {Helmet} from 'react-helmet';



class Beaute extends React.Component {
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
 
    
  }
 
  render() {
    return (
      <>
      <Helmet>
          <style>{'body { background-color:  white; display: inherit; overflow-y: scroll;}'}</style>
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
     <div data-w-id="ce9eebea-6381-1df9-ba4e-de0f249c736b" class="home-hero-img-container">
        <div data-w-id="d9bc741c-4a4e-2eaa-dce0-36c538e31170" class="home-hero-shine w-hidden-medium w-hidden-small w-hidden-tiny" style="will-change: transform; transform: translate3d(22.7616%, -79.984%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"></div>
        <div id="carre">
            {/*<video id="videoAboutMe" data-wf-ignore="" muted="" autoplay="">
                <source src={video} data-wf-ignore=""></source>
        </video>*/}
        </div>
    </div>
    
      </>
    )
  }
}
export default Beaute;

