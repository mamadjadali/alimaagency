import React from 'react'
import WordMark from './WordMark'

const Header = () => {
  return (
    <header className="hidden sm:flex items-center justify-between py-6 px-4">
        <div className="flex items-center">
            <WordMark/>
        </div>
        <div className="flex-grow"></div>
        <button
      onClick={() => console.log('SyntaxUI is the best!')}
      className={'group/button rounded-lg bg-[#0c1e1e] text-[#0c1e1e]'}
    >
      <span
        className={
          'block -translate-x-1 -translate-y-1 rounded-lg border-2 border-[#222222] bg-[#70fe90] px-4 py-1 text-sm font-semibold tracking-tight transition-all group-hover/button:-translate-y-2 group-active/button:translate-x-0 group-active/button:translate-y-0'
        }
      >
        Talk to us
      </span>
    </button>
    </header>
  )
}

export default Header