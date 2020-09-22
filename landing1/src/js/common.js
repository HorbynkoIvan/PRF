'use strict';

import './../scss/common.scss';

import $ from 'jquery';

window.$ = window.jQuery = $;
//import SVGInjector from 'svg-injector';

import {photoGallery} from '../js/partials/photogallery';
import {showcaseSlider} from '../js/partials/showcase_slider';
import {aboutSlider} from '../js/partials/about_slider';
import {planSlider} from '../js/partials/plan_slider';
import {contactsMap, locationMap} from '../js/partials/map';
import {headerCollapse, headerScroll} from '../js/partials/header';
import {videoPopup} from '../js/partials/video_popup';

window.addEventListener('DOMContentLoaded', () => {
    //let mySVGsToInject = $('img.inject-me');
    //SVGInjector(mySVGsToInject);

    // headerCollapse();
    // photoGallery();
    // locationMap();
    // contactsMap();
    // showcaseSlider();
    // aboutSlider();
    // planSlider();
    // videoPopup();

    // $(window).on('scroll', function (){
    //     headerScroll()
    // })
})