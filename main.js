import './style.css'
import { App } from './src/todos/app';
import todoStore from './src/store/todo.store';

console.log('Hi main.js');

todoStore.initStore();
// document.querySelector('#app').innerHTML = `<div></div>`
App('#app');
