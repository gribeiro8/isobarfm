import React from 'react'

import './styles.scss'
import { Link } from 'react-router-dom'

export default function CardBand({ band }) {
  const { id, name, image, numPlays } = band

  return (
    <li className='carddragons'>
      <div className='cardheader'>
        <Link to={`band/${id}`}>
          <img src={image} alt='' className='cardheader__img' />
        </Link>
        <Link to={`band/${id}`}>
          <h2 className='cardheader__name'>{name}</h2>
          <p className='cardheader__plays'>{numPlays} PLAYS</p>
        </Link>
      </div>
    </li>
  )
}
