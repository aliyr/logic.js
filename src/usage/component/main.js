import Component from "../../component";
import { Counter } from "./counter/counter";

export class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Counter />
                {this.$$lo.test}
            </div>
        )
    }

}