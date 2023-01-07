
export class Router {
    constructor(routes) {
        this.routes = routes
        this.routeConfig = {
            rawRoute: '',
            route: '',
            routeTree: {
                root: null
            }
        }

        this.manipulateRoutes()

        this.createAddLocationEvent()

        this.loadRoute({path: window.location.pathname})
    }

    loadRoute({path = null, name = null, params = {}}) {

        this.routeConfig = {
            rawRoute: '',
            route: '',
            routeTree: {
                root: null
            }
        }

        this.routeConfig.rawRoute = this.routes.find(r => {
            if (name) {
                return r.name === name
            } else if (path) {
                return r.fullRoute === path
            }
        }).fullRoute

        const paramsKeyArr = Object.keys(params)
        if (paramsKeyArr.length) {
            this.routeConfig.route = this.routeConfig.rawRoute
            paramsKeyArr.forEach(rKey => {
                this.routeConfig.route = this.routeConfig.route.replace(`:${rKey}`, params[rKey])
            })
        } else {
            this.routeConfig.route = this.routeConfig.rawRoute
        }

        let routeParts = this.routeConfig.rawRoute.split('/')
        routeParts.shift()
        let currentRoute = ""
        for (let i = 0; i < routeParts.length; i++) {
            currentRoute += `/${routeParts[i]}`
            const currentRouteObj = this.routes.find(p => p.fullRoute === currentRoute)

            const treeKeyArr = Object.keys(this.routeConfig.routeTree)

            this.routeConfig.routeTree[treeKeyArr[treeKeyArr.length - 1]] = currentRouteObj

            if (i !== routeParts.length - 1) {
                this.routeConfig.routeTree[currentRouteObj.name] = null
            }
        }
        window.history.pushState({}, '', this.routeConfig.route)

    }

    updateRouteTree() {

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
                ...(item.children ? {
                    children: this.addFullPath(item.children, parentRoute + item.path)
                } : {})
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
                    modifiedRoutes.push(r)
                }
            })
        }

        pushRoutesToRoot(routes)

        return modifiedRoutes
    }

}