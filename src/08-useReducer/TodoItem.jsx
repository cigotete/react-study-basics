import PropTypes from 'prop-types';

export const TodoItem = ({ todoItem, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
      <span 
          className={`align-self-center ${ (todoItem.done) ? 'text-decoration-line-through' : '' }`}
          onClick={ () => onToggleTodo( todoItem.id ) }
        >
          { todoItem.desc }
          </span>
        <span className="align-self-center">
          { new Date(todoItem.id).getFullYear() }/
          { new Date(todoItem.id).getMonth() }/
          { new Date(todoItem.id).getDate() } h
          { new Date(todoItem.id).getHours() }:
          { new Date(todoItem.id).getMinutes() }:
          { new Date(todoItem.id).getSeconds() }
          </span>
        <button
        className="btn btn-danger"
        onClick={ () => onDeleteTodo ( todoItem.id ) }
        >Borrar</button>
      </li>
    </>
  )
}

TodoItem.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  }).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
}
