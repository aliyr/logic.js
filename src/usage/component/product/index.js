import Component from "@logic/component";
import {RouterLink} from "@logic/routing/router-link";

export class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                product main page
                <RouterLink props={
                    {
                        name: 'productDetail',
                        params: {
                            id: '1'
                        }
                    }
                }>
                        <span>
                            detail 1
                        </span>
                </RouterLink>
                <RouterLink props={
                    {
                        name: 'productList'
                    }
                }>
                        <span>
                            list
                        </span>
                </RouterLink>
                {/*<RouterOutlet />*/}
            </div>
        )
    }

}