import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

  const {
    formState,
    handleInputChange,
    handleResetForm,
    username,
    email,
    password,
  } = useForm({
    username: '',
    email: '',
    password: '',
  });


  return (
    <>
      <h1>FormState test</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={ username }
        onChange={ handleInputChange }
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="username@here.com"
        name="email"
        value={ email }
        onChange={ handleInputChange }
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={ password }
        onChange={ handleInputChange }
      />

      <button onClick={ handleResetForm } className='btn btn-primary mt-2'>Borrar</button>
    </>
  )
}