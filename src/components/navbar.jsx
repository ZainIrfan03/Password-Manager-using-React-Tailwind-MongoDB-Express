import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <div className="w-full bg-slate-900 text-white flex justify-between px-10 py-4">
        <h1 className="text-xl font-bold text-green-400">
          {"<PassOP/>"}
        </h1>
        {/* <div className="flex gap-6 text-sm">
          <p className="cursor-pointer hover:text-green-400">Home</p>
          <p className="cursor-pointer hover:text-green-400">About</p>
          <p className="cursor-pointer hover:text-green-400">Contact</p>

        </div> */}

    <button className="flex items-center gap-1 bg-green-700 text-white px-3 h-8 rounded-full">
  
  <img
    className="invert w-8 "
    src="/github.png"
    alt="github"
  />

  <span className="font-semibold text-md">GitHub</span>

</button>
      </div>
    </nav>

    
  )

}


