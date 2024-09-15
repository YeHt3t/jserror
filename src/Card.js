import React from 'react'
import './Card.css'

const Card = ({text, title}) => {
    return(
        <div className='card'>
            <h1 className='card-h1'>{title}</h1>
                
            <p className='card-p'>{text}</p>
                
                
        </div>
    )
}

export default Card;