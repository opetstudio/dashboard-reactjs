import PropTypes from 'prop-types'
import React from 'react'
import PaymentpageDesktopContainer from './Paymentpage/DesktopContainer'
import PaymentpageMobileContainer from './Paymentpage/MobileContainer'
import AdminlteContainer from './AdminlteContainer'
// import MaterialuiContainer from './MaterialuiContainer'

const ResponsiveContainer = ({ children, appname }) => {
  if (appname !== 'paymentpage') {
    return (<AdminlteContainer>{children}</AdminlteContainer>)
  }
  return (
    <div>
      {/* {window.innerWidth >= 769 && ( */}
      <PaymentpageDesktopContainer>{children}</PaymentpageDesktopContainer>
      {/* )} */}
      {/* {window.innerWidth <= 768 && ( */}
      <PaymentpageMobileContainer>{children}</PaymentpageMobileContainer>
      {/* // <MaterialuiContainer /> */}
      {/* )} */}
    </div>
  )
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node
}

export default ResponsiveContainer
