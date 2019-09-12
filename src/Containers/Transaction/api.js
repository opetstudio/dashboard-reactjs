// a library to wrap and simplify api calls
import AppConfig from '../../Config/AppConfig'

export const create = api => ({
  transactionReadRequest: (data, opt) => {
    let filtered = encodeURIComponent(JSON.stringify(data.filtered))
    let sorted = encodeURIComponent(JSON.stringify(data.sorted))
    // api.setHeader('authorization', opt.session.token)
    // const resp = api.get('/plink/report/list', {page: data.page + 1, pageSize: data.pageSize, filtered: data.filtered.map(r => ), sorted: data.sorted})
    const resp = api.get('/plink/report/list', {page: data.page, pageSize: data.pageSize, filtered, sorted})
    return resp
  }
})
