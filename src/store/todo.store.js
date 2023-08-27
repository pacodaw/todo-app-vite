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

    console.clear();
    console.log('InitStore');
    loadStore();
/*  setFilter();
    getCurrentFilter();
    getTodos(); 
    toggleTodo();
    loadStore(); */
}

const loadStore = () => {

    console.table(state.todos);
}

const setFilter = ( newFilter = Filters.Pending ) => {

    if( newFilter !== Filters.All || 
        newFilter !== Filters.Pending || 
        newFilter !== Filters.Completed ) throw new Error(`${newFilter} is not valid`);

        state.filter = newFilter;
}

const getCurrentFilter = () => {

    return state.filter;
}

const getTodos = ( filter = Filters.All ) => {
    
    switch( filter ) {

        case Filters.All:
            return [...state.todos];  // [... ] spread op. destructure to break reference of the state object cuñaoo

        case Filters.Completed:
            return state.todos.filter( todo => todo.done );  // ( todo => todo.done === true)

        case Filters.Pending:
            return state.todos.filter( todo => !todo.done );
        
            default:
                 throw new Error(`Option ${filter} is not valid`);
    }
}

/**
 * @param {String} description 
 */
const addTodo = ( description ) => {

    if ( !description ) throw new Error( 'Description is required');
    state.todos.push( new Todo ( description ));
}

const toggleTodo = ( todoId ) => {

    state.todos = state.todos.map( todo => {

        if( todo.id === todoId ) {

            todo.done = !todo.done;
        }
        return todo;
    })
}

const deleteTodo = ( todoId ) => {

    state.todos = state.todos.filter( todo => todo.id !== todoId );
}

const deleteCompleted = () => {

    return state.todos.filter( todo => !todo.done );
}

export default {
    initStore,
    loadStore,
    setFilter,
    getCurrentFilter,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
}



