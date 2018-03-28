import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import List from './pages/List'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'

class Root extends Component {
  render() {
    const {store} = this.props

    return (
      <Provider store={store}>
        <BrowserRouter>
          {/*<App>*/}
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/list" component={List} />
              <Route exact path="/detail/:index" component={Detail} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          {/*</App>*/}
        </BrowserRouter>
      </Provider>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)