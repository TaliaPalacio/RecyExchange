import React from "react";
import Header from "@/components/header";
import Carousel from "@/components/carousel-shadcn";
import FormRegister from "@/components/formRegister";

const postRecycling = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-around py-10 w-full">
        <div className="w-1/2 flex justify-center ">
          <Carousel />
        </div>
        <div className="">
          <FormRegister />
        </div>
      </div>
    </div>
  );
};

export default postRecycling;
