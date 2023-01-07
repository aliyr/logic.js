import Component from "@logic/component/index";
import {RouterOutlet} from "@logic/routing/router-outlet";
import {RouterLink} from "@logic/routing/router-link";

export class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <RouterLink props={
                        {
                            name: 'home'
                        }
                    }>
                        <span>
                            Home
                        </span>
                    </RouterLink>
                    <RouterLink props={
                        {
                            name: 'product'
                        }
                    }>
                        <span>
                            Product
                        </span>
                    </RouterLink>
                    <RouterLink props={
                        {
                            name: 'profile'
                        }
                    }>
                        <span>
                            Profile
                        </span>
                    </RouterLink>
                </div>
                <hr/>
                <RouterOutlet props={{parent: 'root'}} />
            </div>
        )
    }

}