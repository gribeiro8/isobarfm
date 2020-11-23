import React, { useState, useEffect } from 'react'

import MenuBand from '../../components/MenuBand'
import InfoBand from '../../components/InfoBand'
import api from '../../services/api'

import './styles.scss'

const Band = ({ match }) => {
  const [band, setBand] = useState({})
  const { id } = match.params

  useEffect(() => {
    api.get(`bands/${id}`).then((response) => {
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
export default Band
