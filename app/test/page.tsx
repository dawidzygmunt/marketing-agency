"use client"
import React, { useEffect } from "react"

type GlowCaptureElement = HTMLElement & {
  children: HTMLCollectionOf<HTMLElement>
}

const Pagex = () => {
  useEffect(() => {
    const captures =
      document.querySelectorAll<GlowCaptureElement>(".glow-capture")

    console.log(captures)

    captures.forEach((capture) => {
      // Clone a child element. For example, we can clone the first child.
      const clonedChild = capture.children[0].cloneNode(true) as HTMLElement
      const overlay = capture.querySelector(".glow-overlay") as HTMLElement
      if (!overlay) {
        console.log("No overlay found")
        return
      }

      // Append the cloned child to the overlay.

      overlay.appendChild(clonedChild)

      capture.addEventListener("mousemove", (event) => {
        const x = event.pageX - capture.offsetLeft
        const y = event.pageY - capture.offsetTop

        overlay.style.setProperty("--glow-x", `${x}px`)
        overlay.style.setProperty("--glow-y", `${y}px`)
        overlay.style.setProperty("--glow-opacity", "0.9")
      })

      // Add mouseleave event to remove the glow effect
      capture.addEventListener("mouseleave", () => {
        overlay.style.setProperty("--glow-opacity", "0")
      })
    })
  }, [])
  return (
    <div className="max-w-3xl mx-auto px-4 space-y-12 pb-32 pt-16 mt-10 mb-24 grid grid-cols-2">
      {/* <!-- Fish 1 --> */}
      <div className="relative glow-capture">
        <div className="group bg-zinc-900/50 border-4 border-white/5 rounded-2xl p-10 shadow-lg shadow-black/80 flex md:flex-row flex-col flex-wrap md:items-start items-center md:justify-between justify-center gap-6 backdrop-blur-md glow glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15]">
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

          <img
            src="fish-1.jpg"
            alt="Banana Wrasse"
            className="max-w-sm rounded-full object-cover w-40 h-40 border-4 border-white/5 md:order-2 order-1 glow glow:ring-1 glow:border-glow/[.5] glow:ring-glow shadow-inner"
          />
        </div>
        <div
          className="glow-overlay"
          style={{ "--glow-color": "#7c3aed" } as React.CSSProperties}
        ></div>
      </div>

      {/* <!-- Fish 2 --> */}
      <div className="relative glow-capture">
        <div className="bg-zinc-900/50 border-4 border-white/5 rounded-2xl p-10 shadow-lg shadow-black/80 flex md:flex-row flex-col flex-wrap md:items-start items-center md:justify-between justify-center gap-6 backdrop-blur-md glow glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15]">
          <div className="flex-1 md:order-1 order-2">
            <p className="opacity-50">Tropical fish</p>
            <h2 className="font-bold text-4xl tracking-tighter mb-3 glow:text-glow/[.15]">
              Anthia
            </h2>
            <div className="md:prose-base prose-lg prose-zinc prose-invert text-opacity-90">
              <p>
                Anthias fish are renowned for their dazzling, multi-hued scales,
                ranging from pinks and purples to oranges and yellows.
              </p>
              <p>
                They form dynamic, shimmering schools in coral reefs, adding a
                burst of color and life to the underwater world.
              </p>
            </div>
            <button className="font-semibold px-6 bg-zinc-950/50 backdrop-blur-md py-3 rounded-xl text-white/90 border-2 border-white/10 mt-6 glow:ring-1 glow:border-glow glow:ring-glow">
              Learn more
            </button>
          </div>

          <img
            src="fish-2.jpg"
            alt="Banana Wrasse"
            className="max-w-sm rounded-full object-cover w-40 h-40 border-4 border-white/5 md:order-2 order-1 glow glow:ring-1 glow:border-glow/[.5] glow:ring-glow shadow-inner"
          />
        </div>
        <div
          className="glow-overlay"
          style={{ "--glow-color": "#7c3aed" } as React.CSSProperties}
        ></div>
      </div>

      {/* <!-- Fish 3 --> */}
      <div className="relative glow-capture">
        <div className="bg-zinc-900/50 border-4 border-white/5 rounded-2xl p-10 shadow-lg shadow-black/80 flex md:flex-row flex-col flex-wrap md:items-start items-center md:justify-between justify-center gap-6 backdrop-blur-md glow glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15]">
          <div className="flex-1 md:order-1 order-2">
            <p className="opacity-50">Tropical fish</p>
            <h2 className="font-bold text-4xl tracking-tighter mb-3 glow:text-glow/[.15]">
              Lipstick Tang
            </h2>
            <div className="md:prose-base prose-lg prose-zinc prose-invert text-opacity-90">
              <p>
                The Lipstick Tang, distinct for its striking blue body and vivid
                red-orange lips, resembles a vibrant splash of lipstick in the
                ocean.{" "}
              </p>
              <p>
                This eye-catching fish is a favorite among reef enthusiasts,
                gracefully navigating through coral gardens with elegance.
              </p>
            </div>
            <button className="font-semibold px-6 bg-zinc-950/50 backdrop-blur-md py-3 rounded-xl text-white/90 border-2 border-white/10 mt-6 glow:ring-1 glow:border-glow glow:ring-glow">
              Learn more
            </button>
          </div>

          <img
            src="fish-3.jpg"
            alt="Banana Wrasse"
            className="max-w-sm rounded-full object-cover w-40 h-40 border-4 border-white/5 md:order-2 order-1 glow glow:ring-1 glow:border-glow/[.5] glow:ring-glow shadow-inner"
          />
        </div>
        <div
          className="glow-overlay"
          style={{ "--glow-color": "#0ea5e9" } as React.CSSProperties}
        ></div>
      </div>

      <div className="text-sm text-white/60 text-center">
        <a href="https://webcrunch.com" target="_blank">
          webcrunch.com
        </a>
      </div>
    </div>
  )
}

export default Pagex
