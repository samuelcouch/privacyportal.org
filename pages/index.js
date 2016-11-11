import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { Helmet } from 'react-helmet'
import { config } from 'config'

import { tools } from 'data/tools.json'

import { ItemCard } from 'components/item'

export default class Index extends React.Component {
  render () {
    return (
        <div>
            <div className="hero">
                Keep your digital life in check.
            </div>
            <div className="spacing">
                  {tools.map((tool, i) => <ItemCard tool={tool} key={i} />)}
            </div>
        </div>
    )
  }
}
