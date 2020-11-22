import React, { useContext } from 'react'

import { BandsContext } from '../../context/bands'
import noResultsImg from '../../assets/img/no_results.png'

import './styles.scss'
import CardBand from '../CardBand'

export default function Bands() {
  const bandsNew = useContext(BandsContext)

  return bandsNew.state.totalBands > 0 ? (
    <div className='bands'>
      <ul>
        {[].concat(bandsNew.state.bands).map((band) => (
          <CardBand key={band.id ?? 0} band={band} />
        ))}
      </ul>
    </div>
  ) : (
    <div className='noResults'>
      <h1>Sem resultados...</h1>
      <img src={noResultsImg} alt='' />
    </div>
  )
}
