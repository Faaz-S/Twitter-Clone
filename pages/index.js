import Head from "next/head";
import { Inter } from "next/font/google";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
      </Head>
      {/*Page Content*/}
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        {/*Feed*/}
        <Sidebar />

        {/*Feed*/}

        <Feed />

        {/*Widgets*/}

        {/*Modal*/}
      </main>
    </div>
  );
}
