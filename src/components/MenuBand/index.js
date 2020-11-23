import React from 'react'
import { Link } from 'react-router-dom'
import { FaLessThan } from 'react-icons/fa'

import logoMini from '../../assets/img/logo.png'

import './styles.scss'

const MenuBand = () => (
  <div className='menu-band'>
    <div className='menu-band__left'>
      <Link to='/'>
        <FaLessThan color='white' size={22} />
      </Link>
    </div>

    <div className='menu-band__right'>
      <Link to='/'>
        <img src={logoMini} alt='' />
      </Link>
    </div>
  </div>
)

export default MenuBand
