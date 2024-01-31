import { useState, useEffect, Dispatch, SetStateAction } from "react";

type InitialStateType<T> = T | (() => T);

export function useLocalStorageState<T>(
  initialState: InitialStateType<T>,
  key: string
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : 
           typeof initialState === 'function' ? initialState() : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
