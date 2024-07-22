"use client"
import React, { useState } from "react"
import dynamic from "next/dynamic"
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
})

const Statistics = () => {
  const [num, setNum] = useState(331231)
  return (
    <div className="bg-purple text-white font-semibold flex flex-col md:flex-row md: justify-center md:gap-32 p-14 gap-14 xl:gap-44">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 text-5xl font-bold">
          <AnimatedNumbers
            includeComma
            transitions={(index) => ({
              type: "spring",
              duration: 2.6,
            })}
            animateToNumber={50}
            fontStyle={{
              fontSize: 70,
              color: "white",
            }}
          />
          <span>+</span>
        </div>
        <p>Uruchomionych projektów</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 text-5xl font-bold">
          <AnimatedNumbers
            includeComma
            transitions={(index) => ({
              type: "spring",
              duration: 2.9,
            })}
            animateToNumber={30}
            fontStyle={{
              fontSize: 70,
              color: "white",
            }}
          />
          <span>+</span>
        </div>
        <p>Pozytywnych opini</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 text-5xl font-bold">
          <AnimatedNumbers
            includeComma
            transitions={(index) => ({
              type: "spring",
              duration: 3.2,
            })}
            animateToNumber={5}
            fontStyle={{
              fontSize: 70,
              color: "white",
            }}
          />
          <span>+</span>
        </div>
        <p>Lat doświadczenia</p>
      </div>
    </div>
  )
}

export default Statistics
