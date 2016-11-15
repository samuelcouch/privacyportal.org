import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { Helmet } from 'react-helmet'
import { config } from 'config'

import { tools } from 'data/tools.json'
import { menuItems } from 'data/menuItems.json'

import Hero from 'components/hero'
import { Menu } from 'components/sidebar'
import { ItemCard, ItemGrid } from 'components/item'

export default class Index extends React.Component {
    render () {
        return (
            <div>
                <Hero />
                <div className="container is-fluid">
                    <div className="columns">
                        <Menu menuGroups={menuItems} />
                        <ItemGrid items={tools}/>
                    </div>
                </div>
            </div>
        )
    }
}
