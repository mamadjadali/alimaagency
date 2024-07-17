"use client";
import React from "react";
import { WobbleCard } from "../../../ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <>
    <h2 className="mt-32 text-center text-4xl text-white">Comprehensive Branding Solutions Tailored for You</h2>
    <div className="px-6 sm:px-6 lg:px-0 my-16 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-[#008081] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
          Brand Strategy
          </h2>
          <p className="mt-4 text-left  text-base/6 text-[#19191c]">
          A strong brand starts with a solid strategy. We work with you to define your brand’s mission, vision, values, and positioning, creating a roadmap for your brand’s success.
          </p>
        </div>
        <img
          src="/freedom.svg"
          width={500}
          height={500}
          alt="Brand Strategy"
          className="absolute -right-4 lg:-right-[0%] -bottom-20 object-contain"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#c7e0da]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
        Identity Design
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-[#19191c]">
        Our identity design services encompass everything from logo creation to visual elements and brand messaging. We ensure your brand identity is unique, memorable, and resonates with your target audience.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#f2e2a4] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
          Brand Audits
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-[#19191c]">
          Our brand audits provide a comprehensive evaluation of your current brand. We identify strengths, weaknesses, and opportunities, offering insights and recommendations to enhance your brand’s impact.
          </p>
        </div>
        <img
          src="/audit.svg"
          width={500}
          height={500}
          alt="Audits"
          className="absolute -right-10 md:-right-[0%] lg:-right-[0%] -bottom-5 object-contain"
        />
      </WobbleCard>
    </div>
    </>
  );
}
