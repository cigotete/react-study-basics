import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todoList = [], onDeleteTodo }) => {
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
};