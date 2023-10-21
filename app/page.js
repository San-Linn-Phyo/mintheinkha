import SearchbarWithAutocomplete from "@/app/SearchbarWithAutocomplete";
import QuestionsList from "@/app/QuestionsList";
import Header from "@/app/components/Header";

export default function HomePage() {
  return (
    <>
      <Header />

      <SearchbarWithAutocomplete />

      <main className="py-6">
        <h3 className="font-bold mb-4">မေးခွန်းများ</h3>

        <QuestionsList />
      </main>
    </>
  );
}
