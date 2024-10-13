import React from "react"
import { AppColors } from "./util"
import { RxAvatar } from "react-icons/rx"

const CustomNavbar = () => {
  return (
    <div className="flex flex-row justify-between p-4 border-b-4 border-green-500 rounded-b-xl">
      <h1 className="my-green-text content-center font-bold">MASJID-E-BILAL</h1>
      <RxAvatar size={30} color={AppColors.green} />
    </div>
  )
}

export default CustomNavbar
