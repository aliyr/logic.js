import { renderApp } from "./init.js";
import { counter } from "./usage/counter.js";
//
// const root = document.createElement('div')
// root.setAttribute('id', 'root')
// document.body.appendChild(root)

const element = document.getElementById('root')
console.log(element)

renderApp(element, counter)