import React from 'react';
import hoverEffect from 'hover-effect';
import wave from '../assets/7.jpg';
import {Helmet} from 'react-helmet';
import $ from 'jquery';

class Navbar extends React.Component {
    componentDidMount() {
        const $menu = $('.dropdown');

        $(document).mouseup(e => {
           if (!$menu.is(e.target) // if the target of the click isn't the container...
           && $menu.has(e.target).length === 0) // ... nor a descendant of the container
           {
             $menu.removeClass('is-active');
          }
         });
        
        $('.toggle').on('click', () => {
          $menu.toggleClass('is-active');
        });
      
    }
   
    render() {
      return (
        <>
        <Helmet>
            <style>{'body { background-color:  white; display: inherit;}'}</style>
        </Helmet>
        <img className="icon-menu" src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/50/000000/external-menu-multimedia-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto-2.png"/>
        <div class="container">
            <div class="text-center">
                <h2>jQuery: click outside to close menu</h2>
                <p>Click the button to toggle the dropodown menu.</p>
                <p>Then click outside dropdown menu to close.</p>
                <div class="dropdown">
                <a href="#" title="" class="btn btn-primary toggle">Toggle menu</a>
                <ul class="dropdown-menu list-group">
                    <li class="list-group-item">List item 1</li>
                    <li class="list-group-item">List item 2</li>
                    <li class="list-group-item">List item 3</li>
                </ul>
                </div>  
            </div>
        </div>

        </>
      )
    }
  }
  export default Navbar;
  
  