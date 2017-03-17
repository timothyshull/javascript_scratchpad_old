define(
    [
        "jquery",
        "lodash",
        "backbone",
        "handlebars.runtime",
        "templates/templates"
    ],
    function($, _, Backbone, Handlebars, templates){

        var View = Backbone.View.extend({

            el: "body",

            template: Handlebars.templates["module1.hbs"],

            // initialize: function(){
            //     this.template = _.template(templates["module1.hbs"]);
            // },

            render: function(){

                var data = { users: [
                    {username: "alan", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
                    {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
                    {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
                ]};

                this.$el.html(this.template(data));
                return this;
            }

        });
        return View;
    }
);
