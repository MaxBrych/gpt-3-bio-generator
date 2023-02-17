import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import DropDown, { VibeType } from "../components/DropDown";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Main } from "../components/Main";
import Sidebar from "../components/Sidebar";
import { ToolProps, tools } from "../components/Tools";
import Chat from "../components/Tools/Chat";

const Home: NextPage = () => {
  return (
    <div className="flex  flex-col items-center justify-center min-h-screen mx-auto ">
      <div className="flex items-center justify-center w-full min-h-screen ">
        <Head>
          <title>Nordkurier KI-Chat</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex font-sans flex-col justify-between w-full md:justify-center lg:max-w-5xl">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-2/3 mr-4 rounded-full -z-10 bg-cyan-80 opacity-20 h-1/3 light:mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-2/3 mr-4 rounded-full -z-10 bg-cyan-80 opacity-20 h-1/3 light:mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute w-full h-full mr-4 rounded-full -z-10 bg-cyan-90 opacity-20 light:mix-blend-multiply filter blur-3xl animate-blob"></div>
    </div>
  );
};

export default Home;
