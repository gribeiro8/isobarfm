import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'
import logoMini from '../../assets/img/logo.png'
import { FaLessThan } from 'react-icons/fa'

export default function MenuBand() {
  return (
    <div className='menuBand'>
      <div className='menuBand__left'>
        <FaLessThan color='white' size={22}></FaLessThan>
      </div>

      <div className='menuBand__right'>
        <Link to='/dashboard'>
          <img src={logoMini} alt='' />
        </Link>
      </div>
    </div>
  )
}
