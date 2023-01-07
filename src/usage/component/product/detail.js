import Component from "@logic/component";
import {RouterOutlet} from "@logic/routing/router-outlet";

export class ProductDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Product Detail page
                <RouterOutlet props={{parent: 'productDetail'}} />
            </div>
        )
    }

}