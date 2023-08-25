import { Todo } from "../todos/models/todo.model";


// enum Filters to object properties pointing to string
const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'Pending'
}

// Global state of App 
const state = {
    todos: [
        new Todo('Tarea primera'),
        new Todo('Tarea segunda'),
        new Todo('Tarea tercera'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log('InitStore');
}



export default {

    initStore,
}



