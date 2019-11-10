# Ibento jQuery Slider
> This is a simple slider based on jQuery. It fades through x number of images and starts the loop over. 

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Contact](#contact)

## General info
Add more general information about project. What the purpose of the project is? Motivation?

## Technologies
* Jquery 1.5.2

## Setup

Include jQuery
Download and include [jQuery 1.5.2](http://code.jquery.com/jquery-1.5.2.min.js) or include from CDN 
https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js

Download and include latest CSS
<link rel="stylesheet" href="css/ibento-slider.css" type="text/css" />


Download and include latest JS
<script type="text/javascript" src="js/ibento-slider.min.js"></script>


Initialize slider with element and slide delay on the slider element

jQuery(window).load(function() {
    $('.ibento_slider').ibentoSlider(3000);
});

## Code Examples

jQuery(window).load(function() {
    $('.ibento_slider').ibentoSlider(2000);
});

## Features
* Automatic counting of slides
* Automatic fading between slides



## Status
Project is: _finished_


## Contact
Created by @oyvindbrungotdahl
