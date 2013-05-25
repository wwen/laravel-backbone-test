define([
	'jquery',
	'underscore',
	'backbone',
	'view/UserView',
	'view/ShowUserListView'
], function($, _, Backbone, UserView, ShowUserListView){

	var Router = Backbone.Router.extend({
		routes:{
			'': 'UserView',
			'User': 'ShowUserListView'
		}
	});

	var initialize = function(){	
		var route = new Router();

		route.on("route:UserView", function(){
			new UserView();
		});

		route.on("route:ShowUserListView", function(){
			ShowUserListView.startfetch();
		});

		Backbone.history.start();	
	}

	return {initialize: initialize};
});