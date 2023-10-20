"use client";

import useSearchQuestions from "@/app/hooks/useSearchQuestions";
import { useState } from "react";
import Link from "next/link";

export default function SearchbarWithAutocomplete() {
  const [keyword, setKeyword] = useState("");
  const { suggestions, isLoading, notFound } = useSearchQuestions(keyword);

  function handleKeyword(e) {
    setKeyword(e.target.value);
  }

  return (
    <div className="relative z-50">
      <div className="relative">
        <input
          value={keyword}
          onChange={handleKeyword}
          type="text"
          placeholder="မေးခွန်းလေးတွေဒီမှာရှာပါ"
          className="input input-bordered input-primary w-full pe-14"
        />

        <div
          className={`absolute top-1/2 -translate-y-1/2 right-0 h-full pe-4 flex items-center ${
            !isLoading ? "hidden" : ""
          }`}
        >
          <span className="loading loading-dots loading-md"></span>
        </div>
      </div>

      <div className="absolute top-full w-full">
        <ul
          className={`menu bg-base-200 w-full rounded-box flex-nowrap overflow-auto mt-2 max-h-48 
        ${!suggestions.length ? "hidden" : ""}`}
        >
          {suggestions.map((suggestion) => {
            return (
              <li key={suggestion._id}>
                <Link href={`questions/${suggestion.questionNo}`}>
                  {suggestion.questionName}
                </Link>
              </li>
            );
          })}
        </ul>

        {notFound ? (
          <div className="w-full p-4 bg-base-200 rounded-box mt-2">
            <span className="">ရှာမတွေ့ပါ</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
