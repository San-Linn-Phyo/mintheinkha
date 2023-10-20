import { useEffect, useState } from "react";

export default function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState("");

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timeoutID);
  }, [value, delay]);

  return debounceValue;
}
