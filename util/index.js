import axios from 'axios'
import { BACKEND_URL } from '@env'

const CONTENT_TYPE = 'application/json'
const CONTENT_TYPE_FILE = 'multipart/form-data'

const headers = {
  'Content-Type': CONTENT_TYPE
}

export const post = async ({ url, body }) => {
  try {
    const data = await axios.post(BACKEND_URL + url, body, { headers })
    return data
  } catch (e) {
    const { data } = e.response || { data: { code: 500, message: e.toString() } }
    return data
  }
}

export const put = async ({ url, body }) => {
  try {
    const data = await axios.put(BACKEND_URL + url, body, { headers })
    return data
  } catch (e) {
    const { data } = e.response || { data: { code: 500, message: e.toString() } }
    return data
  }
}

export const get = async ({ url, query }) => {
  try {
    const { data } = await axios.get(BACKEND_URL + url, { headers, params: query })
    // console.log(data)
    return data
  } catch (e) {
    console.log(e)
    const { data } = e.response || { data: { code: 500, message: e.toString() } }
    return data
  }
}