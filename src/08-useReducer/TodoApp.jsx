import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
/*   {
    id: new Date().getTime(),
    desc: 'Aprender Maticacas',
    done: false,
  }  */
];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {

  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ))
  }, [todos]);

  const handleNewTodo = ( todo ) => {
      const action = {
        type: '[TODO] add',
        payload: todo
      }

      dispatchTodo( action );
  }

  const handleDeleteTodo = ( todoId ) => {
    const action = {
      type: '[TODO] delete',
      payload: todoId
    }

    dispatchTodo( action );
  }

  return (
    <>
      <h1>TodoApp 10, <small>pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todoList={ todos } onDeleteTodo = { (id) => handleDeleteTodo( id ) } />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={ handleNewTodo } />
            
        </div>

      </div>
      
    </>
  )
}