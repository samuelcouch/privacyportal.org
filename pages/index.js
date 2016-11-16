import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { Helmet } from 'react-helmet'
import { config } from 'config'

import * as SelectionActions from '../utils/actions'

import { tools } from 'data/tools.json'
import { menuItems } from 'data/menuItems.json'

import Hero from 'components/hero'
import { Menu } from 'components/sidebar'
import { ItemCard, ItemGrid } from 'components/item'

@connect(state => ({
    selection: state.selection
}))

export default class Index extends React.Component {
    static propTypes = {
        selection: React.PropTypes.object.isRequired,
        dispatch: React.PropTypes.func.isRequired
    }

    render () {
        const { selection, dispatch } = this.props
        const actions = bindActionCreators(SelectionActions, dispatch)

        return (
            <div>
                <Hero />
                <div className="container is-fluid">
                    <div className="columns">
                        <Menu menuGroups={menuItems} updateSelection={actions.updateSelection} />
                        <ItemGrid items={tools}/>
                    </div>
                </div>
            </div>
        )
    }
}
