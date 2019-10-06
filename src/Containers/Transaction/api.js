// a library to wrap and simplify api calls
import AppConfig from '../../Config/AppConfig'
import {generateHmac} from '../../Utils/Utils'

export const create = api => ({
  transactionUpdateMinMaxLimit: (data, opt) => {
    let body = {transactionLimitMin: data.minlimit, transactionLimitMax: data.maxlimit}
    console.log('body==>', JSON.stringify(body))
    api.setHeader('mac', generateHmac(JSON.stringify(body)))
    api.setHeader(
      AppConfig.authHeader,
      AppConfig.authTokenType + ' ' + opt.session.access_token
    )
    // /plink/transaction/detail/{cd}
    const resp = api.post(`/plink/transaction/update-limit/${opt.transactionCode}`)
    return resp
  }
})
