import React, { useState, useEffect } from 'react'

import './styles.scss'
import api from '../../services/api'
import MenuBand from '../../components/MenuBand'
import InfoBand from '../../components/InfoBand'

export default function Band(props) {
  const [band, setBand] = useState({})
  const { id } = props.match.params
  useEffect(() => {
    api.get(`bands/${id}`).then((response) => {
      console.log(response.data)
      setBand(response.data)
    })
    // eslint-disable-next-line
  }, [])

  return (
    <div className='container-dashboard'>
      <MenuBand />
      <InfoBand band={band} />
    </div>
  )
}
