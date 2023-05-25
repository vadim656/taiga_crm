import { ofetch } from 'ofetch'

const http = {
  get (url: string) {
    const config = useRuntimeConfig()
    return new Promise((resolve, reject) => {
      ofetch(url, {
        baseURL: 'https://online.moysklad.ru/api/remap/1.2',
        method: 'GET',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
          Authorization: 'Basic  YWRtaW5AdmFmb3VyMjAxNjM6NGY1NjIwMzViNA=='
        },
        onResponse ({ response }) {
          if (response.ok) {
            resolve(response._data)
          }
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  post (url: string) {
    const config = useRuntimeConfig()
    return new Promise((resolve, reject) => {
      ofetch(url, {
        baseURL: 'https://online.moysklad.ru/api/posap/1.0',
        method: 'GET',
        mode: 'cors',
        headers: {
          Authorization: 'Basic YWRtaW5AdmFmb3VyMjAxNjM6NGY1NjIwMzViNA=='
        },
        onResponse ({ response }) {
          if (response.ok) {
            resolve(response._data)
          }
        }
      }).catch(err => {
        reject(err)
      })
    })
  }
}
export default http
