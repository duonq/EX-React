import { Carousel } from 'antd'
import React from 'react'
import styles from './style.module.scss'
import slide1 from './../../asset/image/home/slide-homepage1.jpg'
import slide2 from './../../asset/image/home/slide-homepage2.jpg'
import slide3 from './../../asset/image/home/slide-homepage3.jpg'
import slide4 from './../../asset/image/home/slide-homepage4.jpg'
import slide5 from './../../asset/image/home/slide-homepage5.jpg'
import slide6 from './../../asset/image/home/slide-homepage6.jpg'
import CarouselItem from '../../components/carouselItem'

const listBarnnerHome = [
  {
    id: 1,
    img: slide1,
    alt: 'slide-hompage1'
  },
  {
    id: 2,
    img: slide2,
    alt: 'slide-hompage2'
  },
  {
    id: 3,
    img: slide3,
    alt: 'slide-hompage3'
  },
  {
    id: 4,
    img: slide4,
    alt: 'slide-hompage4'
  },
  {
    id: 5,
    img: slide5,
    alt: 'slide-hompage5'
  },
  {
    id: 6,
    img: slide6,
    alt: 'slide-hompage6'
  }
]
export const BannerPage = () => {
  return (
    <div className={styles.BannerPage}>
      <CarouselItem>
        {listBarnnerHome.length > 0 && listBarnnerHome.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.img} alt={item.alt} />
            </div>
          )
        })}
      </CarouselItem>
    </div>
  )
}
