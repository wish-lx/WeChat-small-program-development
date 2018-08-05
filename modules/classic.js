import {HTTP} from '../util/http.js'

class ClassicModel extends HTTP {
      getLatest(Callback) {
        this.request({
          url: 'classic/latest',
          success: (res) => {
            Callback(res)
          }
        })
      }
}
export {ClassicModel}