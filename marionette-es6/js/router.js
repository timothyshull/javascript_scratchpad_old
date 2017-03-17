/*eslint "no-underscore-dangle": 0*/
import $ from "jquery";
import _ from "lodash";
import Backbone from "backbone";

import BaseView from "./views/base-view.js";

export default class AppRouter extends Backbone.Router {
    constructor (options) {
        options = options || {};
        _.defaults(options, {
            routes: {
                "": "main"
            }
        });
        super(options);
        this._bindRoutes();
    }
    initialize () {
        $(".app-content").append("<div>Test is working</div>");
    }
    main () {
        var baseView = new BaseView();
        baseView.render();
    }
}