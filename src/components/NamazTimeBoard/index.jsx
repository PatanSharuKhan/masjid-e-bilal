import React from "react"
import TimeItem from "./timeItem"

const prayerTimes = [
  { name: "Fajr", time: [5, 30] },
  { name: "Dhuhr", time: [12, 30] },
  { name: "Asr", time: [16, 30] },
  { name: "Maghrib", time: [18, 40] },
  { name: "Isha", time: [20, 30] },
  { name: "Jummah", time: [1, 30] },
]

const NamazTimeBoard = () => {
  return (
    <div className="my-4 px-2">
      <div className="border-4 rounded-xl p-2 my-green-border text-center">
        <div className="grid gap-4 grid-cols-6 md:grid-cols-12">
          {prayerTimes.map((prayerTime) => (
            <TimeItem timeObject={prayerTime} key={prayerTime.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NamazTimeBoard
