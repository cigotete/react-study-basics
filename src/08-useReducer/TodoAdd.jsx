import PropTypes from 'prop-types';
import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

  const {description, handleInputChange, handleResetForm } = useForm(
    {
      description: ''
    }
  );

  const onFormSubmit = ( event ) => {
    event.preventDefault();
    if ( description.length <= 1 ) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    }

    onNewTodo(newTodo);
    handleResetForm()
  }
  
  return (
    <>
      <form onSubmit={ onFormSubmit }>
        <input
            type="text"
            name="description"
            className="form-control"
            placeholder="What todo?"
            autoComplete="off"
            value= { description }
            onChange={ handleInputChange }
        />
        <button
            className="btn btn-primary mt-1 btn-block"
        >
            Agregar
        </button>
      </form>
    </>
  )
}

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};