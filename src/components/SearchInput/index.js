import React, { useState, useContext, useCallback } from 'react'
import { FaTimes, FaSearch } from 'react-icons/fa'

import { BandsContext } from '../../context/bands'
import './styles.scss'

const searchInput = () => {
  const [search, setSearch] = useState('')
  const [showIconX, setShowIconX] = useState(false)
  const bandsNew = useContext(BandsContext)

  const resetInput = useCallback(() => {
    setSearch('')
    setShowIconX(false)
    bandsNew.action.filterName('')
  }, [bandsNew])

  const handleChangeSearch = useCallback((e) => {
    const { value } = e.target || {}
    const shouldShowXIcon = value !== ''
    setShowIconX(shouldShowXIcon)
    setSearch(value)
  }, [])

  const submitInput = useCallback(() => bandsNew.action.filterName(search), [])

  const iconX = <FaTimes color='#e1e1e1' size={20} onClick={resetInput} />

  return (
    <div className='search-input'>
      {showIconX && <div className='search-input__icon-times'>{iconX}</div>}
      <input
        type='text'
        className='search-input__input'
        onChange={handleChangeSearch}
        value={search}
      />
      <FaSearch
        color='#393939'
        size={20}
        className='search-input__icon-search'
        onClick={submitInput}
      />
    </div>
  )
}
export default searchInput
