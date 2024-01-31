import { useState, useEffect } from 'react';

interface UseAsyncProps<T> {
  asyncFunction: () => Promise<T>;
  immediate?: boolean;
}

interface UseAsyncResult<T> {
  data: T | null;
  loading: boolean;
  execute: () => Promise<void>;
}

export function useAsync<T>({ asyncFunction, immediate = true }: UseAsyncProps<T>): UseAsyncResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const execute = async () => {
    try {
      setLoading(true);
      const response = await asyncFunction();
      setData(response);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [immediate]); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, loading, execute };
}
