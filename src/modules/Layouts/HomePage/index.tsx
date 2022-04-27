import { Card, Carousel, Col, Row } from 'antd'
import React from 'react'
import FollowModalItem from '../../../components/followModalItem'
import SliderPageItem from '../../../components/sliderItem'
import { BannerPage } from '../../BannerPage'
import cosmeticBeauty from './../../../asset/image/home/cosmetic-beauty.png'
import bgImg from './../../../asset/image/home/bg-deal-day.jpg'
import style from './style.module.scss'
import CarouselItem from '../../../components/carouselItem'
import makeup1 from './../../../asset/image/product/product.jpg'
import makeup2 from './../../../asset/image/product/product2.jpg'
import makeup3 from './../../../asset/image/product/product3.jpg'
import makeup4 from './../../../asset/image/product/product4.jpg'
import makeup5 from './../../../asset/image/product/product5.jpg'
import makeup6 from './../../../asset/image/product/product6.jpg'
import makeup7 from './../../../asset/image/product/product7.jpg'
import makeup8 from './../../../asset/image/product/product8.jpg'
// import makeup9 from './../../../asset/image/product/product9.jpg'

const listProduct = [
  {
    id: 1,
    titleProduct: 'Cleanser layde',
    price: 79,
    type: 'Beauty',
    image: makeup1
  },
  {
    id: 2,
    titleProduct: 'Night cream',
    price: 39,
    type: 'Spa',
    image: makeup2
  },
  {
    id: 3,
    titleProduct: 'Cleanser layde',
    price: 56,
    type: 'Make up',
    image: makeup3
  },
  {
    id: 4,
    titleProduct: 'Moisturizing cream',
    price: 87,
    type: 'Beauty',
    image: makeup4
  },
  {
    id: 5,
    titleProduct: 'Perfect Spice',
    price: 79,
    type: 'Beauty',
    image: makeup5
  },
  {
    id: 6,
    titleProduct: 'Silky smooth skin',
    price: 79,
    type: 'Beauty',
    image: makeup6
  },
  {
    id: 7,
    titleProduct: 'Moisturizing cream',
    price: 41,
    type: 'Beauty',
    image: makeup7
  },
  {
    id: 8,
    titleProduct: 'Perfect Spice',
    price: 79,
    type: 'Make up',
    image: makeup8
  },
  // {
  //   id: 9,
  //   titleProduct: 'Water flower',
  //   price: 62,
  //   type: 'Spa',
  //   image: makeup9
  // }
]
const HomePage = () => {
  return (
    <div className={style.homePage}>
      <BannerPage />
      <Row className='w-75 mx-auto my-5'>
        <Col span={12}>
          <img src={cosmeticBeauty} alt="cosmetic-Beauty" />
        </Col>
        <Col span={8}>
          <h2>#Genuine Cosmetics</h2>
          <h5>Customers Satisfaction</h5>
          <FollowModalItem title='Organic cream'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste quam consequuntur numquam velit possimus?
              Odit, laudantium earum reprehenderit veritatis similique illo cum accusamus atque in magni modi accusantium quas eligendi?
            </p>
          </FollowModalItem>
          <FollowModalItem title='Natural extracts'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste quam consequuntur numquam velit possimus?
              Odit, laudantium earum reprehenderit veritatis similique illo cum accusamus atque in magni modi accusantium quas eligendi?
            </p>
          </FollowModalItem>
          <FollowModalItem title='Quality assurance'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste quam consequuntur numquam velit possimus?
              Odit, laudantium earum reprehenderit veritatis similique illo cum accusamus atque in magni modi accusantium quas eligendi?
            </p>
          </FollowModalItem>
        </Col>
      </Row>
      <SliderPageItem backgroundImage={bgImg}>
        <h2>fhgfhtrhrtj</h2>
      </SliderPageItem>
      <FollowModalItem title='Product Our'>
        <div className='w-75 mx-auto'>
          <Carousel>
            {listProduct.length > 0 && listProduct.map((item, index) => {
              return (
                <div key={index}>
                  <Card
                    hoverable
                    style={{ width: 250 }}
                    key={index}
                    cover={
                      <img alt="example" src={item.image} />
                    }
                  >
                    <h2>page</h2>
                  </Card>
                </div>
              )
            })}
          </Carousel>

        </div>
      </FollowModalItem>
    </div>
  )
}

export default HomePage