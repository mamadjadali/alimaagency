"use client";
import React from "react";
import { WobbleCard } from "../../ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <>
    <h2 className="mt-32 text-center text-4xl text-white">Create valuable content that educates and engages</h2>
    <div className="px-6 sm:px-6 lg:px-0 my-16 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-[#dedbcc] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
          Create valuable content that educates and engages.
          </h2>
          <p className="mt-4 text-left  text-base/6 text-[#19191c]">
          Our content marketing services build your authority and drive organic growth. Through blogs, videos, infographics, and more, we deliver content that speaks to your audience’s needs and interests.
          </p>
        </div>
        <img
          src="/engage.svg"
          width={500}
          height={500}
          alt="valuable content"
          className="absolute -right-16 lg:-right-[10%] -bottom-24 md:-bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Drive instant traffic with pay-per-click advertising.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Get immediate results with our expertly managed PPC campaigns. We design and optimize ads that attract clicks and conversions, ensuring you get the most out of your ad spend.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Boost your search engine rankings and visibility.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Rise above the competition with our SEO services. We optimize your website for search engines, improving your rankings, driving organic traffic, and increasing your online presence.
          </p>
        </div>
        <img
          src="/seo.svg"
          width={500}
          height={500}
          alt="search engine rankings"
          className="absolute md:right-[0%] -bottom-5 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
    </>
  );
}
