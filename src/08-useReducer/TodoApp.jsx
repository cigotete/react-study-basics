import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
  {
    id: new Date().getTime(),
    desc: 'Aprender Maticacas',
    done: false,
  },
  {
    id: new Date().getTime() + 100,
    desc: 'Aprender Canto',
    done: false,
  },
]

export const TodoApp = () => {

  const [todos, dispatchTodo] = useReducer(todoReducer, initialState)

  const handleNewTodo = ( todo ) => {
      console.log({todo})
  }

  return (
    <>
      <h1>TodoApp 10, <small>pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todoList={ todos } />
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
