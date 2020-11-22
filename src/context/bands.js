import { createContext, useReducer } from 'react'
import axios from 'axios'

export const BandsContext = createContext({})
const url = `https://iws-recruiting-bands.herokuapp.com/api/bands`

export const bandsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_SUCCESS':
      return {
        bands: action.data,
        totalBands: action.data.length,
      }
    case 'GET_ORDER':
      return {
        bands: action.data,
        totalBands: action.data.length,
      }

    case 'GET_FILTER':
      return {
        bands: action.data,
        totalBands: action.data.length,
      }

    default:
      return state
  }
}

export const useBands = () => {
  const [state, dispatch] = useReducer(bandsReducer, {
    bands: {},
    totalBands: 0,
    ordeby: 0,
    error: null,
  })

  const getBands = async () => {
    try {
      const result = await axios.get(url)
      dispatch({ type: 'GET_SUCCESS', data: result.data })
    } catch (error) {
      dispatch({ type: 'GET_FAILED', error })
    }
  }

  function orderBandsByName(id) {
    const field = id === '0' ? 'name' : 'numPlays'
    const newArray = [].concat(state.bands).sort((a, b) => a[field] > b[field])
    dispatch({
      type: 'GET_ORDER',
      data: newArray,
    })
  }

  function filterName(text) {
    if (text === '') {
      getBands()
    } else {
      const newArray = []
        .concat(state.bands)
        .filter((o) => o.name.includes(text))
      dispatch({
        type: 'GET_FILTER',
        data: newArray,
      })
    }
  }

  return [state, { getBands, orderBandsByName, filterName }]
}
