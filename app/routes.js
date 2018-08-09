import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import App from './pages/App'

import Survey from './pages/Survey'
import CompanyProfile from './pages/Company/Profile'

module.exports = (store) => {
  const history = syncHistoryWithStore(browserHistory, store)
  const routes = () => {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route component={App}>
            <Route path='/survey' component={Survey} />
            <Route path='/company_profile' component={CompanyProfile} />
          </Route>
        </Router>
      </Provider>
    )
  }
  return routes
}
