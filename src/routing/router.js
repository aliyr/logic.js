
export class Router {
    constructor(routes) {
        this.routes = routes
        this.activeRoute = null

        this.createAddLocationEvent()

        this.loadRoute({path: window.location.pathname})
    }

    loadRoute({path = null, name = null, params = {}}) {

        this.activeRoute = this.routes.find(r => {
            if (name) {
                return r.name === name
            } else if (path) {
                return r.path === path
            }
        })
        window.history.pushState({}, '', this.activeRoute.path)

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