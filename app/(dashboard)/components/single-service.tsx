import { Button } from "@/components/ui/button"
import Image from "next/image"
import React from "react"

interface SingleServiceProps {
  src: string
  title: string
  description: string
}

const SingleService: React.FC<SingleServiceProps> = ({
  src,
  title,
  description,
}) => {
  return (
    <div className="glow-capture">
      <div className="group border-2 border-white/5 glow:border-glow bg-[#191919] p-10 rounded-md backdrop-blur-md">
        <Image
          src={src}
          width={600}
          height={600}
          alt="service-image"
          className="rounded-md"
        />
        <div className="mt-8">
          <h3 className="text-4xl font-bold text-white my-4">{title}</h3>
          <p className="text-lg font-semibold text-[#fdfdfd]">{description}</p>
          <Button
            className="bg-purple px-9 py-6 shadow-lg mt-7 text-md font-bold border border-white/10 
            glow:ring-3 glow:border-glow glow:ring-glow hover:bg-opacity-70 transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* div to make color glow on mouse */}
      <div
        className="glow-overlay"
        style={{ "--glow-color": "#7c3aed" } as React.CSSProperties}
      ></div>
    </div>
  )
}

export default SingleService
