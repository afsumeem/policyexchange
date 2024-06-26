import Link from "next/link";
import React from "react";

const Events = () => {
  return (
    <div className="relative my-16 h-screen">
      <div className="relative parallax z-10 flex justify-center items-end pb-10 h-full px-28 max-h-[600px]">
        <div className="z-10">
          <h3 className=" text-7xl font-bold text-white">
            Discover Our <br />
            Exciting Events.{" "}
          </h3>
          <p className=" text-white mt-8 text-4xl font-bold ">
            Get to know a bit about us.
          </p>
        </div>
        <div className=" w-1/2 flex justify-end items-center z-10">
          <Link href={"/events"} className=" ">
            <button className="text-white text-xl py-2 font-bold border-2 border-white rounded-full w-44 hover:bg-[#179A44] hover:border-[#179A44] transition-all duration-700">
              View All Events
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
