import React from "react"

const Statistics = () => {
  return (
    <div className="bg-purple text-white font-semibold flex flex-col md:flex-row md: justify-center md:gap-32 p-14 gap-14">
      <div className="flex flex-col items-center gap-2">
        <h4 className="text-6xl font-bold">50 +</h4>
        <p>Uruchomionych projektów</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <h4 className="text-6xl font-bold">30 +</h4>
        <p>Pozytywnych opini</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <h4 className="text-6xl font-bold">5 +</h4>
        <p>Lat doświadczenia</p>
      </div>
    </div>
  )
}

export default Statistics
