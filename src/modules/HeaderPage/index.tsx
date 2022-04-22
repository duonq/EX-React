import React from 'react'
import styles from './style.module.scss'
import logo from './../../asset/image/home/Logo.png'
// import { Link } from 'react-router-dom'
const listMenus = [
  {
    id: 1,
    page: 'Home',
    to: '/',
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
  return (
    <div className={`${styles.HomePage} d-flex justify-content-between`}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.menu}>
        <ul>
          {listMenus.length > 0 && listMenus.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.to}>{item.page}</a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={styles.cart}>
        <i className='fa fa-shopping-cart'></i>
        <i className='fa fa-search'></i>
        <i className='fa fa-bars'></i>
      </div>
    </div>
  )
}

export default HeaderPage