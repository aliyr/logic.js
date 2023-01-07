import Component from "@logic/component";
import {RouterOutlet} from "@logic/routing/router-outlet";
import {RouterLink} from "@logic/routing/router-link";

export class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                profile main page
                <RouterLink props={
                    {
                        name: 'profilePurchases'
                    }
                }>
                        <span>
                            profile purchases
                        </span>
                </RouterLink>
                <RouterOutlet props={{parent: 'profile'}} />
            </div>
        )
    }

}