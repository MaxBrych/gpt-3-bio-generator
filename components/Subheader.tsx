import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ToolProps, tools } from "./Tools";

interface ToolPageProps {
  tool: ToolProps;
}

const Subheader: React.FC<ToolPageProps> = ({ tool }) => {
  return (
    <div className="fixed flex w-[92vw] items-center justify-center md:w-full mt-2 top-20 left-4 right-4 md:relative ">
      <header className="flex items-center justify-between w-full px-4 rounded-full md:w-1/2 bg-cyan-90 lg:max-w-5xl h-14 sm:px-4">
        <Link
          href={"/"}
          className="flex items-center justify-center border rounded-full h-9 w-9 border-dark-90 hover:bg-dark-90 md:w-11 md:h-11"
        >
          <Image
            src={
              "https://drive.google.com/uc?export=view&id=1bxXQP9_KHXoOE-ygEfE7M1HrC3rBMEDh"
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
