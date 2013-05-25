define([
	'jquery',
	'underscore',
	'backbone',
	'collection/UserCollection',
	'text!html_template/ShowUserList.html'
	], function($, _, Backbone, UserCollection, Blankpage){

		var ShowUserView = Backbone.View.extend({
			el: '#user',

			initialize: function(){
				this.render();
			},

			render: function(){
				var template = _.template($('#users').html());
				this.$el.append(template(this.model.toJSON() ));
			}
		});

		var ShowUserListView = Backbone.View.extend({

			el: '#main-page',

			initialize: function(){	
				this.$el.html(Blankpage);
				this.render();
			},

			render: function(){
				this.collection.each(function(model){
					var showUserView = new ShowUserView({model: model});
				});
			}
		});

		var startfetch = function(){
			var userCollection = new UserCollection();

			userCollection.fetch({
				success: function(userCollection, response){
        					console.log("success");
        					var showUserListView= new ShowUserListView({collection: userCollection});
        					console.log(userCollection.toJSON());
    					},

   				error: function(collection, response){
        				console.log("error");
    			}
			});
		}
		return {startfetch: startfetch};
	}
);