import { useState, useEffect} from 'react'

export const useFetch = ( url ) => {

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const getFetch = async () => {

    setState({
      ...state,
      loading: true,
    });

    try {
      const resp = await fetch( url );
      const data = await resp.json();
      setState({
        data: data,
        loading: false,
        error: null,
      })
    } catch (error) {
      setState({
        ...state,
        loading: false,
        error: 'No se pudo cargar la info',
      })
    }

    

  }

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
  }
}