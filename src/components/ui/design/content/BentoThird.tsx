"use client";
import { WobbleCard } from "../../wobble-card";

export function BentoGridThirdDemo() {
  return (
    <>
    <h2 className="mt-32 text-center text-4xl text-white">Reach the right audience at the right time</h2>
    <div className="px-6 sm:px-6 lg:px-0 my-16 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#faeadd]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
        Blog Writing
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-[#19191c]">
        Our team of expert writers crafts well-researched, SEO-optimized blog posts that drive traffic and establish your authority. Whether you need thought leadership pieces, how-to guides, or industry news, we’ve got you covered.
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-[#522a70] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Video Production
          </h2>
          <p className="mt-4 text-left  text-base/6 text-white">
          From concept to final cut, we produce videos that tell your story in a visually compelling way. Our video production services include scripting, filming, editing, and post-production to ensure your message is delivered powerfully.
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
        containerClassName="col-span-1 lg:col-span-1 h-full bg-[#f29cb7] min-h-[300px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
          Social Media Content
          </h2>
          <p className="mt-4 text-left  text-base/6 text-[#19191c]">
          We create tailor-made content for your social media platforms that resonates with your audience and encourages interaction. From eye-catching graphics to witty captions, we help your brand stay relevant and engaging.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 h-full bg-[#fbd050] min-h-[300px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
          Infographics and Visuals
          </h2>
          <p className="mt-4 text-left  text-base/6 text-[#19191c]">
          Our designers create visually appealing infographics that make data and information easily digestible. These visuals help you communicate complex ideas in a clear, engaging, and shareable format.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 row-span-2 h-full bg-[#deaaff] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
          Copywriting
          </h2>
          <p className="mt-4 text-left  text-base/6 text-[#19191c]">
          Great copy can turn visitors into customers. Our copywriting services focus on creating persuasive, compelling, and clear text for your website, advertisements, emails, and more, driving conversions and enhancing your brand’s voice.
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
        containerClassName="col-span-1 lg:col-span-2  h-full bg-[#222023] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          E-books and Whitepapers
          </h2>
          <p className="mt-4 text-left  text-base/6 text-white">
          We produce comprehensive e-books and whitepapers that provide valuable insights and information to your audience. These long-form content pieces help you establish authority, generate leads, and educate your market.
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
