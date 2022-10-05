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
import bookpc from '../assets/templates/books/Enregistrement de l’écran 2020-09-20 à 01.38.29.mov';	
import phone from '../assets/iphoneX.png';
import bookmobile from '../assets/templates/books/Enregistrement de l’écran 2020-09-20 à 01.40.31.mov';



class Book extends React.Component {
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
                   <video src={bookpc} className="video-template" autoPlay loop></video>
                </div>
               <div class="mobile-mockup">
                   <img src={phone} style={{width: "21%", height: "600px", display: "flex", margin: "auto"}}></img>
                   <video src={bookmobile} className="video-template-phone" autoPlay loop></video>
               </div>
           </div>
           <div className="charte-graphique">
               <div className="charte-graphique-pinklight">#F1C9CF</div>
               <div className="charte-graphique-black">#101010</div>
           </div>
           <div className="charte-graphique-two">
                <div className="charte-graphique-creme">#F4F3ED</div>
                <div className="charte-graphique-darkpink">#F86C72</div>
           </div>
       </div>
        </>
      )
    }
  }
  export default Book;