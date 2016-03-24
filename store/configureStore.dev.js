import { createStore, applyMiddleware, compose } from 'redux'
import Immutable from 'immutable'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, createLogger({
        stateTransformer: (state) => {
          var newState = {};
          for (var i of Object.keys(state)) {
            if (Immutable.Iterable.isIterable(state[i])) {
              newState[i] = state[i].toJS();
            } else {
              newState[i] = state[i];
            }
          };
          return newState;
        }
      })),
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