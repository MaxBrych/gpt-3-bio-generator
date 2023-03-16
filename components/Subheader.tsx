import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ToolProps, tools } from "./Tools";

interface ToolPageProps {
  tool: ToolProps;
}

const Subheader: React.FC<ToolPageProps> = ({ tool }) => {
  return (
    <div className="fixed md:static flex w-[92vw] items-center justify-center md:w-full mt-2 top-20 left-4 right-4  ">
      <header className="flex items-center justify-between w-full gap-2 px-2 rounded-full sm:pr-4 md:w-auto bg-cyan-90 lg:max-w-5xl h-14 ">
        <Link
          href={"/"}
          className="flex items-center justify-center rounded-full h-9 w-9 hover:bg-cyan-80 md:w-10 md:h-10"
        >
          <Image
            src={
              "https://cdn.discordapp.com/attachments/1084536803157090514/1085986547318407178/chevron.png"
            }
            width={24}
            height={24}
            alt={""}
          />
        </Link>

        <h1 className="font-xsedium text-ss md:text-md sm:text-md">
          {tool.description}
        </h1>
        <div></div>
      </header>
    </div>
  );
};

export default Subheader;
