// "use client";
import Carousel from "@/components/CustomSlides";
import Events from "@/components/Events";
import Featured from "@/components/Featured";
import MeetTeam from "@/components/MeetTeam";
import Publications from "@/components/Publications";
import Services from "@/components/Services";
import Head from "next/head";

export default function Home() {
  return (
    <main className=" background-img ">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Carousel />
      <div className="max-w-[1440px] mx-auto">
        <Services />
        <Featured />
        <Publications />
        <Events />
        {/* <HomeEvents/> */}

        {/* <AchivmentBoard/> */}
        <MeetTeam />
      </div>
    </main>
  );
}
