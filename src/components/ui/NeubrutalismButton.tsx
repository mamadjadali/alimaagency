import React from 'react';

interface NeubrutalismButtonProps {
  label: string;
  size: string;
  font: string;
}

const NeubrutalismButton: React.FC<NeubrutalismButtonProps> = ({ label ,size, font}) => {
  return (
    <button className="group/button rounded-lg bg-[#f3f5f4] text-[#0c1e1e]">
      <span className={`block -translate-x-1 text-${size} -translate-y-1 rounded-lg border-2 border-[#0c1e1e] bg-[#70fe90] px-4 py-1 font-${font} tracking-tight transition-all group-hover/button:-translate-x-2 group-hover/button:-translate-y-2 group-active/button:translate-x-0 group-active/button:translate-y-0`}>
        {label}
      </span>
    </button>
  );
};

export default NeubrutalismButton