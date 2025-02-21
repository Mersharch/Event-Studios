import { Button } from "@/components/ui/button";

import { Snowflake } from "lucide-react";

import React from "react";
import { getFeatured } from "@/sanity/services/getFeatured";
import FeaturedCarousel from "./FeaturedCarousel";
import Link from "next/link";

export default async function OurWork() {
  const featured = await getFeatured();
  return (
    <div className="flex-1">
      <div className="relative flex flex-1 bg-primary">
        <div className="absolute inset-0 bg-gradient-to-tl from-white opacity-20 from-5% to-60%"></div>
        <div className="w-full z-10 flex flex-col lg:flex-row flex-1 px-5 py-20 md:p-20 space-y-10 lg:space-y-0 lg:space-x-20 lg:justify-around lg:items-center">
          <div className=" w-full space-y-3 max-w-[647px]">
            <FeaturedCarousel featured={featured} />
            <span className="text-white flex justify-end w-full">
              <Snowflake className=" w-5 h-5 mr-2" /> Featured
            </span>
          </div>
          <div className=" lg:w-96 flex flex-col space-y-14">
            <h2 className="text-white font-brittany text-2xl lg:text-4xl">
              Our Works
            </h2>
            <p className="text-white text-sm lg:text-lg text-justify leading-5 lg:leading-8">
              At Event Studios, we specialize in creating breathtaking
              photography that immortalizes your most cherished moments. From
              elegant weddings to dynamic corporate events and joyful family
              gatherings, our team is{" "}
              <span className="font-bold">
                dedicated to delivering stunning images
              </span>{" "}
              that tell your unique story.
            </p>
            <Button
              className="bg-secondary text-black rounded-full font-bold max-w-fit hover:bg-primary-foreground hover:scale-95 transition-all ease-in-out"
              asChild
            >
              <Link href={"/gallery"}>See Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
