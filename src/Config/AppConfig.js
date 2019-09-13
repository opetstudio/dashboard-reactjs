const env =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? 'development'
    : 'production'
export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,
  analyticsTrackerId: '',
  // auth0: {
  //   clientId: cred.AUTH0_CLIENT_ID,
  //   host: cred.AUTH0_HOST
  // },
  backendURL: '',
  basePath: '/dashboard',
  env,
  minDesktopScreenWidth: 770,
  authHeader: env === 'development' ? 'Authorization' : 'Auth',
  publicToken: 'publicToken',
  sessionToken: 'sessionToken'
}
