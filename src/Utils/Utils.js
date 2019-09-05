import React from 'react'
import namor from 'namor'
// import Chance from 'chance'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  // const statusChance = Math.random()
  // const chance = new Chance()
  const _id = Date().now()
  return {
    _id,
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100)
    // status:
    //   statusChance > 0.66
    //     ? 'relationship'
    //     : statusChance > 0.33
    //       ? 'complicated'
    //       : 'single'
  }
}

export function makeData (len = 5553) {
  return range(len).map(d => {
    return {
      ...newPerson()
      // children: range(10).map(newPerson)
    }
  })
}

export const Logo = () => (
  <div
    style={{
      margin: '1rem auto',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    For more examples, visit {''}
    <br />
    <a href='https://github.com/react-tools/react-table' target='_blank'>
      <img
        src='https://github.com/react-tools/media/raw/master/logo-react-table.png'
        style={{ width: `150px`, margin: '.5em auto .3em' }}
      />
    </a>
  </div>
)

export const Tips = () => (
  <div style={{ textAlign: 'center' }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>
)

export const loadScript = (pathname) => {
  [
    // '/bower_components/jquery/dist/jquery.min.js',
    // '/bower_components/bootstrap/dist/js/bootstrap.min.js',
    // '/bower_components/select2/dist/js/select2.full.min.js',
    // '/bower_components/fastclick/lib/fastclick.js',
    // '/dist/js/adminlte.min.js'
    // '/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js',
    // '/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
    // '/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
    // '/bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
    // '/bower_components/chart.js/Chart.js',
    // '/plugins/iCheck/icheck.min.js',
    // '/native-script.js'
  ].map(str => {
    var element = document.querySelector('[src=\'' + str + '\']')
    if (element) element.parentNode.removeChild(element)
    let script = document.createElement('script')
    script.src = str
    // script.async = true
    script.async = false
    document.body.appendChild(script)
  })
}
