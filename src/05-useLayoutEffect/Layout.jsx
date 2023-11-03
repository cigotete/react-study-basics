import { useFetch, useCounter } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, loading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);
  const { author, quote } = !!data && data[0];
  // !!data = data recives undefined, but ! gives false and !! gives true

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
        loading
        ? <LoadingQuote text="Loading..." />
        : <Quote quote={ quote } author={ author } />
      }

      <button
      onClick={() => {increment(1)}}
      disabled={ loading }
      className="btn btn-primary"
      >
        Next quote
      </button>
    </>
  )
}
