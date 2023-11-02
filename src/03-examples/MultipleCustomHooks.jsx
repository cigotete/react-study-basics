
import React from 'react';
import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {

  const { data, loading, error } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes`);
  const { author, quote } = !!data && data[0];
  // !!data = data recives undefined, but ! gives false and !! gives true

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
        loading
        ?
        (
          <div className="alert alert-info text-center">
            Loading...
          </div>
        )
        :
        (
          <blockquote className="blockquote text-end">
            <p className="mb-3">{ quote }</p>
            <footer className="blockquote-footer">{ author }</footer>
          </blockquote>
        )
      }
    </>
  )
}