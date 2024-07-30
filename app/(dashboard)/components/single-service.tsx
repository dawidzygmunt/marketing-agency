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
    <div className="relative glow-capture">
      <div className=" bg-zinc-900/50 border-4 border-white/5 rounded-2xl p-10 shadow-lg shadow-black/80 flex md:flex-row flex-col flex-wrap md:items-start items-center md:justify-between justify-center gap-6 backdrop-blur-md glow glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15]">
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
        style={{ "--glow-color": "#7c3aed" } as React.CSSProperties}
      ></div>
    </div>
    // <div className="relative glow-capture ">
    //   <div className="group border-2 border-white/5 glow:border-glow bg-[#191919] p-10 rounded-md backdrop-blur-md flex flex-col">
    //     <Image
    //       src={src}
    //       width={900}
    //       height={900}
    //       alt="service-image"
    //       className="rounded-md object-fill bg-cover w-full"
    //     />
    //     <div className="mt-8">
    //       <h3 className="text-4xl font-bold text-white my-4">{title}</h3>
    //       <p className="text-lg font-semibold text-[#fdfdfd]">{description}</p>
    //       <Button
    //         className="bg-purple px-9 py-6 shadow-lg mt-7 text-md font-bold border border-white/10
    //         glow:ring-3 glow:border-glow glow:ring-glow hover:bg-opacity-70 transition-all duration-300"
    //       >
    //         Learn More
    //       </Button>
    //     </div>
    //   </div>

    //   {/* div to make color glow on mouse */}
    //   <div
    //     className="glow-overlay"
    //     style={{ "--glow-color": "#7c3aed" } as React.CSSProperties}
    //   ></div>
    // </div>
  )
}

export default SingleService
