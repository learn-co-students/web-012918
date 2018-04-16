import React from 'react'
// import withAuth from '../hoc/withAuth'
// import withLogger from '../hoc/withLogger'
import withAuthLogger from '../hoc/withAuthLogger'

const MattPaysAttention = (props) => {
  return (<h1><marquee>PAY ATTENTION MATT</marquee></h1>)
}

export default withAuthLogger(MattPaysAttention)
