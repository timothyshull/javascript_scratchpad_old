import Backbone from "backbone";
import AppRouter from "./router.js";
import AppView from "./views/app-view.js";

export default class App {
    constructor () {
        this.AppRouter = new AppRouter();
        this.AppView = new AppView();
        this.AppView.render();
        Backbone.history.start({pushState: true});
    }
}
