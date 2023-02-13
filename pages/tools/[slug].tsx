import { ToolProps, tools } from "../../components/Tools";
import Link from "next/link";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { VibeType } from "../../components/DropDown";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Chat from "../../components/Tools/Chat";
import Subheader from "../../components/Subheader";
import Sidebar from "../../components/Sidebar";

interface ToolPageProps {
  tool: ToolProps;
}

const ToolPage: React.FC<ToolPageProps> = ({ tool }) => {
  return (
    <>
      <Head>
        <title>Nordkurier KI-Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-h-screen min-h-screen md:grid md:grid-cols-4">
        <div className="h-full md:col-span-1">
          <Header />
          <Sidebar tools={tools} />
          <Footer />
        </div>
        <div className="h-full md:col-span-3">
          <Subheader tool={tool} />
          <Chat tool={tool} />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-2/3 mr-4 rounded-full -z-10 bg-primary-100 bg-cyan-80 opacity-20 h-1/3 light:mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-2/3 mr-4 rounded-full -z-10 bg-primary-100 bg-cyan-80 opacity-20 h-1/3 light:mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute w-full h-full mr-4 rounded-full -z-10 bg-primary-100 bg-cyan-90 opacity-20 light:mix-blend-multiply filter blur-3xl animate-blob"></div>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = tools.map((tool) => ({
    params: { slug: tool.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const tool = tools.find((tool) => tool.slug === params.slug);

  return {
    props: {
      tool,
    },
  };
};

export default ToolPage;
