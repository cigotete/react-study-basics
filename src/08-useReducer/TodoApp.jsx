import { useTodos } from "../hooks";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

export const TodoApp = () => {

  const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();

  return (
    <>
      <h1>TodoApp 10, <small>pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
          todoList={ todos }
          onDeleteTodo = { (id) => handleDeleteTodo( id ) }
          onToggleTodo = { (id) => handleToggleTodo( id ) }
          />
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
