import React from "react";
import HorizontalScrollCarousel from "./HorizontalCarousel";
import TeamList from "./TeamList";

const page = () => {
  return (
    <div className="">

      <div
        className="background-div bg-no-repeat bg-cover with-overlay"
        style={{
          backgroundImage: "url('/banners/about.webp')",
          width: "full",
          height: "700px",
        }}
      >
        <div className="w-[100%] absolute h-[700px] bg-gray-500 opacity-30"></div>
        <div className=" flex justify-center h-full">
          <h3 className=" text-white text-center text-5xl absolute font-bold pt-64 opacity-100 z-50">
            Meet Out Team
          </h3>
        </div>
        {/* content */}
      </div>

      <div className=" max-w-[1440px] mx-auto ">

      <HorizontalScrollCarousel/>

        <TeamList/>
      </div>

    </div>
  );
};

export default page;