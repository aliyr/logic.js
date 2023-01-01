
export class Router {
    constructor(routes) {
        this.routes = routes
        this.activeRoute = null

        this.createAddLocationEvent()

        this.loadRoute(window.location.pathname)
    }

    loadRoute(path) {

        this.activeRoute = this.routes.find(r => r.path === path)
        window.history.pushState({}, '', path)

    }

    createAddLocationEvent() {
        let oldPushState = history.pushState;
        history.pushState = function pushState() {
            let ret = oldPushState.apply(this, arguments);
            window.dispatchEvent(new Event('pushstate'));
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        };
    }

}