import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule
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

export const renderApp = (element ,component) => {
    container.el = patch(element, component)
}