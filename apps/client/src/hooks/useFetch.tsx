import { useState, useEffect } from 'react';

const useFetch = <T,>(url: string) => {
  const [data, setData] = useState(undefined);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const abortCtrl = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCtrl.signal }).then(res => {
        console.log('i fetch', url, res);
        if(!res.ok) {
          throw Error('Could not fetch data');
        }
        return res.json();
      }).then(data => {
        console.log('i then');
        setData(data);
        setIsPending(false);
        setError('');
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setIsPending(false);
          setError(err.message);
          console.log('hejhej error:', err.message);
        }
      })
    }, 1000);

    return () => abortCtrl.abort();
  }, [url]);

  return { data, isPending, error } as T;
}

export default useFetch;
