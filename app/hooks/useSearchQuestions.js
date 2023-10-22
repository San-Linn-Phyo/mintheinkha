import { useEffect, useState } from "react";
import useDebounce from "@/app/hooks/useDebounce";

export default function useSearchQuestions(keyword) {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const debounce = useDebounce(keyword, 1500);

  useEffect(() => {
    if (keyword) setIsLoading(true);
    else if (!keyword) {
      setIsLoading(false);
      setSuggestions([]);
    }
  }, [keyword]);

  useEffect(() => {
    if (keyword && debounce)
      fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/questions?keyword=${debounce}`,
      )
        .then((response) => response.json())
        .then((result) => {
          if (!result.length) {
            setNotFound(true);
            setSuggestions([]);
          } else {
            setNotFound(false);
            setSuggestions(result);
          }
          setIsLoading(false);
        });
  }, [debounce]);

  return { suggestions, isLoading, notFound };
}
