import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 flex items-center justify-center w-full h-16 px-4 bg-white border-b md:static lg:max-w-5xl lg:rounded-t-xl border-dark-95">
      <Link
        href="/"
        className="flex items-center justify-center flex-1 w-1/2 h-16 py-1 space-x-3"
      >
        <Image
          alt="Nordkurier KI Tools"
          src="https://drive.google.com/uc?export=view&id=1oQSE6663WT_rgxojC6dkjT53tvXT89tu"
          width={224}
          height={56}
        />
      </Link>
    </header>
  );
}
