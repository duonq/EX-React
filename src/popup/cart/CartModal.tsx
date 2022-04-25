
import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import styles from './style.module.scss'
import cart1 from './../../asset/image/cart1.jpg'
import cart2 from './../../asset/image/cart2.jpg'
const listproduct = [
  {
    id: 1,
    name: 'face cream',
    img: cart1,
    price: 111,
    quanlity: 1
  },
  {
    id: 2,
    name: 'face cream',
    img: cart2,
    price: 111,
    quanlity: 1
  },
  {
    id: 3,
    name: 'face cream',
    img: cart1,
    price: 111,
    quanlity: 1
  }
]
const CartModal = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div className={styles.cartBtn}>
      <Button onClick={() => setVisible(true)}>
        <i className='fa fa-shopping-cart'></i>
      </Button>
      <Modal
        title="Cart"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={250}
        footer={false}
      >
        <ul>
          {listproduct.length > 0 && listproduct.map((item, idx) => {
            return (
              <li key={idx} className='d-flex p-2'>
                <img src={item.img} alt="" className='w-50' />
                <span className='d-grid p-2'>
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                  <span>Qty:{item.quanlity}</span>
                </span>
              </li>
            )
          })
          }
        </ul>
      </Modal>
    </div>
  )
}
export default CartModal
