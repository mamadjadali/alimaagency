import React from 'react';

interface NeubrutalismButtonProps {
  label: string;
}

const NeubrutalismButton: React.FC<NeubrutalismButtonProps> = ({ label }) => {
  return (
    <button className="group/button rounded-lg bg-[#0c1e1e] text-[#0c1e1e]">
      <span className="block -translate-x-1 -translate-y-1 rounded-lg border-2 border-[#222222] bg-[#70fe90] px-4 py-1 text-lg font-bold tracking-tight transition-all group-hover/button:-translate-y-2 group-active/button:translate-x-0 group-active/button:translate-y-0">
        {label}
      </span>
    </button>
  );
};

export default NeubrutalismButton