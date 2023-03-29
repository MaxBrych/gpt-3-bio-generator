import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 flex items-center justify-center w-full h-16 px-4 bg-white border-b md:static lg:rounded-t-xl border-dark-95">
      <Link
        href="/"
        className="flex items-center justify-start flex-1 w-1/2 h-16 py-1 space-x-3 md:items-center md:justify-center"
      >
        <Image
          alt="Nordkurier KI Tools"
          src="https://cdn.discordapp.com/attachments/1084536803157090514/1084725912324558888/logo.png"
          width={224}
          height={56}
        />
      </Link>
    </header>
  );
}
