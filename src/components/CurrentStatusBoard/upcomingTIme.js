import React, { useEffect, useState } from "react"

const UpcomingTime = ({ upcomingTime = ["12", "00", "PM"] }) => {
  const [time, setTime] = useState([1, 40])

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const hours = now.getHours()
      const minutes = now.getMinutes()

      let remainingHours = 0
      let remainingMinutes = 0

      let meridian = hours >= 12 ? "PM" : "AM"

      //   if same meridian
      if (upcomingTime[2] === meridian) {
        const isFutureTimeFromNow =
          parseInt(upcomingTime[0]) >= hours &&
          parseInt(upcomingTime[1]) >= minutes
        if (isFutureTimeFromNow) {
          remainingHours =
            hours === parseInt(upcomingTime[0])
              ? 0
              : hours - parseInt(upcomingTime[0])
          remainingMinutes =
            minutes < parseInt(upcomingTime[1])
              ? parseInt(upcomingTime[1]) - minutes
              : parseInt(upcomingTime[1]) - minutes
        } else {
          remainingHours = 24 - (hours - parseInt(upcomingTime[0]))
          remainingMinutes = minutes > parseInt(upcomingTime[1]) ? minutes - parseInt(upcomingTime[1]) : parseInt(upcomingTime[1] - minutes)
        }
      } else {
        // add the hours to the upcoming time and set the time.
        remainingHours =
          parseInt(upcomingTime[0]) + (12 !== hours ? 12 - hours : 12)
        remainingMinutes = parseInt(upcomingTime[1]) + (60 - minutes)
        if (remainingMinutes >= 60) {
          remainingHours += 1
          remainingMinutes = remainingMinutes - 60
        }
      }
      setTime([remainingHours, remainingMinutes])
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="border-4 rounded-xl p-2 my-green-border text-center col-span-3 md:col-span-6 lg:col-span-10">
      <h1 className="my-light-text font-bold">Magrib</h1>
      <h1 className="my-green-text font-bold text-lg">
        {upcomingTime[0]}:{upcomingTime[1]} {upcomingTime[2]}
      </h1>
      {/* display the hour if exist else display minutes */}
      <p className="text-xs">
        (In {time[0] > 0 ? `${time[0]} Hours ` : ""} {time[1]} minutes)
      </p>
    </div>
  )
}

export default UpcomingTime
