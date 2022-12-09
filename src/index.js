import { renderApp } from "./init.js";
import { counter } from "./usage/counter.js";

const element = document.getElementById('root')

renderApp(element, new counter())