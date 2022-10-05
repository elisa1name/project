import React from 'react'
import $ from 'jquery';
import * as THREE from "three";
import { TweenMax, TimelineMax, Linear, Expo, Power4 } from 'gsap';
import hoverEffect from 'hover-effect'
import wave from '../assets/7.jpg';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {Helmet} from 'react-helmet';
import mac from '../assets/macbook-pro-retina.png';	
import portfolioTwopc from '../assets/templates/portfolio2/dj-mobile.mov';	
import phone from '../assets/iphoneX.png';
import portfolioTwophone from '../assets/templates/portfolio2/dj.mov';



class PortfolioTwo extends React.Component {
    componentDidMount() {
        $(".button-mobile").click(function(){
            $(".pc-mockup").hide();
            $(".mobile-mockup").show();
            $(".button-mobile").css({"background-color": "lightgray", "color": "black"});
            $(".button-pc").css({"background-color": "black", "color": "white"});
        });
      
        $(".button-pc").click(function(){
            $(".pc-mockup").show();
            $(".mobile-mockup").hide();
            $(".button-mobile").css({"background-color": "black", "color": "white"});
            $(".button-pc").css({"background-color": "lightgray", "color": "black"});
        });
    }
   
    render() {
      return (
        <>
        <Helmet>
            <style>{'body { background-color:  white; display: contents;}'}</style>
        </Helmet>
       <div>
           <div>
               <div className="button-container">
                    <button class="button-mobile">Version Mobile</button>
                    <button class="button-pc">Version PC</button>
               </div>
               
               <div class="pc-mockup">
                   <img src={mac} style={{width: "75%", height: "600px", display: "flex", margin: "auto"}}></img>
                   <video src={portfolioTwophone} className="video-template" autoPlay loop></video>
                </div>
               <div class="mobile-mockup">
                   <img src={phone} style={{width: "21%", height: "600px", display: "flex", margin: "auto"}}></img>
                   <video src={portfolioTwopc} style={{height: "575px"}} className="video-template-phone" autoPlay loop></video>
               </div>
           </div>
           <div className="charte-graphique">
               <div className="charte-graphique-bluedark">#0D1220</div>
               <div className="charte-graphique-white">#FFFFFF</div>
           </div>
           <div className="charte-graphique-two">
                <div className="charte-graphique-red">#EC1B20</div>
                <div className="charte-graphique-greyportfolio">#8F9092</div>
           </div>
       </div>
        </>
      )
    }
  }
  export default PortfolioTwo;