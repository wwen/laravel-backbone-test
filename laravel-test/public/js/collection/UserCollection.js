define([
	'jquery', 
	'underscore', 
	'backbone',
	'model/UserModel'
	], function($, _, Backbone, UserModel){

		var UserCollection = Backbone.Collection.extend({

			model: UserModel,

			url: 'index.php/users'
		});

		return UserCollection;
	}
);