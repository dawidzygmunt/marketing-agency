import Image from "next/image"
import mask from "@/public/mask.svg"

const VideoPlayer = () => {
  return (
    <div className="relative mb-24 w-full">
      <video width="100%" height="100%" preload="none" autoPlay loop muted>
        <source src="/Homevidy.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Image src={mask} alt="mask" className="absolute top-0" />
    </div>
  )
}

export default VideoPlayer
