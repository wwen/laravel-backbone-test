define([
	'jquery',
	'underscore',
	'backbone'
	], function($, _, Backbone){

		var User = Backbone.Model.extend({
		
		urlRoot: 'index.php/users',
	
		defaults: {
			status: '',
			user_type: '',
			user_name: '',
			user_password: '',
			user_repassword: '',
			name: '',
			phone: '',
			email: ''			
		}
	});	
	return User;	
});