import React, { FC } from 'react';

const useDebounce = (value: string) => {
  const [cacheValue, setCacheValue] = React.useState(value);

  React.useEffect(() => {
    const timeout = setTimeout(
      () => {
        setCacheValue(value);
      },
      value.length ? 0 : 10
    );

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return cacheValue;
};

export default useDebounce;
