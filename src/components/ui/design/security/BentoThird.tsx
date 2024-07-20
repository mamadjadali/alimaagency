"use client";
import { WobbleCard } from "../../wobble-card";

export function BentoGridThirdDemo() {
  return (
    <>
    <h2 className="mt-32 text-center text-4xl text-white">Reach the right audience at the right time</h2>
    <div className="px-6 sm:px-6 lg:px-0 my-16 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#fdfbf7]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
        Network Design and Setup
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-[#19191c]">
        Our experts design and set up networks tailored to your business needs, ensuring optimal performance, scalability, and reliability. From initial planning to implementation, we create networks that support your growth.
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-[#15063f] min-h-[300px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Monitoring and Management
          </h2>
          <p className="mt-4 text-left  text-base/6 text-white">
          We provide continuous network monitoring and management services, detecting and resolving issues before they impact your operations. Our proactive approach minimizes downtime and maintains network efficiency.
          </p>
        </div>
        <img
          src="/mon.svg"
          width={400}
          height={400}
          alt="Management"
          className="hidden md:block absolute -right-4 lg:-right-[10%]  md:-bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 h-full bg-[#f1e6e0] min-h-[300px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
          Cybersecurity Solutions
          </h2>
          <p className="mt-4 text-left  text-base/6 text-[#19191c]">
          Our cybersecurity solutions safeguard your digital assets against threats. We implement multi-layered security strategies, including firewalls, encryption, and intrusion detection, to protect your data and systems.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 h-full bg-[#fe8f96] min-h-[300px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Cloud Security
          </h2>
          <p className="mt-4 text-left  text-base/6 text-white">
          As businesses move to the cloud, security becomes critical. We offer comprehensive cloud security services that protect your data and applications, ensuring compliance and reducing risks in the cloud environment.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 row-span-2 h-full bg-[#e34458] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
          Compliance and Risk Management
          </h2>
          <p className="mt-4 text-left  text-base/6 text-[#19191c]">
          We help you navigate the complex landscape of compliance and risk management. Our services ensure your business adheres to relevant standards and regulations, mitigating risks and avoiding penalties.
          </p>
        </div>
        <img
          src="/rm.svg"
          width={500}
          height={500}
          alt="Compliance and Risk Management"
          className="absolute lg:-right-[0%] -bottom-20 md:-bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2  h-full bg-[#2e2365] min-h-[300px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
          Incident Response and Recovery
          </h2>
          <p className="mt-4 text-left  text-base/6 text-[#19191c]">
          In the event of a security breach, our incident response and recovery services minimize damage and restore operations. We provide rapid response, thorough investigation, and effective recovery plans to protect your business.
          </p>
        </div>
        <img
          src="/Character.svg"
          width={200}
          height={200}
          alt="linear demo image"
          className="hidden md:block absolute -right-4 lg:right-[10%] md:-bottom-[340px] object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
    </>
  )
}
