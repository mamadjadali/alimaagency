"use client";
import { WobbleCard } from "../wobble-card";

export function BentoGridThirdDemo() {
  return (
    <>
    <h2 className="mt-32 text-center text-4xl text-white">Reach the right audience at the right time</h2>
    <div className="my-16 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#83C5BE]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
        Targeted Campaigns
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-[#19191c]">
        Our targeted campaigns ensure your message is seen by those who matter most. Using advanced analytics and segmentation, we deliver personalized experiences that drive engagement and conversions.
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-[#006D77] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
          Creative Strategies
          </h2>
          <p className="mt-4 text-left  text-base/6 text-[#19191c]">
          Our team of creative minds crafts compelling stories and visuals that capture attention and evoke emotion. From concept to execution, we bring your brand’s vision to life in the most impactful way.
          </p>
        </div>
        <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 h-full bg-[#EDF6F9] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
          Social Media Mastery
          </h2>
          <p className="mt-4 text-left  text-base/6 text-[#19191c]">
          Engage with your audience on the platforms they love. Our social media experts develop and manage campaigns that increase your visibility, foster community, and drive meaningful interactions.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 h-full bg-[#FFDDD2] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
          Data-Driven Insights
          </h2>
          <p className="mt-4 text-left  text-base/6 text-[#19191c]">
          Data is at the core of our approach. We analyze trends, track performance, and optimize your campaigns based on real-time insights, ensuring maximum ROI and continuous improvement.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 row-span-2 h-full bg-[#E29578] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
          Multi-Channel Integration
          </h2>
          <p className="mt-4 text-left  text-base/6 text-[#19191c]">
          Achieve cohesive and consistent messaging with our multi-channel strategies. From email to content marketing, we ensure your brand voice is unified and your presence is felt everywhere your audience is.
          </p>
        </div>
        <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2  h-full bg-[#b8b8ff] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
          Performance Analytics
          </h2>
          <p className="mt-4 text-left  text-base/6 text-[#19191c]">
          Our performance analytics give you a clear view of how your campaigns are performing. We provide detailed reports and insights that help you understand your ROI, identify opportunities for improvement, and make data-driven decisions for future strategies.
          </p>
        </div>
        <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
    </>
  )
}
