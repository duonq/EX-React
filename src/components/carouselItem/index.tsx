import { Carousel } from 'antd'
import React from 'react'

const CarouselItem = ({ props, children }: any) => {
  return (
    <div>
      <Carousel autoplay>
        {children}
      </Carousel>
    </div>
  )
}


export default CarouselItem