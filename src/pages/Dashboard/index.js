import React, { useEffect } from 'react'

import { BandsContext, useBands } from '../../context/bands'
import Menu from '../../components/Menu'
import Bands from '../../components/Bands'
import SubMenu from '../../components/SubMenu'

import './styles.scss'

export default function Dashboard() {
  const [bandsState, bandsAction] = useBands()

  useEffect(() => {
    bandsAction.getBands()
  }, [])

  return (
    <div className='container-dashboard'>
      <BandsContext.Provider value={{ state: bandsState, action: bandsAction }}>
        <Menu />
        <SubMenu />
        <Bands />
      </BandsContext.Provider>
    </div>
  )
}
