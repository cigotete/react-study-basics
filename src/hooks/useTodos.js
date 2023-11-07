import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
  
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init)

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

  const handleToggleTodo = ( todoId ) => {
    const action = {
      type: '[TODO] toggle',
      payload: todoId
    }

    dispatchTodo( action );
  }

  const todosCount = todos.length;
  const pendingTodosCount = todos.filter(todo=> !todo.done).length;

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount,
    }

}