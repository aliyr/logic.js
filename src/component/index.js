import {patch, container} from "../init.js";

export default class Component {

    constructor(props = {props: {}, slot: null}) {
        this.props = props.props
        this.slot = props.slot
        this.state = this.stateInitiator.call(this, this.state())
        this.methods = this.methodsInitiator.call(this, this.methods)
        this.render = this.renderInitiator.call(this, this.render)
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
                        container.el = patch(container.el, this.render())
                        return true
                    }
                }
            )
        }

        return fn(initState)


    }

    methodsInitiator(initMethods) {
        return initMethods.call(this)
    }

    renderInitiator(initRender) {
        return initRender.bind(this)
    }
}