import React from "react"
import CustomNavbar from "../customNavbar"
import CurrentStatusBoard from "../CurrentStatusBoard"
import NamazTimeBoard from "../NamazTimeBoard"
import CustomCarousel from "../CustomCarousel"

const Admin = () => {
  return (
    <>
      <CustomNavbar />
      <CurrentStatusBoard />
      <NamazTimeBoard />
      <CustomCarousel />
    </>
  )
}

export default Admin
