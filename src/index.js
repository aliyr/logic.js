import { Logic } from "./init.js";
import { Counter } from "./usage/counter.js";

const element = document.getElementById('root')

const lg = new Logic({
    container: element,
    rootComponent: <Counter />
})

lg.render()
