import { Button, Col, Form, Input, Modal, Row } from 'antd';
import React, { useState } from 'react'
import style from './style.module.scss'
import follow1 from './../../asset/image/home/follow1.jpg'
import follow2 from './../../asset/image/home/follow2.jpg'
import follow3 from './../../asset/image/home/follow3.jpg'
import follow4 from './../../asset/image/home/follow4.jpg'
import follow5 from './../../asset/image/home/follow5.jpg'
import FollowModalItem from '../../components/followModalItem';
const listImg = [
  {
    id: 1,
    title: follow1
  },
  {
    id: 2,
    title: follow2
  },
  {
    id: 3,
    title: follow5
  },
  {
    id: 4,
    title: follow4
  },
  {
    id: 5,
    title: follow5
  },
  {
    id: 6,
    title: follow3
  }
]

const FollowModal = () => {
  const [visible, setVisible] = useState(false);
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  return (
    <div className={style.followBtn}>
      <Button onClick={() => setVisible(true)}>
        <i className='fa fa-bars'></i>
      </Button>
      <Modal
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={500}
        footer={false}
      >
        <FollowModalItem title='follow instagram' contact='@Ura.cosmetic_beauty'>
          <Row>
            {listImg.length > 0 && listImg.map((item, index) => {
              return (
                <Col key={index} span={8} className='p-2 text-center'>
                  <img src={item.title} alt="" className='w-75' />
                </Col>
              )
            })}
          </Row>
        </FollowModalItem>
        <FollowModalItem title='newsletter' contact='Subcribe to our newsletter'>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              wrapperCol={{span: 16 }}
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
              <Button htmlType="submit">
                Submit
              </Button>
            </Form.Item>
            {/* <Form.Item>
              <Button htmlType="submit">
                Submit
              </Button>
            </Form.Item> */}
          </Form>
        </FollowModalItem>
      </Modal>
    </div>
  );
}

export default FollowModal