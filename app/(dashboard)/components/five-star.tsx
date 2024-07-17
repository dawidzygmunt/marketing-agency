import { cn } from "@/lib/utils"
import { Star } from "lucide-react"
import React from "react"

const FiveStar = ({ className }: { className: string }) => {
  return (
    <div className={cn(className, `flex`)}>
      <Star className="fill-white w-[20px] h-[20px]" />
      <Star className="fill-white w-[20px] h-[20px]" />
      <Star className="fill-white w-[20px] h-[20px]" />
      <Star className="fill-white w-[20px] h-[20px]" />
      <Star className="fill-white w-[20px] h-[20px]" />
    </div>
  )
}

export default FiveStar
