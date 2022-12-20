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

export class Logic {
    constructor (args = {
        container: HTMLElement,
        rootComponent: null
    }) {
        this.container = args.container
        this.rootComponent = args.rootComponent
    }

    render () {
        container.el = patch(this.container, this.rootComponent)
    }
}