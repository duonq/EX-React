import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import FollowModalItem from '../../components/followModalItem'
import LogoImg from '../../components/logoImg'
import style from './style.module.scss'
const listSocial = [
  {
    id: 1,
    to: '',
    icon: 'fa fa-twitter'
  },
  {
    id: 2,
    to: '',
    icon: 'fa fa-linkedin'
  },
  {
    id: 3,
    to: '',
    icon: 'fa fa-instagram'
  },
  {
    id: 4,
    to: '',
    icon: 'fa fa-facebook-square'
  }
]
const listLocate = [
  {
    id: 1,
    title: 'No 40 Baria sreet 133/2'
  },
  {
    id: 2,
    title: '+ (156) 1800-366-6666'
  },
  {
    id: 3,
    title: 'Eric-82@example.com'
  },
  {
    id: 4,
    title: 'www.uray.com'
  }
]
const listProfile = [
  {
    id: 1,
    title: 'My account'
  },
  {
    id: 2,
    title: 'Checkout'
  },
  {
    id: 3,
    title: 'Order Tracking'
  },
  {
    id: 4,
    title: 'Help & Support'
  }
]

const FooterPage = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  return (
    <div className={style.footerPage}>
      <Row>
        <Col span={6}>
          <FollowModalItem>
            <div className={style.secfooterItem}>
              <LogoImg width='50%' />
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut</p>
              {listSocial.length > 0 && listSocial.map((item, index) => {
                return (
                  <Link to={item.to} key={index}>
                    <i className={item.icon}></i>
                  </Link>
                )
              })}
            </div>
          </FollowModalItem>
        </Col>
        <Col span={6}>
          <FollowModalItem title='Locate Us'>
            <div className={style.secfooterItem}>
              {listLocate.length > 0 && listLocate.map(item => (
                <p key={item.id}>{item.title}</p>
              ))}
            </div>
          </FollowModalItem>
        </Col>
        <Col span={6}>
          <FollowModalItem title='Profile'>
            <div className={style.secfooterItem}>
              {listProfile.length > 0 && listProfile.map(item => (
                <p key={item.id}>{item.title}</p>
              ))}
            </div>
          </FollowModalItem>
        </Col>
        <Col span={6}>
          <FollowModalItem title='Newsletter'>
            <div className={style.secfooterItem}>
              <p>Subscribe to our newsletter</p>
              <Form
                onFinish={onFinish}
                className='d-flex'
              >
                <Form.Item
                  name='email'
                  rules={[{ required: true, message: 'Please input your email!' }]}
                  className='w-100'
                >
                  <Input />
                </Form.Item>
                <Button>
                  <i className='fa fa-chevron-right'></i>
                </Button>
              </Form>
              <p>@2019 Uray.Get The Theme</p>
            </div>
          </FollowModalItem>
        </Col>
      </Row>
    </div>
  )
}

export default FooterPage