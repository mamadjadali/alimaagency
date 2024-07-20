"use client";
import { WobbleCard } from "../../../ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <>
    <h2 className="mt-32 text-center text-4xl text-white">Comprehensive Content Solutions for Every Need</h2>
    <div className="px-6 sm:px-6 lg:px-0 my-16 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-[#384593] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
          SEO Content
          </h2>
          <p className="mt-4 text-left  text-base/6 text-[#19191c]">
          Our SEO content services ensure that your content is optimized for search engines, helping you rank higher and attract more organic traffic. We integrate keywords seamlessly to improve your online presence.
          </p>
        </div>
        <img
          src="/seoc.svg"
          width={400}
          height={400}
          alt="SEO Content"
          className="absolute -right-4 lg:-right-[5%] -bottom-30 md:-bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#e3af64]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Email Marketing
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Effective email marketing requires compelling content. We create personalized email campaigns that engage and convert, from newsletters and promotional emails to automated sequences and drip campaigns.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#0f1a3a] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Podcast Production
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Podcasts are a powerful way to connect with your audience. We handle all aspects of podcast production, from scripting and recording to editing and distribution, ensuring your message is heard loud and clear.
          </p>
        </div>
        <img
          src="/podcast.svg"
          width={500}
          height={500}
          alt="Podcast Production"
          className="absolute -right-10 sm:-bottom-32 md:right-0 lg:right-[10%] object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
    </>
  );
}
