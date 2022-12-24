import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h
} from 'snabbdom'

export const patch = init([
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
])

export const container = {
    el: null
}

export const logic = {
    mount: function (args = {
        element: HTMLElement,
        component: null
    }) {

        window.$$lo = this
        this.render(args.element, new args.component().currentNode)
    },
    render: function (element= HTMLElement, component = null) {
        container.el = patch(element, component)
    },
    use: function (name, p) {
        this[name] = p
    },
    h
}