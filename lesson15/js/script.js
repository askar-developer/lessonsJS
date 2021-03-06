window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let tabs = require('./parts/tabs.js'),
    timer = require('./parts/timer.js'),
    modal = require('./parts/modal.js'),
    slider = require('./parts/slider.js'),
    calc = require('./parts/calc.js'),
    form = require('./parts/form.js');

    tabs();
    timer();
    modal();
    slider();
    calc();
    form();
});