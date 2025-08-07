import Axios from '@/utils/axios'

export const getData = () => {
  return new Promise((resolve, reject) => {
    Axios.post('/login')
      .then((response) => {
        console.log(response)
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
