import React from 'react'
import { Link } from 'react-router-dom'

import SearchInput from '../SearchInput'
import logoMini from '../../assets/img/logo.png'

import './styles.scss'

const Menu = () => (
  <div className='menu'>
    <div className='menu__left'>
      <SearchInput />
    </div>

    <div className='menu__right'>
      <Link to='/'>
        <img src={logoMini} alt='' />
      </Link>
    </div>
  </div>
)

export default Menu
