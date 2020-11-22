import React, { useState, useContext } from 'react'

import './styles.scss'
import { FaTimes, FaSearch } from 'react-icons/fa'
import { BandsContext } from '../../context/bands'

export default function SearchInput() {
  const [search, setSearch] = useState('')
  const [showIconX, setShowIconX] = useState(false)
  const bandsNew = useContext(BandsContext)

  function resetInput() {
    setSearch('')
    setShowIconX(false)
    bandsNew.action.filterName('')
  }

  const handleChangeSearch = (e) => {
    if (e.target.value !== '') {
      setShowIconX(true)
    } else {
      setShowIconX(false)
    }
    setSearch(e.target.value)
  }

  function submitInput() {
    bandsNew.action.filterName(search)
  }

  const IconX = () => <FaTimes color='#e1e1e1' size={20} onClick={resetInput} />

  return (
    <div className='searchInput'>
      <div className='searchInput__icontimes'>{showIconX && <IconX />}</div>
      <input
        type='text'
        className='searchInput__input'
        onChange={handleChangeSearch}
        value={search}
      />
      <FaSearch
        color='#393939'
        size={20}
        className='searchInput__iconsearch'
        onClick={submitInput}
      />
    </div>
  )
}
