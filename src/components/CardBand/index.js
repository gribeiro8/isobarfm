import React from 'react'
import { Link } from 'react-router-dom'

import { formatNumber } from './utils'
import './styles.scss'

const CardBand = ({ band }) => {
  const { id, name, image, numPlays } = band

  return (
    <li className='card-bands'>
      <div className='card-header'>
        <Link to={`band/${id}`}>
          <img src={image} alt={name} className='card-header__img' />
        </Link>
        <Link to={`band/${id}`}>
          <h2 className='card-header__name'>{name}</h2>
          <p className='card-header__plays'>{formatNumber(numPlays)} PLAYS</p>
        </Link>
      </div>
    </li>
  )
}
export default CardBand
