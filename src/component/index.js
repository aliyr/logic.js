import {patch, container} from "../init.js";

export default class Component {

    constructor(props) {
        this.props = props
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
        return new Proxy(
            initState,
            {
                set: (obj, prop, newVal) => {
                    obj[prop] = newVal
                    container.el = patch(container.el, this.render())
                    return true
                }
            }
        )
    }

    methodsInitiator(initMethods) {
        return initMethods.call(this)
    }

    renderInitiator(initRender) {
        return initRender.bind(this)
    }
}