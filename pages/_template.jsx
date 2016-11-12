import React from 'react'

import '../node_modules/bulma/bulma.sass'
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
            <Hero />
        </div>
    )
  },
})
