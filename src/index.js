import { logic } from "./init.js";
import { Router } from "./routing/router.js";
import { Main } from "./usage/component/main";
import {routes} from "./usage/routing/routes";

const element = document.getElementById('root')

const router = new Router(routes)

logic.use('router', router)

// can add anything global
logic.use('test', 'text')

logic.mount({
    element,
    component: Main
})
