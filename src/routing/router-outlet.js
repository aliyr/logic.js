import Component from "../component";

export class RouterOutlet extends Component {
    constructor(props) {
        super(props);

        this.methods.checkOnLocationChange()

    }

    state() {
        return {
           currentNode: undefined
        }
    }

    render() {
        return (
            <div>
                {this.state.currentNode || new this.$$lo.router.activeRoute.template().currentNode}
            </div>
        )
    }

    methods() {
        return {
            checkOnLocationChange: () => {
                window.addEventListener('locationchange', () => {
                    this.state.currentNode = new this.$$lo.router.activeRoute.template().currentNode
                });
            }
        }
    }

}