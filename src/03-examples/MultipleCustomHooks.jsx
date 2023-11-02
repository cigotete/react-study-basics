
import React from 'react';
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {

  const { data, loading, error } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes`);
  console.log(data, loading, error);

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
    </>
  )
}
