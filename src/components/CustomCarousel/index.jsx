import React from "react"
import Carousel from "react-bootstrap/Carousel"
import Image from "react-bootstrap/Image"

const CustomCarousel = () => {
  return (
    <Carousel className="p-2">
      <Carousel.Item interval={2000}>
        <Image
          src="https://madrassah.co.uk/wp-content/uploads/2020/04/uvhkgk.jpg"
          text="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Image
          src="https://quranayat.com/wp-content/uploads/2020/06/The-Salah-The-Second-Pillar-of-Islam-Quran-Ayat.jpg"
          text="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Image
          src="https://i.pinimg.com/originals/54/bd/24/54bd24f07cfcd540c6fc8a17a75313da.jpg"
          text="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Image
          src="https://quranayat.com/wp-content/uploads/2020/06/Fasting-The-Fourth-Pillar-of-Islam-Quran-Ayat.jpg"
          text="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Image
          src="https://i.pinimg.com/originals/50/ff/49/50ff498b50f3e7964808211b9d81e6be.jpg"
          text="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CustomCarousel
