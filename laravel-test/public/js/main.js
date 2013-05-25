require.config({
	//baseUrl: 'js/lib',

	shim:{
		'underscore': {
			exports:'_'
		},

		'backbone': {
			deps: ['underscore', 'jquery'],

			exports:'Backbone'
		}
	},

	paths: {
		jquery: 'lib/jquery-min',
		underscore: 'lib/underscore-min',
		backbone: 'lib/backbone-min',
		template: 'template',
		html_template: 'html_template',
		router: 'router'
	}
});

require(["router"], function(router){

	router.initialize();
});

