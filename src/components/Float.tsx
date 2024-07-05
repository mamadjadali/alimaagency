"use client";
import { BiMessageSquareDetail } from "react-icons/bi";
import { TbAtom2, TbSmartHome } from "react-icons/tb";
import { FloatingNav } from "../components/ui/floating-navbar";

export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <TbSmartHome className="h-6 w-6 text-[#0c1e1e]" />,
    },
    {
      name: "Features",
      link: "/features",
      icon: <TbAtom2 className="h-6 w-6 text-[#0c1e1e]" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <BiMessageSquareDetail className="h-6 w-6 text-[#0c1e1e]" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}