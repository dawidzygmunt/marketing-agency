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
        overlay.style.setProperty("--glow-opacity", "1")
        // overlay.style.setProperty("--glow-size", "700px")
      })

      // Add mouseleave event to remove the glow effect
      capture.addEventListener("mouseleave", () => {
        overlay.style.setProperty("--glow-opacity", "0")
      })
    })
  }, [])
  return (
    <div className="bg-[#0c0c0c] px p-6 sm:px-20 md:px-36 2xl:px-60 py-20">
      <Image
        src={stample}
        alt="stample"
        className="invert my-6 lg:absolute right-0 top-0 xl:right-44 2xl:top-10"
      />
      <p className="uppercase font-bold tracking-widest my-6 text-xs">
        webfow experts
      </p>
      <h2 className="text-6xl font-semibold xl:text-7xl">Nasze usługi</h2>
      <p className="text-f6f6f6 text-xl font-semibold my-5 leading-relaxed lg:mr-48 xl:mr-[400px] 2xl:mr-[700px] py-5">
        Oferujemy szeroki zakres usług związanych z Webflow w Lighthouse
        Digital. Niezależnie od tego, czy szukasz projektowania, czy tworzenia w
        Webflow, czy obu tych usług, mamy to, czego potrzebujesz.
      </p>
      <div className="grid grid-cols-2 gap-8 ">
        <SingleService
          src="/agency/images/example-service.png"
          title="Testing it up"
          description="Ther is no desciprtion to be honset i mentioned it twiced its more loike lorem ipsum"
        />
        <SingleService
          src="/agency/images/example-service.png"
          title="Testing up it"
          description="Ther is no desciprtion to be honset i mentioned it twiced its more loike lorem ipsum"
        />
        <SingleService
          src="/agency/images/example-service.png"
          title="Testing up it"
          description="Ther is no desciprtion to be honset i mentioned it twiced its more loike lorem ipsum"
        />
        <SingleService
          src="/agency/images/example-service.png"
          title="Testing up it"
          description="Ther is no desciprtion to be honset i mentioned it twiced its more loike lorem ipsum"
        />
      </div>
    </div>
  )
}

export default Services
