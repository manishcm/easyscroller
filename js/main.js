require.config({
  paths: {
    underscore : 'libs/underscore.min',
    backbone   : 'libs/backbone.min',
    jquery     : 'libs/jquery.min',
    i18n       : 'libs/i18next.amd.withJQuery-1.6.3.min',
    raf        : 'libs/Raf',
	animate    : 'libs/Animate',
	scroller   : 'libs/Scroller',
	easyScroller: 'libs/EasyScroller'
  },
  shim: {
    underscore:{
     	exports: '_'
    },
    backbone:{
    	deps:[ 'underscore', 'jquery'],
        exports: 'Backbone'
    },
    jquery: {
    	exports: '$'
    },
    rafs: {
		exports: 'requestAnimationFrame'
    },
	animate: {
		exports: 'core.effect.Animate'
	},
	scroller: {
		exports: 'Scroller'
	},
    easyScroller: {
		deps: [ 'raf', 'animate', 'scroller' ],
		exports: 'EasyScroller'
	}
  },
  waitSeconds: 30
});
 
require(['app'], function (App) {
  'use strict';

  App.initialize();
});
