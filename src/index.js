import { logic } from "@logic/init.js";
import { Router } from "@logic/routing/router.js";
import { Main } from "@logic/usage/component/main";
import {routes} from "@logic/usage/routing/routes";

const element = document.getElementById('root')

const router = new Router(routes)

logic.use('router', router)

// can add anything global
logic.use('test', 'text')

logic.mount({
    element,
    component: Main
})
