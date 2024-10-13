import React from "react"
import UpcomingTime from "./upcomingTIme"
import Compass from "./compass"

const CurrentStatusBoard = () => {
  return (
    <div className="h-[100px] grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-2 my-4 px-2">
      <UpcomingTime />
      <Compass />
    </div>
  )
}

export default CurrentStatusBoard
