import React from 'react'
import './service-card.css'

export const ServicesCard = ({item}) => {
    
    const { imgUrl, title, desc} = item;

  return (
    <div className='service__item'>
        <div className="service__img">
            <img src={imgUrl} alt="service" />
        </div>
        <h5>{title}</h5>
        <p>{desc}</p>
    </div>
  )
}
