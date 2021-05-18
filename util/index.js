import axios from 'axios'
import moment from 'moment'
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
    return data
  } catch (e) {
    console.log('request error')
    const { data } = e.response || { data: { code: 500, message: e.toString() } }
    return data
  }
}

export const formatMoney = (number) => {
  let money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'vnd' }).format(number)
  return money.replace("₫", "") + 'VND'
}

export const getDateTimeArray = (stringTime) => {
  var check = moment(stringTime, 'YYYY/MM/DD');
  var month = check.format('MMM');
  var day = check.format('D');
  var year = check.format('YYYY');
  return { month, day, year }
}