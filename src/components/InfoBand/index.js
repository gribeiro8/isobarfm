import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import { FaPlus } from 'react-icons/fa'

import './styles.scss'

export default function InfoBand(props) {
  const { id, name, genre, biography, image, numPlays } = props.band
  const [albuns, setAlbuns] = useState({})

  useEffect(() => {
    api.get(`albums`).then((response) => {
      console.log(response.data)
      setAlbuns(response.data)
    })
    // eslint-disable-next-line
  }, [])

  return (
    <div className='infoBand'>
      <div
        className='infoBand__header'
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className='infoBand__title'>
          <h1>{name}</h1>
        </div>
        <div className='infoBand__detals'>
          <p>{genre}</p>
          <img src={image} alt='' />
          <p>{numPlays} PLAYS</p>
        </div>
      </div>
      <div className='infoBand__biografy'>
        <p>{biography}</p>
        <div class='separator'>
          <FaPlus color={'#494949'}></FaPlus>
        </div>
      </div>

      <hr />

      <div className='infoBand__albuns'>
        <h3>ALBUNS</h3>
        <div className='infoBand__albunsImgs'>
          {[]
            .concat(albuns)
            .filter((album) => {
              return album.band === id
            })
            .map((album) => (
              <img src={album.image} />
            ))}
        </div>
      </div>
    </div>
  )
}
