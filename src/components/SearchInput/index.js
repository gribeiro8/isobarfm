import React, { useState } from 'react'

import './styles.scss'
import { FaTimes, FaSearch } from 'react-icons/fa'

export default function SearchInput() {
  const [search, setSearch] = useState('')
  const [showIconX, setShowIconX] = useState(false)

  function resetInput() {
    setSearch('')
    setShowIconX(false)

    console.log('Clicou para limpar')
  }

  const handleChangeSearch = (e) => {
    if (e.target.value !== '') {
      setShowIconX(true)
    } else {
      setShowIconX(false)
    }
    setSearch(e.target.value)
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
      <FaSearch color='#393939' size={20} className='searchInput__iconsearch' />
    </div>
  )
}
