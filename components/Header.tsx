import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full px-4 pb-4 mt-4 border-b-2 sm:px-4">
      <Link href="/" className="flex space-x-3">
        <Image
          alt="header text"
          src="/NK_Logo.svg"
          className="w-8 h-8 sm:w-12 sm:h-12"
          width={32}
          height={32}
        />
        <h1 className="ml-2 text-2xl font-bold tracking-tight sm:text-4xl">
          Nordkurier
        </h1>
      </Link>
      <a href="https://nordkurier.de" target="_blank" rel="noreferrer">
        <Image
          alt="Vercel Icon"
          src="/vercelLogo.png"
          className="sm:w-8 sm:h-[27px] w-8 h-[28px]"
          width={32}
          height={28}
        />
      </a>
    </header>
  );
}
