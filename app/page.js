import Image from "next/image";
import SearchbarWithAutocomplete from "@/app/SearchbarWithAutocomplete";

export default function HomePage() {
  return (
    <>
      <header className="flex flex-col items-center gap-4 pt-14 pb-8">
        <Image src="/mintheinkha_logo.png" width={150} height={150} alt="" />
        <h1 className="text-2xl font-bold">လက်ထောက်ဗေဒင်</h1>
      </header>

      <SearchbarWithAutocomplete />

      <main className="py-6">
        <h3 className="font-bold mb-4">မေးခွန်းများ</h3>
      </main>
    </>
  );
}
