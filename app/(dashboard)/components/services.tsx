"use client"
import React, { useEffect } from "react"
import stample from "@/public/stample.svg"
import Image from "next/image"
import SingleService from "./single-service"

type GlowCaptureElement = HTMLElement & {
  children: HTMLCollectionOf<HTMLElement>
}

const Services = () => {
  useEffect(() => {
    const captures =
      document.querySelectorAll<GlowCaptureElement>(".glow-capture")

    console.log(captures)

    captures.forEach((capture) => {
      // Clone a child element. For example, we can clone the first child.
      const clonedChild = capture.children[0].cloneNode(true) as HTMLElement
      const overlay = capture.querySelector(".glow-overlay") as HTMLElement
      if (!overlay) {
        return
      }

      // Append the cloned child to the overlay.

      overlay.appendChild(clonedChild)

      capture.addEventListener("mousemove", (event) => {
        const x = event.pageX - capture.offsetLeft
        const y = event.pageY - capture.offsetTop

        overlay.style.setProperty("--glow-x", `${x}px`)
        overlay.style.setProperty("--glow-y", `${y}px`)
        overlay.style.setProperty("--glow-opacity", "0.4")
      })

      // Add mouseleave event to remove the glow effect
      capture.addEventListener("mouseleave", () => {
        overlay.style.setProperty("--glow-opacity", "0")
      })
    })
  }, [])
  return (
    <div className="bg-[#0c0c0c] px p-6">
      <Image src={stample} alt="stample" className="invert my-6" />
      <p className="uppercase font-bold tracking-wide my-6">webfow experts</p>
      <h2 className="text-6xl font-semibold">Nasze usługi</h2>
      <p className="text-f6f6f6 text-xl font-semibold my-5 leading-relaxed">
        Oferujemy szeroki zakres usług związanych z Webflow w Lighthouse
        Digital. Niezależnie od tego, czy szukasz projektowania, czy tworzenia w
        Webflow, czy obu tych usług, mamy to, czego potrzebujesz.
      </p>
      <div>
        <SingleService />
      </div>
    </div>
  )
}

export default Services
