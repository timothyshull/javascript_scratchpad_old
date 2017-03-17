import Backbone from "backbone";
import _ from "lodash";
import { default as baseTemplate } from "templates/base-tpl.js";

export default Backbone.View.extend({
    el: ".main",
    template: _.template(baseTemplate),
    render: function () {
        this.$el.html(this.template({name: "Kram Rellim"}));
    }
});
