import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
//import App from './App'
import Inbox from './inbox'
import reducers from './reducer'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(reducers)
//const store = createStore(() => {});
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Inbox} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
