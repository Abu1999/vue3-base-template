import Axios from '@/utils/axios'

export const getData = () => {
  return new Promise((resolve, reject) => {
    Axios.get('/api/users')
      .then((response) => {
        console.log(response)
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
