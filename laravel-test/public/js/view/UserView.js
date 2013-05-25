define([
    'jquery',
    'underscore',
    'backbone',
    'model/UserModel',
    'text!html_template/usertemplate.html'
], function($, _, Backbone, UserModel, usertemplate) {

    var UserView = Backbone.View.extend({

        el: '#main-page',

        initialize: function() {

            this.render();

            var form = document.forms[0];

            $('#save').click(function(){
                var user = new UserModel();
                var userView = new UserView({model: user});

                var obj = {status: form.status.value,
                           user_type: form.usertype.value,
                           user_name: form.user_name.value,
                           user_password: form.password.value,
                           user_repassword: form.re_password.value,
                           name: form.name.value,
                           phone: form.phone.value,
                           email: form.email.value
                           };
                
                user.save(obj,{wait: true});
            });

            $('#cancel').click(function(){
                window.location.href = "#User";
            });
        },

        render: function() {
            this.$el.html(usertemplate);
        }
    });

    return UserView;
});