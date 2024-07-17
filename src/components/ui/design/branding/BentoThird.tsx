"use client";
import { WobbleCard } from "../../wobble-card";

export function BentoGridThirdDemo() {
  return (
    <>
    <h2 className="mt-32 text-center text-4xl text-white">Reach the right audience at the right time</h2>
    <div className="px-6 sm:px-6 lg:px-0 my-16 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#dcd0a8]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
        Logo Design
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-[#19191c]">
        Your logo is the face of your brand. Our designers craft distinctive logos that reflect your brand’s essence and leave a lasting impression on your audience.
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-[#479ba6] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Brand Book Development
          </h2>
          <p className="mt-4 text-left  text-base/6 text-white">
          We develop detailed brand books that define your brand’s visual and verbal identity. From color schemes and typography to tone of voice, our brand books ensure consistency across all channels.
          </p>
        </div>
        <img
          src="/lighthous.svg"
          width={400}
          height={400}
          alt="Brand Book Development"
          className="absolute -right-16 lg:-right-[10%] -bottom-16 md:-bottom-10 object-contain"
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 h-full bg-[#f2f3f8] min-h-[300px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
          Visual Guidelines
          </h2>
          <p className="mt-4 text-left  text-base/6 text-[#19191c]">
          Our visual guidelines provide a blueprint for how your brand should be presented. These guidelines cover everything from logo usage to imagery and layout, ensuring your brand remains consistent and recognizable.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 h-full bg-[#012730] min-h-[300px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Packaging Design
          </h2>
          <p className="mt-4 text-left  text-base/6 text-white">
          Great packaging can set your product apart. We design packaging that not only looks good but also communicates your brand’s values and captures your target audience’s attention.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 row-span-2 h-full bg-[#005866] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
          Print and Digital Collateral
          </h2>
          <p className="mt-4 text-left  text-base/6 text-[#19191c]">
          From business cards and brochures to social media graphics and website visuals, we create print and digital collateral that align with your brand identity and reinforce your message.
          </p>
        </div>
        <img
          src="/collat.svg"
          width={500}
          height={500}
          alt="Digital Collateral"
          className="absolute -right-4 lg:-right-[0%] -bottom-14 md:-bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2  h-full bg-[#f2b394] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
          Rebranding Services
          </h2>
          <p className="mt-4 text-left  text-base/6 text-[#19191c]">
          Sometimes a brand needs a makeover. Our rebranding services help you redefine your brand’s identity, ensuring it remains relevant and compelling in an ever-changing market.
          </p>
        </div>
        <img
          src="/what.svg"
          width={400}
          height={400}
          alt="Rebranding"
          className="absolute -right-4 lg:-right-[0%] -bottom-10 object-contain"
        />
      </WobbleCard>
    </div>
    </>
  )
}
