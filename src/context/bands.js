import { createContext, useReducer } from 'react'
import axios from 'axios'

export const BandsContext = createContext({})
const url = `https://iws-recruiting-bands.herokuapp.com/api/`

const getBands = async () => {
  try {
    const result = await axios.get(url + 'bands')
    console.log(result)
    dispatch({ type: 'GET_SUCCESS', data: result.data })
  } catch (error) {
    dispatch({ type: 'GET_FAILED', error })
  }
}
