import React, { useState, useEffect } from 'react'

import './styles.scss'
import api from '../../services/api'
import CardBand from '../CardBand'

export default function Bands({ setTotalResults, orderBy }) {
  const [bands, setBands] = useState([])

  function orderBandsByName(apiBands) {
    const teste = apiBands.sort((a, b) => (a.name > b.name ? 1 : -1))
    console.log(teste)

    setBands(teste)
  }

  function orderBandsByPopularity() {
    const teste1 = []
    console.log(teste1)
    setBands([])
  }

  function countResults(apiBands) {
    setTotalResults(apiBands.length)
  }

  useEffect(() => {
    console.log('Troca')
    if (orderBy === 1) {
      orderBandsByPopularity(bands)
    } else {
      orderBandsByName(bands)
    }
  }, [orderBy])

  useEffect(() => {
    api.get('bands').then((response) => {
      orderBandsByName(response.data)
      countResults(response.data)
    })
  }, [])

  return (
    <div className='bands'>
      <ul>
        {[]
          .concat(bands)
          .sort((a, b) => a.name > b.name)
          .map((band) => (
            <CardBand key={band.id} band={band} />
          ))}
      </ul>
    </div>
  )
}
