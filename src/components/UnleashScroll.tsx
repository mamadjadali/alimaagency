"use client";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-[#e5eae6]">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] text-[#70fe90] font-bold mt-1 leading-none">
                Digital Presence
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`/Cover.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto m-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
