import React from 'react'

import './styles.scss'
import arrows from '../../assets/img/order_by.png'

export default function SubMenu({ totalResults, orderBy, setOrderBy }) {
  function setOrder(id) {
    console.log('Clicou em order')
    setOrderBy(id)
  }

  const DropDownItem = ({ id, text }) => (
    <button
      type='button'
      className={orderBy === id && 'dropdown-content__active'}
      onClick={() => setOrder(id)}
    >
      {text}
    </button>
  )

  return (
    <div className='submenu'>
      <div className='submenu__left'>
        <p className='submenu__text'>{totalResults} resultados</p>
      </div>

      <div className='submenu__right'>
        <div className='dropdown'>
          <div className='dropbtn'>
            <img src={arrows} alt='' />
          </div>
          <div className='dropdown-content '>
            <DropDownItem text='ORDEM ALFABÉTICA' id='0' />
            <DropDownItem text='POPULARIDADE' id='1' />
          </div>
        </div>
      </div>
    </div>
  )
}
