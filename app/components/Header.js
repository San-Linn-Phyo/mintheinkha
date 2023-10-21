import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-4 pt-14 pb-8">
      <Image src="/mintheinkha_logo.png" width={150} height={150} alt="" />
      <h1 className="text-2xl font-bold">လက်ထောက်ဗေဒင်</h1>
    </header>
  );
}
