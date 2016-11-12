import React from 'react'

import '../assets/sass/main.sass'
import '../assets/css/main.css'

import Hero from 'components/hero'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },

  render () {
    return (
        <div>
            {this.props.children}
        </div>
    )
  },
})
