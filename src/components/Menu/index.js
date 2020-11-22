import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import './styles.scss'
import logoMini from '../../assets/img/logo.png'
import SearchInput from '../SearchInput'

export default function Menu() {
  const history = useHistory()

  return (
    <div className='menu'>
      <div className='menu__left'>
        <SearchInput />
      </div>

      <div className='menu__right'>
        <Link to='/dashboard'>
          <img src={logoMini} alt='' />
        </Link>
      </div>
    </div>
  )
}
