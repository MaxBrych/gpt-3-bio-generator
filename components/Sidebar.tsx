import { tools, ToolProps } from "./Tools";
import Link from "next/link";
import Image from "next/image";

interface ToolListProps {
  tools: ToolProps[];
}

const Sidebar: React.FC<ToolListProps> = ({ tools }) => (
  <>
    <div className="hidden w- h-full py-4 gap-2 px-4 bg-white md:flex md:flex-col md:gap-4 ">
      {tools.map((tool) => (
        <Link
          href="/tools/[slug]"
          as={`/tools/${tool.slug}`}
          key={tool.id}
          className="flex items-center justify-start gap-2 p-2 rounded-full cursor-pointer h-14 md:p-4 md:bg-white md:border-cyan-90 md:hover:bg-cyan-95 "
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-cyan-95">
            <Image src={tool.icon} alt={tool.name} width={20} height={20} />
          </div>
          <h1 className="text-xs leading-3 font-Medium md:text-base md:text-left">
            {tool.name}
          </h1>
        </Link>
      ))}
    </div>
  </>
);

export default Sidebar;
