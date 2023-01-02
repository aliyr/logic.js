
export class Router {
    constructor(routes) {
        this.routes = routes
        this.activeRoute = null

        this.manipulateRoutes()

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

    manipulateRoutes() {
        this.routes = this.addFullPath(this.routes, '')
        this.routes = this.flattenRoutes(this.routes)
    }

    addFullPath(routesArr = [], parentRoute = '') {
        return routesArr.map((item) => {
            return {
                ...item,
                fullRoute: parentRoute + item.path,
                children: this.addFullPath(item.children, parentRoute + item.path)
            }
        })
    }

    flattenRoutes(routes) {
        const modifiedRoutes = []

        const pushRoutesToRoot = (routeArr) => {
            routeArr.forEach(r => {
                if (!r.children || !r.children.length) {
                    modifiedRoutes.push(r)
                } else {
                    pushRoutesToRoot(r.children)
                    delete r.children
                    modifiedRoutes.push(r)
                }
            })
        }

        pushRoutesToRoot(routes)

        return modifiedRoutes
    }

}