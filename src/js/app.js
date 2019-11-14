import "bootstrap";
import 'owl.carousel';

window.$ = window.jQuery = require('jquery')
window.Popper = require('popper.js')
const style3 = require('../css/app.scss');
const fontawesome = require('../js/fontawesome');
const video = require('../js/video.js');
const owlCarousel = require('./owlCarousel.js');




if(process.env.NODE_ENV === 'production'){
    console.log('Production mode 1');
} else if(process.env.NODE_ENV === 'development'){
    console.log('Development mode 2');
}






