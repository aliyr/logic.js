import Component from "@logic/component";

export class RouterOutlet extends Component {
    constructor(props) {
        super(props);

        this.methods.checkOnLocationChange()
        this.props.parent = props.props.parent || "root"

    }

    state() {
        return {
           currentNode: undefined
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.currentNode ||
                    this.$$lo.router.routeConfig.routeTree[this.props.parent] ?
                    new this.$$lo.router.routeConfig.routeTree[this.props.parent].template().currentNode : ""
                }
            </div>
        )
    }

    methods() {
        return {
            checkOnLocationChange: () => {
                window.addEventListener('locationchange', () => {
                    this.state.currentNode = ""
                    this.state.currentNode = this.$$lo.router.routeConfig.routeTree[this.props.parent] ?
                        new this.$$lo.router.routeConfig.routeTree[this.props.parent].template().currentNode : ""
                });
            }
        }
    }

}