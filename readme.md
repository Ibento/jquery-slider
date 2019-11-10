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
This is a basic jQuery slider that fades between images set in your HTML. It is initialized on an element by using the  method .ibentoSlider(delay) and views the images in li-elements inside the _#mySlider#_ wrapper.

## Technologies
* Jquery 1.5.2

## Setup

__Include jQuery__
Download and include [jQuery 1.5.2](http://code.jquery.com/jquery-1.5.2.min.js) or include from CDN 
https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js

```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
```


__Download and include latest CSS__
```html
<link rel="stylesheet" href="css/ibento-slider.css" type="text/css" />
```

__Download and include latest JS__
```html
<script type="text/javascript" src="js/ibento-slider.min.js"></script>
```


__Initialize slider with element and slide delay on the slider element__
```javascript
jQuery(window).load(function() {
    $('.ibento_slider').ibentoSlider(3000);
});
```

## Code Examples

__Check out my awesome example usage of Ibento Slider in the included example__
```html
[Example](https://github.com/Ibento/jquery-slider/blob/master/dist/example/index.html)
```

## Features
* Automatic counting of slides
* Automatic fading between slides



## Status
Project is: _finished_


## Contact
Created by Øyvind Dahl <oyvind@ibento.no>
