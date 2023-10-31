import React, { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'qweqwe',
    email: 'qweqwe@qweqwe.com',
  });

  const { username, email } = formState;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  useEffect(() => {
    //console.log('hey! This is when component is mounted.');
  }, []);

  useEffect(() => {
    //console.log('hey! This is when form changes.');
  }, [ formState ]);

  useEffect(() => {
    //console.log('hey! This is when email field changes.');
  }, [ email ]);

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

    {
      (username === 'qweqwe2') && <Message />
    }

      <input
        type="email"
        className="form-control mt-2"
        placeholder="username@here.com"
        name="email"
        value={ email }
        onChange={ handleInputChange }
      />
    </>
  )
}