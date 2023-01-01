import Component from "../../component/index";
import {RouterOutlet} from "../../routing/router-outlet";
import {RouterLink} from "../../routing/router-link";

export class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <RouterLink props={{to: '/'}}>
                        <span>
                            Home
                        </span>
                    </RouterLink>
                    <RouterLink props={{to: '/product'}}>
                        <span>
                            Product
                        </span>
                    </RouterLink>
                    <RouterLink props={{to: '/profile'}}>
                        <span>
                            Profile
                        </span>
                    </RouterLink>
                </div>
                <hr/>
                <RouterOutlet />
            </div>
        )
    }

}