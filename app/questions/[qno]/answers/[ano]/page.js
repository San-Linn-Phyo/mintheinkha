"use client";

import Header from "@/app/components/Header";
import Link from "next/link";

export default async function AnswerPage({ params: { ano, qno } }) {
  let error = false;
  let answer = null;

  // strings and 0 are falsy
  if (parseInt(ano) && parseInt(qno))
    try {
      answer = await (
        await fetch(
          `${process.env.API_DOMAIN}/api/questions/${qno}/answers/${ano}`,
        )
      ).json();
    } catch (error) {
      console.error("Something went wrong in fetching: ", error.message);
    }
  else error = true;

  return (
    <section className="py-14">
      <Header />

      {!error ? (
        <>
          <h1 className="mb-8 text-center font-bold text-2xl">
            {answer.answerResult}
          </h1>

          <div className="text-center">
            <Link href={`/questions/${qno}`} className="btn btn-accent">
              နောက်သို့
            </Link>
          </div>
        </>
      ) : (
        <h1 className="text-center font-bold text-2xl">
          Oops! Something went wrong
        </h1>
      )}
    </section>
  );
}
