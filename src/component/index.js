import {patch} from "@logic/init.js";

export default class Component {

    constructor(props = {props: {}, slot: null}) {
        this.props = props.props
        this.slot = props.slot
        this.$$lo = window.$$lo
        this.state = this.stateInitiator.call(this, this.state())
        this.methods = this.methodsInitiator.call(this, this.methods)
        this.render = this.renderInitiator.call(this, this.render)
        // "this.currentNode" and "this.prevNode" used for change detection
        // "this.currentNode" would be used for showing current vdom
        this.currentNode = this.render()
        this.prevNode = {}
    }

    state() {
        return {}
    }

    methods() {
        return {}
    }

    render() {}

    stateInitiator(initState) {

        const fn = (state) => {
            Object.keys(state).forEach(key => {
                if (typeof state[key] === "object" || Array.isArray(this.state[key])) {
                    state[key] = fn(state[key])
                }
            })

            return new Proxy(
                state,
                {
                    set: (obj, prop, newVal) => {
                        obj[prop] = newVal
                        this.update()
                        return true
                    }
                }
            )
        }

        return fn(initState)


    }

    update() {
        this.prevNode = this.currentNode;
        this.currentNode = this.render();

        this.currentNode = patch(this.prevNode, this.currentNode);
    }

    methodsInitiator(initMethods) {
        return initMethods.call(this)
    }

    renderInitiator(initRender) {
        return initRender.bind(this)
    }
}