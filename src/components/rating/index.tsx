import React, { useState } from 'react'
import { StarOutlined, StarFilled } from '@ant-design/icons'

const RattingStar = () => {
  const [activeStar, setActiveStar] = useState(-1)
  const totalStars = 5
  const activeStars = 3
  const handleClick = (index: number) => {
    setActiveStar(index)
  }
  return (
    <div style={{
      display: 'inline-flex',
      position: 'relative',
      cursor: 'pointer',
    }}>
      {[...new Array(totalStars)].map((arr, index) => {
        return (
          <div style={{
            position: 'relative', cursor: 'pointer', color: 'green'
          }}
            key={index}
          >
            {/* <div style={{
              width: index <= activeStars ? '100%' : '0%',
              overflow: 'hidden',
              position: 'absolute',
            }}>
              <StarOutlined />
            </div> */}
            <div>
              <StarFilled />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RattingStar