import { cn } from "@/lib/utils"
import { Star } from "lucide-react"
import React from "react"

const FiveStar = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, `flex`)}>
      <Star className="fill-white w-[15px] h-[15px]" />
      <Star className="fill-white w-[15px] h-[15px]" />
      <Star className="fill-white w-[15px] h-[15px]" />
      <Star className="fill-white w-[15px] h-[15px]" />
      <Star className="fill-white w-[15px] h-[15px]" />
    </div>
  )
}

export default FiveStar
