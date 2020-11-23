import React, { useContext, useState, useCallback } from 'react'

import arrows from '../../assets/img/order_by.png'
import { BandsContext } from '../../context/bands'

import './styles.scss'

const SubMenu = () => {
  const bandsNew = useContext(BandsContext)
  const [orderBy, setOrderBy] = useState(0)

  const clickOrder = useCallback(
    (id) => {
      bandsNew.action.orderBandsByName(id)
      setOrderBy(id)
    },
    [bandsNew]
  )

  const DropDownItem = ({ id, text }) => (
    <button
      type='button'
      className={orderBy === id && 'dropdown-content__active'}
      onClick={() => clickOrder(id)}
    >
      {text}
    </button>
  )

  return bandsNew.state.totalBands > 0 ? (
    <div className='submenu'>
      <div className='submenu__left'>
        <p className='submenu__text'>
          {bandsNew.state.totalBands} resultado(s)
        </p>
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
  ) : null
}
export default SubMenu
