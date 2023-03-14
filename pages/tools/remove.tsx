import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar2 from "../../components/Sidebar2";
import { tools } from "../../components/Use";

import RestoreUpload from "../../components/Tools/RestoreUpload";
import RemoveBG from "../../components/Tools/RemoveBG";
const Remove = () => {
  return (
    <div>
      <Head>
        <title>Qualität Verbessern</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen gap-4 overflow-hidden bg-white font-Nunito md:grid md:grid-cols-4">
        <div className="h-full md:col-span-1">
          <Header />
          <Sidebar2 tools={tools} />
          <Footer />
        </div>
        <div className="h-full md:py-4 md:col-span-3">
          <RemoveBG />
        </div>
      </div>
    </div>
  );
};

export default Remove;
