import React, { useState, useEffect } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

import api from '../../services/api'

import './styles.scss'

const InfoBand = ({ band }) => {
  const { id, name, genre, biography, image, numPlays } = band
  const [albuns, setAlbuns] = useState({})

  useEffect(() => {
    api.get(`albums`).then((response) => {
      setAlbuns(response.data)
    })
  }, [])

  return (
    <div className='info-band'>
      <div
        className='info-band__header'
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className='info-band__title'>
          <h1>{name}</h1>
        </div>
        <div className='info-band__detals'>
          <p>{genre}</p>
          <img src={image} alt='' />
          <p>{numPlays} PLAYS</p>
        </div>
      </div>
      <div className='info-band__biografy'>
        <a href='#show' className='show btn' id='show'>
          <div className=' separator'>
            <FaPlus color='#494949' />
          </div>
        </a>
        <a href='#hide' className='hide btn' id='hide'>
          <div className=' separator'>
            <FaMinus color='#494949' />
          </div>
        </a>

        <p className='panel' dangerouslySetInnerHTML={{ __html: biography }} />

        <div className='fade' />
      </div>

      <hr />

      <div className='info-band__albuns'>
        <h3>ALBUNS</h3>
        <div className='info-band__albunsImgs'>
          {[]
            .concat(albuns)
            .filter((album) => {
              return album.band === id
            })
            .map((album) => (
              <img src={album.image} alt='' />
            ))}
        </div>
      </div>
    </div>
  )
}

export default InfoBand
