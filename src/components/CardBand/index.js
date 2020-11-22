import React from 'react'

import './styles.scss'
import { Link } from 'react-router-dom'

export default function CardBand({ band }) {
  const { id, name, image, numPlays } = band

  function formatNumeber(num) {
    const numer = [...`${num} `].map(Number).reverse()
    const newDigits = []
    for (let i = 1; i <= numer.length; i += 1) {
      newDigits.push(numer[i])
      if (i % 3 === 0 && i !== 0 && i !== numer.length - 1) {
        newDigits.push('.')
      }
    }
    return newDigits.reverse().join('')
  }

  return (
    <li className='carddragons'>
      <div className='cardheader'>
        <Link to={`band/${id}`}>
          <img src={image} alt='' className='cardheader__img' />
        </Link>
        <Link to={`band/${id}`}>
          <h2 className='cardheader__name'>{name.toUpperCase()}</h2>
          <p className='cardheader__plays'>{formatNumeber(numPlays)} PLAYS</p>
        </Link>
      </div>
    </li>
  )
}
