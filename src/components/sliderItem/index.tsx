import React from 'react'
// import bgDealDay from './../../asset/image/home/bg-deal-day.jpg'
// interface IcontentStyle {
//   height?: string | number
//   color?: string
//   lineHeight?: string | number
//   textAlign?: any | undefined
//   background?: string | number
// }
// const contentStyle: IcontentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

const SliderPageItem = ({ props, children }: any) => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${props?.backgroundImage})` }}>
        {children}
      </div>
    </div>
  )
}

export default SliderPageItem