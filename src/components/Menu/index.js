import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'
import logoMini from '../../assets/img/logo.png'
import SearchInput from '../SearchInput'

export default function Menu() {
  return (
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
}
