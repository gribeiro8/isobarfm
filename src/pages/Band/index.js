import React, { useState, useEffect } from 'react'

import './styles.scss'
import api from '../../services/api'
import MenuBand from '../../components/MenuBand'
import InfoBand from '../../components/InfoBand'

export default function Band({ match }) {
  const [band, setBand] = useState({})
  const { id } = match.params
  useEffect(() => {
    api.get(`bands/${id}`).then((response) => {
      console.log(response.data)
      setBand(response.data)
    })
  }, [])

  return (
    <div className='container-dashboard'>
      <MenuBand />
      <InfoBand band={band} />
    </div>
  )
}
