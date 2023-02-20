import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0  items-center justify-center w-full h-16 px-4 bg-white border-b md:static flex lg:max-w-5xl lg:rounded-t-xl border-dark-95">
      <Link
        href="/"
        className="flex flex-1 items-center justify-center w-1/2 h-16 py-1 space-x-3"
      >
        <Image
          alt="header text"
          src="https://drive.google.com/uc?export=view&id=1oQSE6663WT_rgxojC6dkjT53tvXT89tu"
          className="w-8 h-8 sm:w-48 sm:h-48"
          width={64}
          height={64}
        />
      </Link>
    </header>
  );
}
