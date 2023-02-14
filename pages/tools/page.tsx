import { ToolProps, tools } from "../../components/Tools";
import Link from "next/link";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Chat from "../../components/Tools/Chat";
import Sidebar from "../../components/Sidebar";

interface TIndexProps {
  tool: ToolProps;
}

const TIndexPage: React.FC<TIndexProps> = ({ tool }) => {
  return (
    <>
      <Head>
        <title>Nordkurier KI-Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-h-screen min-h-screen md:grid md:grid-cols-4 bg-white">
        <div className="h-full md:col-span-1">
          <Header />
          <Sidebar tools={tools} />
          <Footer />
        </div>
        <div className="h-full md:col-span-3">
          <Chat tool={tool} />
        </div>
      </div>
    </>
  );
};

export default TIndexPage;
