import React from "react";
import ToolList from "./ToolList";
import { tools } from "./Tools";
import ModelList from "./ModelList";
import { models } from "./Model";

export const Main = () => {
  return (
    <main className="flex flex-col lg:max-w-5xl items-start justify-start flex-1 w-full max-w-5xl min-h-[80vh] px-4 pt-8 text-center md:pt-12 md:px-12">
      <h1 className="max-w-2xl mb-4 text-3xl font-semibold text-left text-slate-900 md:mb-6">
        Willkommen zurück!
      </h1>
      <ModelList models={models} />
      <p className="mt-5 text-slate-500"></p>
    </main>
  );
};
