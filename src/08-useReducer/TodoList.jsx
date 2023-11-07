import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todoList = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <ul className="list-group">
        {
          todoList.map( ( todoItem ) => (
          <TodoItem
          key={ todoItem.id }
          todoItem={ todoItem }
          //onDeleteTodo={ onDeleteTodo }
          onDeleteTodo={ ( id ) => onDeleteTodo( id ) }
          onToggleTodo={ ( id ) => onToggleTodo( id ) }
          />
          ))
        }
      </ul>
    </>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};