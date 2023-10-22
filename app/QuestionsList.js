"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Link from "next/link";

function LoadingButton() {
  return (
    <div className="flex justify-center py-4">
      <span className="loading loading-dots loading-lg"></span>
    </div>
  );
}

export default function QuestionsList() {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [isInitial, setIsInitial] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const { inView, ref } = useInView();

  useEffect(() => {
    fetch(`/api/questions?page=${page}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.length) setHasMore(false);
        else setQuestions([...questions, ...data]);
        setIsInitial(false);
        setIsLoading(false);
      });
  }, [page]);

  useEffect(() => {
    if (inView && !isLoading) {
      setPage(page + 1);
      setIsLoading(true);
    }
  }, [inView]);

  return (
    <>
      {isInitial ? <LoadingButton /> : null}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {questions.length
          ? questions.map((question) => {
              return (
                <div
                  key={question._id}
                  className="card w-full bg-base-100 shadow-xl"
                >
                  <div className="card-body">
                    <p>{question.questionName}</p>
                    <div className="card-actions justify-end">
                      <Link
                        href={`/questions/${question.questionNo}`}
                        className="btn btn-primary"
                      >
                        ဖတ်မည်
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>

      {!isInitial && hasMore ? (
        <div ref={ref}>{isLoading ? <LoadingButton /> : null}</div>
      ) : null}
    </>
  );
}
