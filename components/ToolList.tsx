import { tools, ToolProps } from "./Tools";
import Link from "next/link";
import Image from "next/image";

interface ToolListProps {
  tools: ToolProps[];
}

const ToolList: React.FC<ToolListProps> = ({ tools }) => (
  <>
    <h3 className="mb-2 text-lg font-bold tracking-tight md:mb-4 md:text-xl md:font-bold">
      Tools
    </h3>
    <div className="grid w-full grid-cols-3 gap-2 bg-white md:gap-4">
      {tools.map((tool) => (
        <Link
          href="/tools/[slug]"
          as={`/tools/${tool.slug}`}
          key={tool.id}
          className="flex flex-col items-center justify-center h-full gap-2 p-2 transition cursor-pointer md:p-4 md:justify-start md:items-start md:border md:bg-white md:border-dark-90 md:hover:bg-dark-99 rounded-xl"
        >
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-95">
            <Image src={tool.icon} alt={tool.name} width={24} height={24} />
          </div>
          <div className="h-6 md:h-auto">
            <h1 className="text-xs font-semibold leading-3 md:text-base md:text-left">
              {tool.name}
            </h1>
            <p className="invisible text-sm text-dark-50 md:text-left md:visible">
              {tool.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </>
);

export default ToolList;
