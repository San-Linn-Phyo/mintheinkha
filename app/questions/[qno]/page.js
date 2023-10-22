import Link from "next/link";

export default async function QuestionPage({ params: { qno } }) {
  const choices = [
    {
      myan: "၃",
      eng: "3",
    },
    {
      myan: "၁၀",
      eng: "10",
    },
    {
      myan: "၅",
      eng: "5",
    },
    {
      myan: "၁၀",
      eng: "10",
    },
    {
      myan: "၇",
      eng: "7",
    },
    {
      myan: "၂",
      eng: "2",
    },
    {
      myan: "၅",
      eng: "5",
    },
    {
      myan: "၂",
      eng: "2",
    },
    {
      myan: "၇",
      eng: "7",
    },
    {
      myan: "၈",
      eng: "8",
    },
    {
      myan: "၆",
      eng: "6",
    },
    {
      myan: "၄",
      eng: "4",
    },
    {
      myan: "၅",
      eng: "5",
    },
    {
      myan: "၃",
      eng: "3",
    },
    {
      myan: "၁",
      eng: "1",
    },
    {
      myan: "၁၀",
      eng: "10",
    },
    {
      myan: "၈",
      eng: "8",
    },
    {
      myan: "၆",
      eng: "6",
    },
    {
      myan: "၇",
      eng: "7",
    },
    {
      myan: "၂",
      eng: "2",
    },
    {
      myan: "၉",
      eng: "9",
    },
    {
      myan: "၄",
      eng: "4",
    },
    {
      myan: "၉",
      eng: "9",
    },
    {
      myan: "၆",
      eng: "6",
    },
    {
      myan: "၉",
      eng: "9",
    },
    {
      myan: "၄",
      eng: "4",
    },
    {
      myan: "၁",
      eng: "1",
    },
    {
      myan: "၈",
      eng: "8",
    },
    {
      myan: "၅",
      eng: "5",
    },
    {
      myan: "၁၀",
      eng: "10",
    },
    {
      myan: "၆",
      eng: "6",
    },
    {
      myan: "၃",
      eng: "3",
    },
    {
      myan: "၈",
      eng: "8",
    },
    {
      myan: "၄",
      eng: "4",
    },
    {
      myan: "၁",
      eng: "1",
    },
    {
      myan: "၆",
      eng: "6",
    },
    {
      myan: "၃",
      eng: "3",
    },
    {
      myan: "၁",
      eng: "1",
    },
    {
      myan: "၉",
      eng: "9",
    },
    {
      myan: "၁",
      eng: "1",
    },
    {
      myan: "၉",
      eng: "9",
    },
    {
      myan: "၇",
      eng: "7",
    },
    {
      myan: "၉",
      eng: "9",
    },
    {
      myan: "၇",
      eng: "7",
    },
    {
      myan: "၅",
      eng: "5",
    },
    {
      myan: "၂",
      eng: "2",
    },
    {
      myan: "၇",
      eng: "7",
    },
    {
      myan: "၄",
      eng: "4",
    },
    {
      myan: "၁၀",
      eng: "10",
    },
    {
      myan: "၅",
      eng: "5",
    },
    {
      myan: "၂",
      eng: "2",
    },
    {
      myan: "၈",
      eng: "8",
    },
    {
      myan: "၃",
      eng: "3",
    },
    {
      myan: "၁၀",
      eng: "10",
    },
    {
      myan: "၇",
      eng: "7",
    },
    {
      myan: "၄",
      eng: "4",
    },
    {
      myan: "၉",
      eng: "9",
    },
    {
      myan: "၂",
      eng: "2",
    },
    {
      myan: "၉",
      eng: "9",
    },
    {
      myan: "၄",
      eng: "4",
    },
    {
      myan: "၉",
      eng: "9",
    },
    {
      myan: "၆",
      eng: "6",
    },
    {
      myan: "၁",
      eng: "1",
    },
    {
      myan: "၂",
      eng: "2",
    },
    {
      myan: "၁၀",
      eng: "10",
    },
    {
      myan: "၈",
      eng: "8",
    },
    {
      myan: "၇",
      eng: "7",
    },
    {
      myan: "၅",
      eng: "5",
    },
    {
      myan: "၃",
      eng: "3",
    },
    {
      myan: "၄",
      eng: "4",
    },
    {
      myan: "၂",
      eng: "2",
    },
    {
      myan: "၁၀",
      eng: "10",
    },
    {
      myan: "၁",
      eng: "1",
    },
    {
      myan: "၆",
      eng: "6",
    },
    {
      myan: "၃",
      eng: "3",
    },
    {
      myan: "၆",
      eng: "6",
    },
    {
      myan: "၁",
      eng: "1",
    },
    {
      myan: "၈",
      eng: "8",
    },
    {
      myan: "၃",
      eng: "3",
    },
    {
      myan: "၈",
      eng: "8",
    },
    {
      myan: "၅",
      eng: "5",
    },
  ];

  let question = null;
  let error = false;

  // strings and number 0 are falsy
  if (parseInt(qno))
    try {
      question = await (
        await fetch(`${process.env.API_DOMAIN}/api/questions/${qno}`)
      ).json();
    } catch (error) {
      console.error("Something went wrong in fetching: ", error.message);
    }
  else error = true;

  return (
    <section className="py-14">
      <Link href="/" className="btn btn-accent">
        နောက်သို့
      </Link>

      {!error ? (
        <>
          <h1 className="mb-8 mt-14 text-center font-bold text-lg">
            {question.questionName}
          </h1>

          <div className="grid grid-cols-9 gap-1 max-w-xl mx-auto">
            {choices.map(({ myan, eng }, index) => {
              return (
                <Link
                  className="text-center bg-accent py-4 hover:bg-opacity-50"
                  href={`/questions/${qno}/answers/${eng}`}
                  key={eng + index}
                >
                  {myan}
                </Link>
              );
            })}
          </div>
        </>
      ) : (
        <h1 className="mb-8 mt-14 text-center font-bold text-2xl">
          Oops! Something went wrong
        </h1>
      )}
    </section>
  );
}
