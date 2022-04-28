import React from 'react'
const SliderPageItem = ({ children, backgroundImage }: any) => {
  // console.log(111, props);

  return (
    <div>
      <div style={{ backgroundImage: `url(${backgroundImage})`, height: '600px',backgroundSize: 'cover' }}>
        {children}
      </div>
    </div>
  )
}

export default SliderPageItem