import Component from "@logic/component";

export class RouterLink extends Component {
    constructor(props) {
        super(props);
    }

    methods() {
        return {
            navigate: () => {
                this.$$lo.router.loadRoute(this.props)
            }
        }
    }

    render() {
        return (
            <div on-click={this.methods.navigate}>
                {this.slot}
            </div>
        )
    }

}