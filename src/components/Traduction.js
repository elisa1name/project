import React from 'react';
import hoverEffect from 'hover-effect';
import wave from '../assets/7.jpg';
import {Helmet} from 'react-helmet';
import $ from 'jquery';

class Traduction extends React.Component {
    componentDidMount() {
        const $menu = $('.dropdown');

        $(document).mouseup(e => {
           if (!$menu.is(e.target) 
           && $menu.has(e.target).length === 0) 
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
        <div>
            <h3 className="traduction">English</h3>
        </div>
        </>
      )
    }
  }
  export default Traduction;
  
  