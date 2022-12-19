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

window.h = h

export const Logic = {
    render: function (element ,component) {
        container.el = patch(element, component)
    }
}