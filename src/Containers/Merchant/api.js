// a library to wrap and simplify api calls
import AppConfig from '../../Config/AppConfig'

export const create = api => ({
  merchantCreateRequest: (data, opt) => {
    // api.setHeader('authorization', opt.session.token)
    const resp = api.post('/dashboard/merchantCreate', data)
    return resp
  }
})
