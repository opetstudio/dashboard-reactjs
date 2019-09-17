import storage from 'redux-persist/lib/storage' // or whatever storage you are using
import immutablePersistenceTransform from '../Services/ImmutablePersistenceTransform'

// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
const REDUX_PERSIST = {
  active: true,
  reducerVersion: '236',
  storeConfig: {
    key: 'root',
    storage: storage, // Come back and replace this at some point
    // storage: 'AsyncStorage', // Come back and replace this at some point
    blacklist: ['paymentpage', 'app', 'qrcode'], // reducer keys that you do NOT want stored to persistence here
    // whitelist: [], Optionally, just specify the keys you DO want stored to
    // persistence. An empty array means 'don't store any reducers' -> infinitered/ignite#409
    transforms: [immutablePersistenceTransform]
  }
}

const currentReducerVersion = window.localStorage.getItem('currentReducerVersion')
const nextReducerVersion = REDUX_PERSIST.reducerVersion
if (currentReducerVersion !== nextReducerVersion) {
  window.localStorage.setItem('currentReducerVersion', nextReducerVersion)
  window.localStorage.setItem('isLoggedIn', false)
  window.sessionStorage.setItem('sessionToken', '')
  window.sessionStorage.setItem('publicToken', '')
}

export default REDUX_PERSIST
