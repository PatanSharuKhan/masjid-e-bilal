import React, { useEffect, useState } from "react"
import moment from "moment"
require("moment-duration-format")

class TimeUpdater {
  static prayerTimes = [
    { name: "Fajr", time: [5, 30] },
    { name: "Dhuhr", time: [12, 30] },
    { name: "Asr", time: [15, 0] },
    { name: "Maghrib", time: [18, 40] },
    { name: "Isha", time: [20, 30] },
  ]

  static upcomingPrayerTime() {
    return (
      this.prayerTimes.find((prayerTime) => {
        const now = new Date()
        return (
          now.getHours() < prayerTime.time[0] ||
          (now.getHours() === prayerTime.time[0] &&
            now.getMinutes() <= prayerTime.time[1])
        )
      }) || this.prayerTimes[0]
    )
  }

  static getRemainingTime(setRemainingTimeMessage, setUpcomingPrayer) {
    const timeString = this.upcomingPrayerTime().time // Replace with your desired time string

    const hours = parseInt(timeString[0])
    const minutes = parseInt(timeString[1])

    const currentTime = moment()
    const upcomingTime = moment().hour(hours).minute(minutes)

    if (upcomingTime.isBefore(currentTime)) {
      upcomingTime.add(1, "day") // Adjust for the next day if the time has passed
    }

    const remainingTime = moment.duration(upcomingTime.diff(currentTime))
    const duration = moment.duration({
      hours: remainingTime.hours(),
      minutes: remainingTime.minutes(),
    })
    const formattedDuration = duration.format("h [hours] m [minutes]", {
      trim: false,
    })

    setUpcomingPrayer(this.upcomingPrayerTime())
    setRemainingTimeMessage(`${formattedDuration} left`)
  }
}

const UpcomingTime = () => {
  const [upcomingPrayer, setUpcomingPrayer] = useState(
    TimeUpdater.prayerTimes[0]
  )
  const [remainingTimeMessage, setRemainingTimeMessage] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      TimeUpdater.getRemainingTime(setRemainingTimeMessage, setUpcomingPrayer)
    }, 1)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="border-4 rounded-xl p-2 my-green-border text-center col-span-3 md:col-span-6 lg:col-span-10">
      <h1 className="my-light-text font-bold">{upcomingPrayer?.name}</h1>
      <h1 className="my-green-text font-bold text-lg">
        {upcomingPrayer?.time[0]}:{upcomingPrayer?.time[1]}
      </h1>
      <p className="text-xs">{remainingTimeMessage}</p>
    </div>
  )
}

export default UpcomingTime
