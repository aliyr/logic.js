import { renderApp } from "./init.js";
import { Counter } from "./usage/counter.js";

const element = document.getElementById('root')

renderApp(element, <Counter />)