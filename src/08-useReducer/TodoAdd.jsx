import PropTypes from 'prop-types';
import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

  const {desc, handleInputChange, handleResetForm } = useForm(
    {
      desc: ''
    }
  );

  const onFormSubmit = ( event ) => {
    event.preventDefault();
    if ( desc.length <= 1 ) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      desc: desc,
    }

    onNewTodo(newTodo);
    handleResetForm()
  }
  
  return (
    <>
      <form onSubmit={ onFormSubmit }>
        <input
            type="text"
            name="desc"
            className="form-control"
            placeholder="What todo?"
            autoComplete="off"
            value= { desc }
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