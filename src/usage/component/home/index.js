import Component from "@logic/component";
import {Counter} from "../counter/counter";

export class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Counter />
            </div>
        )
    }

}