import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-start w-full h-16 bg-white border-b lg:max-w-5xl lg:rounded-t-xl border-dark-95 sm:px-4">
      <Link href="/" className="flex items-center justify-start space-x-3">
        <Image
          alt="header text"
          src="/NK_Logo.svg"
          className="w-8 h-8 sm:w-8 sm:h-8"
          width={32}
          height={32}
        />
        <h1 className="ml-2 text-xl font-bold tracking-tight sm:text-xl">
          AI-Tools
        </h1>
      </Link>
    </header>
  );
}
