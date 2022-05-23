import { useEffect, useState } from 'react';

function useDebouce(value, delay) {
  const [deboucedValue, setDeboucedValue] = useState(value);

  useEffect(() => {
    const handle = setTimeout(() => {
      setDeboucedValue(value);
    }, delay);
    return () => {
      clearTimeout(handle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return deboucedValue;
}

export default useDebouce;
