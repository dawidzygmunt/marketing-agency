import Image from "next/image"
import React from "react"

const SingleService = () => {
  return (
    <div className="bg-[#191919] p-10 rounded-md glow-capture">
      <div className="group border-4 border-white/5 glow:border-glow">
        <Image
          src="/images/example_service.png"
          width={600}
          height={600}
          alt="stample"
          className="rounded-md"
        />
      </div>
    </div>
  )
}

export default SingleService
