import {
  Bulma
} from './Bulma';

//import axios from 'axios';

import Animate from 'animate.js';

export default class Controller {

  constructor() {
      // make the imported Controller-Class available
      // Controller-Functions available threw: this.Collection.doSomething();
  }


  initBulmaNavbar() {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }

  }

  init() {

    console.log("Hello Controller ...");

    new Bulma().initNavbar();
      
  }

}

function initAnimateJs() {

  var animate = new Animate({
    target: '[data-animate]',
    animatedClass: 'js-animated',
    offset: [0.75, 0.25],
    delay: 0,
    remove: true,
    scrolled: true,
    reverse: false,
    onLoad: true,
    onScroll: true,
    onResize: false,
    disableFilter: false,
    callbackOnInit: function () {},
    callbackOnInView: function (el) {},
    callbackOnAnimate: function (el) {},
  });
  animate.init();

}

initAnimateJs();