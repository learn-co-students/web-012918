import React from 'react'

const withLogger = (WrappedComponent) => {

  return (props) => {
    console.log("RERENDERING")
    return <WrappedComponent {...props} />
  }
}

export default withLogger
