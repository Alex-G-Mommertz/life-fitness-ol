require('./bulma.scss');
require('../static/scss/custom.scss');
import "../static/css/custom.css";
import "../static/css/animate.min.css";
/* import "../static/css/google-font.css"; */
import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";
import 'lazysizes';
import Controller from './classes/Controller'; // importing "Controller" class

if (!global._babelPolyfill) {
  require('babel-polyfill');
}

new Controller().init();


