/*global setInterval, window, document*/
/*jslint node: true*/
'use strict';
var bsStyle = require('../css/bootstrap.css'),
    style = require('../css/style.css'),
    bsJs = require('bootstrap'),
    $ = require('jquery'),
    $imgElem = $('.img'),
    imgClasses = [
        'sample1',
        'sample2',
        'sample3',
        'sample4'
    ],
    x = 1,
    setClassAndLoop = function setClassAndLoop() {
        $imgElem.attr('src', 'img/' + imgClasses[x] + '.png');
        x = x === imgClasses.length - 1 ? 0 : x + 1;
    },
    iValMins = 0.5;

$(document).ready(function () {
    setInterval(setClassAndLoop, iValMins * 60 * 1000);
});