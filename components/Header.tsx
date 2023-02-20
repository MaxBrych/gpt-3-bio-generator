import Image from "next/image";
import Link from "next/link";
import logo from "../public/nk_logo.svg";

export default function Header() {
  return (
    <header className="fixed top-0 flex items-center justify-center w-full h-16 px-4 bg-white border-b md:static lg:max-w-5xl lg:rounded-t-xl border-dark-95">
      <Link
        href="/"
        className="flex items-center justify-center flex-1 w-1/2 h-16 py-1 space-x-3"
      >
        <div className="relative w-56 h-16">
          <Image
            className="object-fit-cover"
            alt="Nordkurier KI Tools"
            src={logo}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Link>
    </header>
  );
}
