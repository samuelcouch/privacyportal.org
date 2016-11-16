import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import * as reducers from '../utils/reducers'

import '../assets/sass/main.sass'
import '../assets/css/main.css'

const reducer = combineReducers(reducers)
const store = createStore(reducer)

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },

  render () {
      return (
          <Provider store={store}>
              {this.props.children}
          </Provider>
      )
  },
})
