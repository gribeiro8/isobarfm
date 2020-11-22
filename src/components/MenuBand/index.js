import React from 'react'
import { Link } from 'react-router-dom'

import { FaLessThan } from 'react-icons/fa'
import logoMini from '../../assets/img/logo.png'
import './styles.scss'

export default function MenuBand() {
  return (
    <div className='menuBand'>
      <div className='menuBand__left'>
        <Link to='/'>
          <FaLessThan color='white' size={22} />
        </Link>
      </div>

      <div className='menuBand__right'>
        <Link to='/'>
          <img src={logoMini} alt='' />
        </Link>
      </div>
    </div>
  )
}
