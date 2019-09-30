// a library to wrap and simplify api calls
import AppConfig from '../../Config/AppConfig'
export const create = api => ({
  transactionReadRequest: (data, {encryptedAccessToken, userMerchantCode}) => {
    // let filtered = encodeURIComponent(JSON.stringify(data.filtered))
    // let sorted = encodeURIComponent(JSON.stringify(data.sorted))
    // api.setHeader('authorization', opt.session.token)
    // const resp = api.get('/plink/report/list', {page: data.page + 1, pageSize: data.pageSize, filtered: data.filtered.map(r => ), sorted: data.sorted})
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
    api.setHeader(
      AppConfig.authHeader,
      AppConfig.authTokenType + ' ' + encryptedAccessToken
    )
    console.log('userMerchantCode====>', userMerchantCode)
    params['mercId'] = userMerchantCode
    const resp = api.get('/plink/report/list', params)
    return resp
  }
})
