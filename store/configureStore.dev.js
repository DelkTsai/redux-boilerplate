import { createStore, applyMiddleware, compose } from 'redux'
import Immutable from 'immutable'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import DevTools from '../containers/DevTools'

const middleware = routerMiddleware(browserHistory)

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, middleware),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
