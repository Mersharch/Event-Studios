import { urlFor } from "@/sanity/lib/image";
import { getClients } from "@/sanity/services/getClients";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default async function Partners() {
  const clients = await getClients();

  // Function to render a single client card
  const renderClientCard = (client: (typeof clients)[0]) => {
    const img = client.image?.asset?._ref
      ? urlFor(client.image.asset._ref).url()
      : undefined;
    return (
      <div
        key={client._id}
        className="relative h-[100px] w-[200px] sm:h-[120px] sm:w-[240px] md:h-[150px] md:w-[300px] bg-white shadow-lg flex-shrink-0 rounded-lg overflow-hidden"
      >
        <Image
          alt={client.name?.toString() as string}
          src={img || "https://placehold.co/550x310/png"}
          className="object-contain p-4"
          priority
          fill
        />
      </div>
    );
  };

  // Function to render marquee content
  const renderMarqueeContent = (clientsList: typeof clients) => (
    <div className="flex gap-4 lg:gap-10 px-4">
      {clientsList.map(renderClientCard)}
    </div>
  );

  // Determine if we should split the marquee
  const shouldSplitMarquee = clients.length >= 10 && clients.length % 2 === 0;
  const halfLength = Math.floor(clients.length / 2);

  return (
    <main className="flex-1 flex flex-col gap-8 md:gap-12">
      <section className="flex-1 flex items-center justify-center px-4">
        <Image
          src={"/svgs/arrows-left.svg"}
          alt="arrows-left"
          width={100}
          height={100}
          priority
          className="hidden md:block"
        />
        <p className="text-center w-full max-w-[400px] text-slate-500 text-lg">
          <span className="text-black font-bold">Event Studios</span> is a top
          photography company that captures unforgettable moments,{" "}
          <span className="text-black font-bold">provides stunning images</span>{" "}
          for weddings, corporate events and family gatherings.
        </p>
        <Image
          src={"/svgs/arrows-right.svg"}
          alt="arrows-left"
          width={100}
          height={100}
          priority
          className="hidden md:block"
        />
      </section>

      <section className="w-full flex flex-col gap-4">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A7168] mb-4 md:mb-8">
          Clients We&apos;ve Worked With
        </h2>
        {shouldSplitMarquee ? (
          <>
            <Marquee
              className="overflow-hidden"
              gradient
              gradientColor="white"
              speed={40}
            >
              {renderMarqueeContent(clients.slice(0, halfLength))}
            </Marquee>
            <Marquee
              className="overflow-hidden"
              gradient
              gradientColor="white"
              speed={40}
              direction="right"
            >
              {renderMarqueeContent(clients.slice(halfLength))}
            </Marquee>
          </>
        ) : (
          <Marquee
            className="overflow-hidden"
            gradient
            gradientColor="white"
            speed={40}
          >
            {renderMarqueeContent(clients)}
          </Marquee>
        )}
      </section>
    </main>
  );
}
