import React, { useState } from 'react'
import styles from './style.module.scss'
import CartModal from '../../popup/cart/CartModal'
import FollowModal from '../../popup/follow/FollowModal'
import LogoImg from '../../components/logoImg'

const listMenus = [
  {
    id: 1,
    page: 'Home',
    to: '/home',
  },
  {
    id: 2,
    page: 'Page',
    to: '/page',
  },
  {
    id: 3,
    page: 'Shop',
    to: '/shop',
  },
  {
    id: 4,
    page: 'Blog',
    to: '/blog',
  },
  {
    id: 5,
    page: 'Contact',
    to: '/contact',
  }

]

const HeaderPage = () => {
  const [color, setActive] = useState(1);
  const handleActiveColor = (index: number) => {
    setActive(index)
  }
  return (
    <div className={`${styles.HomePage} d-flex justify-content-between`}>
      <div className={styles.logo}>
        <LogoImg width='75%' />
      </div>
      <div className={styles.menu}>
        <ul>
          {listMenus.length > 0 && listMenus.map((item, index) => {
            return (
              <li key={index} onChange={() => handleActiveColor(index)}>
                <a href={item.to} className={index === color ? 'active' : ''}>{item.page}</a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={`${styles.cart} d-flex`}>
        <CartModal />
        <i className='fa fa-search m-auto'></i>
        <FollowModal />
      </div>
    </div>
  )
}

export default HeaderPage