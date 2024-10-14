import React from "react"

const TimeItem = ({ timeObject }) => {
  return (
    <div className="col-span-2">
      <h1 className="my-green-text font-bold">{timeObject.name}</h1>
      <h1 className="font-bold opacity-50 border-2 rounded-xl">{timeObject.time[0]}:{timeObject.time[1]}</h1>
    </div>
  )
}

export default TimeItem
