import Backbone from "backbone";
import _ from "lodash";
import $ from "jquery";
import { default as appTemplate } from "templates/app-tpl.js";
import { default as headerTemplate } from "templates/header-tpl.js";
import { default as footerTemplate } from "templates/footer-tpl.js";

export default class AppView extends Backbone.View {
    constructor() {
        super();

        this.setElement($(".app-content"), true);
        this.$main = this.$(".main");
        this.$header = this.$(".header");
        this.$footer = this.$(".footer");
        this.headerTemplate = _.template(headerTemplate);
        this.footerTemplate = _.template(footerTemplate);
    }

    render() {
        //this.$el.html(this.template({}));
        this.$header.html(this.headerTemplate({}));
        this.$footer.html(this.footerTemplate({}));
    }
}