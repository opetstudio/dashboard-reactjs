// a library to wrap and simplify api calls
import AppConfig from '../../Config/AppConfig'
import {generateHmac} from '../../Utils/Utils'

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
  },
  merchantRequestMinMaxLimit: (data, opt) => {
    api.setHeader('mac', '6905fad8847d8548e225e1701ada9f502741e0f6c3fd68697017e5c06b7ff733')
    api.setHeader(
      AppConfig.authHeader,
      AppConfig.authTokenType + ' ' + opt.session.access_token
    )
    // /plink/merchant/detail/{cd}
    const resp = api.get(`/plink/merchant/getMerchantLimit/${opt.merchantCode}`)
    return resp
  },
  merchantUpdateMinMaxLimit: (data, opt) => {
    let body = {merchantLimitMin: data.minlimit, merchantLimitMax: data.maxlimit}
    console.log('body==>', JSON.stringify(body))
    api.setHeader('mac', generateHmac(JSON.stringify(body)))
    api.setHeader(
      AppConfig.authHeader,
      AppConfig.authTokenType + ' ' + opt.session.access_token
    )
    // /plink/merchant/detail/{cd}
    const resp = api.post(`/plink/merchant/update-limit/${opt.merchantCode}`)
    return resp
  },
  merchantGetCredential: (data, opt) => {
    api.setHeader(
      AppConfig.authHeader,
      AppConfig.authTokenType + ' ' + opt.session.access_token
    )
    const resp = api.get(`/plink/merchant/cred/${opt.merchantCode}`)
    return resp
  }
})
