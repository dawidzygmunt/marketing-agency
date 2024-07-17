import { Star } from "lucide-react"
import React from "react"
import FiveStar from "./five-star"

const Reviews = () => {
  return (
    <div className="bg-white text-black">
      <div className="flex flex-col items-center py-24">
        <span className="tracking-widest font-bold">Nasze współprace</span>
        <h2 className="font-bold text-5xl my-5">Zaufanie to podstawa</h2>
        <p className="font-semibold text-md">
          Zaufało nam już ponad 100 klientów. Zobacz co mówią o nas nasi
          klienci.
        </p>
      </div>
      <div>{/* loga */}</div>
      <div className="bg-purple m-10 p-6 rounded-lg">
        <FiveStar className="text-white fill-white" />
      </div>
    </div>
  )
}

export default Reviews
