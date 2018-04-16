import withAuth from './withAuth'
import withLogger from './withLogger'

const withAuthLogger = (WrappedComponent) => {
  return withAuth(withLogger(WrappedComponent))
}


export default withAuthLogger
