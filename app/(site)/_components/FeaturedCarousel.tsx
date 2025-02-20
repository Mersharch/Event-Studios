"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { ALL_FEATUREDResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";

export default function FeaturedCarousel({
  featured,
}: {
  featured: ALL_FEATUREDResult;
}) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {featured.map((feature) => {
          const featuredImage = feature.mainImage?.asset?._ref
            ? urlFor(feature.mainImage.asset._ref).url()
            : undefined;
          return (
            <CarouselItem key={feature.name}>
              <Image
                alt={feature.name?.toString() as string}
                width={500}
                height={500}
                src={featuredImage || "/images/work.png"}
                className="w-full object-cover object-center  flex-1  max-h-[592px] rounded-lg"
                priority
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
