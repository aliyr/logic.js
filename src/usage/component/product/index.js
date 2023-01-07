import Component from "@logic/component";
import {RouterLink} from "@logic/routing/router-link";
import {RouterOutlet} from "@logic/routing/router-outlet";

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
                <RouterLink props={
                    {
                        name: 'productSlug',
                        params: {
                            id: 1,
                            slug: 'slug'
                        }
                    }
                }>
                        <span>
                            product slug
                        </span>
                </RouterLink>
                <RouterOutlet props={{parent: 'product'}} />
            </div>
        )
    }

}