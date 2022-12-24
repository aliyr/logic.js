import { logic } from "./init.js";
import { Router } from "./routing/router";
import { Main } from "./usage/component/main";

const element = document.getElementById('root')

const router = new Router()

logic.use('router', router)
logic.use('test', 'text')

logic.mount({
    element,
    component: Main
})
