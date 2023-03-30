import { tools, UseProps } from "./Use";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "./Footer";
import { useState } from "react";

interface UseListProps {
  tools: UseProps[];
}

const Sidebar2: React.FC<UseListProps> = ({ tools }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="fixed top-0 right-0 z-20 p-4 md:hidden">
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-95"
        >
          <span className="font-bold text-black">≡</span>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed z-10 top-16 right-0 md:relative md:top-0 h-full w-full gap-2 px-4 py-4 bg-white w- md:flex md:flex-col md:gap-2`}
      >
        {tools.map((tool) => (
          <Link
            href="/tools/remove"
            key={tool.id}
            className={`flex items-center justify-start gap-2 p-2 rounded-full cursor-pointer h-12 transition md:p-4 md:border-cyan-90 hover:bg-cyan-95 hover:text-cyan-40 ${
              router.pathname == `/tools/${tool.slug}`
                ? "bg-cyan-90"
                : "bg-white"
            }`}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-cyan-95">
              <Image src={tool.icon} alt={tool.name} width={20} height={20} />
            </div>
            <h1 className="font-semibold leading-3 text-m md:text-sm md:text-left">
              {tool.name}
            </h1>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar2;
