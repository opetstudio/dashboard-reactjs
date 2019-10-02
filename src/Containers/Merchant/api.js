// a library to wrap and simplify api calls
import AppConfig from '../../Config/AppConfig'

export const create = api => ({
  merchantCreateRequest: (data, opt) => {
    // api.setHeader('authorization', opt.session.token)
    const resp = api.post('/dashboard/merchantCreate', data)
    return resp
  },
  merchantReadRequest: (data, opt) => {
    let params = {}
    params.page = (data.page || 0) + 1
    params.pageSize = data.pageSize
    data.filtered.forEach((v, k) => {
      params[v['id']] = v['value']
    })
    data.sorted.forEach((v, k) => {
      params['orderby'] = v['id']
      params['desc'] = v['desc']
    })
    const resp = api.get('/plink/merchant/list', params)
    return resp
  },
  merchantReadOneRequest: (data, opt) => {
    api.setHeader('mac', '6905fad8847d8548e225e1701ada9f502741e0f6c3fd68697017e5c06b7ff733')
    api.setHeader(
      AppConfig.authHeader,
      AppConfig.authTokenType + ' ' + opt.session.access_token
    )
    // /plink/merchant/detail/{cd}
    const resp = api.get(`/plink/merchant/detail/${opt.merchantCode}`)
    return resp
  }
})
