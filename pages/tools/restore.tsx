import Head from "next/head";

import RestoreUpload from "../../components/Tools/RestoreUpload";
const Restore = () => {
  return (
    <div>
      <Head>
        <title>Restore Photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <RestoreUpload />
      </main>
    </div>
  );
};

export default Restore;
