import React, { useState, useEffect } from 'react'

import './styles.scss'
import Menu from '../../components/Menu'
import Bands from '../../components/Bands'
import SubMenu from '../../components/SubMenu'

export default function Dashboard() {
  const [totalResults, setTotalResults] = useState(0)
  const [orderBy, setOrderBy] = useState(0)

  useEffect(() => {
    console.log(orderBy)
  }, [orderBy])

  return (
    <div className='container-dashboard'>
      <Menu />
      <SubMenu
        totalResults={totalResults}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />
      <Bands setTotalResults={setTotalResults} orderBy={orderBy} />
    </div>
  )
}
