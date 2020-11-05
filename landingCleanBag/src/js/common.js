'use strict';

import './../scss/common.scss';

import $ from 'jquery';

window.$ = window.jQuery = $;
import slick from 'slick-carousel';

import {estimateSlider} from './partials/estimate_slider.js'
import {secretsSlider} from './partials/secret_slider.js'

window.addEventListener('DOMContentLoaded', () => {
    estimateSlider()
    secretsSlider()
})

