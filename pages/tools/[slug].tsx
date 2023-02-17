import { ToolProps, tools } from "../../components/Tools";
import Link from "next/link";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

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

      <div className="min-h-screen gap-4 font-Nunito overflow-hidden bg-white md:grid md:grid-cols-4">
        <div className="h-full md:col-span-1">
          <Header />
          <Sidebar tools={tools} />
          <Footer />
        </div>
        <div className="h-full md:py-4 md:col-span-3">
          <Chat tool={tool} />
        </div>
      </div>
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
