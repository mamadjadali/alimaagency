"use client";
import React from "react";
import { WobbleCard } from "../../../ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <>
    <h2 className="mt-32 text-center text-4xl text-white">Comprehensive Solutions for Secure Networking</h2>
    <div className="px-6 sm:px-6 lg:px-0 my-16 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-[#15063f] min-h-[300px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-lg">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          VPN and Remote Access
          </h2>
          <p className="mt-4 text-left  text-base/6 text-white">
          Our VPN and remote access solutions ensure your team can work securely from anywhere. We set up and manage secure connections that protect data and maintain productivity.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#fe8f96]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
        IoT Security
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-[#19191c]">
        As IoT devices proliferate, securing them is crucial. We offer IoT security solutions that protect your devices and networks from vulnerabilities and threats, ensuring safe and reliable operations.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#e34458] min-h-[600px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[#19191c]">
          Wireless Network Security
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-[#19191c]">
          Our wireless network security services safeguard your Wi-Fi networks. We implement strong encryption, secure authentication, and continuous monitoring to prevent unauthorized access and ensure data privacy.
          </p>
        </div>
        <img
          src="/globe.svg"
          width={350}
          height={350}
          alt="linear demo image"
          className="absolute  md:-right-[0%] lg:-right-[0%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
    </>
  );
}
