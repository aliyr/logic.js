import { Logic } from "./init.js";
import { Counter } from "./usage/counter.js";

const element = document.getElementById('root')

Logic.render(element, <Counter />)