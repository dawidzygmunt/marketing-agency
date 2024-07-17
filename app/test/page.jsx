"use client"
import { Button } from "@/components/ui/button"
import React, { useEffect } from "react"

const TestComponent = () => {

  return (
    <div className="bg-slate-800 flex flex-col gap-10 px-24 py-10 ">
      
      <div className="relative glow-capture">
        <div className="group bg-zinc-900/90 border-2 border-white/5 rounded-2xl p-10 shadow-lg shadow-black/80 flex md:flex-row flex-col flex-wrap md:items-start items-center md:justify-between justify-center gap-6 backdrop-blur-md glow glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15]">
          <div className="flex-1 md:order-1 order-2">
            <p className="opacity-50">Tropical fish</p>
            <h2 className="font-bold text-4xl tracking-tighter mb-3 glow:text-glow/[.15]">
              Banana Wrasse
            </h2>
            <div className="md:prose-base prose-lg prose-zinc prose-invert text-opacity-90">
              <p>
                The Banana Wrasse is known for its vibrant yellow color and
                elongated body, resembling a banana.
              </p>
              <p>
                This active and playful fish thrives in tropical reef
                environments, often seen darting among corals and rocks.
              </p>
            </div>

            <button className="font-semibold px-6 bg-zinc-950/50 backdrop-blur-md py-3 rounded-xl text-white/90 border-2 border-white/10 mt-6 glow:ring-1 glow:border-glow glow:ring-glow">
              Learn more
            </button>
          </div>


        </div>
        <div
          className="glow-overlay"
          style={{ "--glow-color": "#ff0000" }}
        ></div>
      </div>

      

    </div>
  )
}

export default TestComponent
