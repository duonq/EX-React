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
import makeup9 from './../../../asset/image/product/product9.jpg'
import avtaFb1 from './../../../asset/image/home/patricsia1.jpg'
import avtaFb2 from './../../../asset/image/home/patricsia2.jpg'
import avtaFb3 from './../../../asset/image/home/patricsia3.jpg'
import bground from './../../../asset/image/home/bg-review.jpg'
import product from './../../../asset/image/product-lastest/lastest1.jpg'
import product1 from './../../../asset/image/product-lastest/lastest2.jpg'
import product2 from './../../../asset/image/product-lastest/lastest3.jpg'
import product3 from './../../../asset/image/product-lastest/lastest4.jpg'
import product4 from './../../../asset/image/product-lastest/lastest5.jpg'
import product5 from './../../../asset/image/product-lastest/lastest6.jpg'
import banner1 from './../../../asset/image/home/banner-1.jpg'

import RattingStar from '../../../components/rating'

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
    sale_price: 49,
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
    sale_price: 52,
    type: 'Spa',
    image: makeup7
  },
  {
    id: 8,
    titleProduct: 'Perfect Spice',
    price: 79,
    type: 'Make up',
    image: makeup8
  },
  {
    id: 9,
    titleProduct: 'Water flower',
    price: 62,
    sale_price: 69,
    type: 'Spa',
    image: makeup9
  }
]
const listView = [
  {
    id: 1,
    image: avtaFb1,
    name: 'Patricsia Petersen',
    icon: 'fa fa-star',
    messFB: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.'
  },
  {
    id: 2,
    image: avtaFb2,
    name: 'Patricsia Petersen',
    icon: 'fa fa-star',
    messFB: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.'
  },
  {
    id: 3,
    image: avtaFb3,
    name: 'Patricsia Petersen',
    icon: 'fa fa-star',
    messFB: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text.'
  }
]
const listProductNew = [
  {
    id: 1,
    title: 'But I must explain to you how all this',
    time: 'By Sugar / May 18.2019',
    image: product1
  },
  {
    id: 2,
    title: 'Neque porr quisquam dolorem',
    time: 'By Sugar / May 18.2019',
    image: product2
  },
  {
    id: 3,
    title: 'Itaque earum rerum hic tenetur',
    time: 'By Sugar / May 18.2019',
    image: product3
  },
  {
    id: 4,
    title: 'In a free hour,when our power',
    time: 'By Sugar / May 18.2019',
    image: product4
  },
  {
    id: 5,
    title: 'On the other hand,we denounce',
    time: 'By Sugar / May 18.2019',
    image: product5
  },
  {
    id: 6,
    title: 'Ut enim ad minima veniam quis nostrum',
    time: 'By Sugar / May 18.2019',
    image: product
  }
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
          <h4>Customers Satisfaction</h4>
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
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Culpa blanditiis eveniet aspernatur natus eaque magni quam
          debitis impedit animi voluptatum expedita ad dolorem sunt,
          iste, quos molestiae, nulla architecto praesentium.
        </h2>
      </SliderPageItem>
      <h2 className='m-5'>Product Our</h2>
      <Row className='w-75 mx-auto'>
        {listProduct.length > 0 && listProduct.map((item, index) => {
          return (
            <Col span={6} key={index}>
              <Card
                hoverable
                style={{ width: 300 }}
                key={index}
                cover={
                  <img alt="example" src={item.image} />
                }
              >
                <p>{item.type}</p>
                <h5>{item.titleProduct}</h5>
                <h3>
                  <span>{item.sale_price ? "$" + item.sale_price : ''}</span>
                  ${item.price}
                </h3>
              </Card>
            </Col>
          )
        })}
      </Row>
      <CarouselItem backgroundImage={bground}>
        {listView.length > 0 && listView.map((item, index) => {
          return (
            <div key={index} className={`${style.review} text-center`}>
              <img src={item.image} alt={item.name} style={{ width: '15%', height: '182px', margin: 'auto', borderRadius: '50%' }} />
              <h3>{item.name}</h3>
              <RattingStar />
              <h4>{item.messFB}</h4>
            </div>
          )
        })}
      </CarouselItem>
      <h2 className='my-5'>Latest News</h2>
      <Row className='w-75 m-auto'>
        {listProductNew.length > 0 && listProductNew.map((item, index) => {
          return (
            <Col span={8} key={index}>
              <div className='d-flex'>
                <img src={item.image} alt="" width={150} style={{ height: '100px' }} />
                <div className='px-3'>
                  <h5>{item.title}</h5>
                  <p>{item.time}</p>
                </div>
              </div>
            </Col>
          )
        })}
      </Row>
      <div className={`${style.sliderFooter} p-5`}>
        <SliderPageItem backgroundImage={banner1}>
          <div>
            <span>ONE DAY</span>
            <span>10 % DISCOUNT</span>
          </div>
        </SliderPageItem>
      </div>
    </div>
  )
}

export default HomePage