import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import classNames from 'classnames'

import styles from './styles.module.css'

export default class MenuGroupItem extends React.Component {
    static propTypes = {
        item: React.PropTypes.string.isRequired,
        updateSelection: React.PropTypes.func.isRequired,
        active: React.PropTypes.string.isRequired
    }

    render() {
        const { item, updateSelection, active } = this.props
        const key = item.replace(/\s/g,'').toLowerCase()
        const activeClass = (active == key)? 'is-active':''

        return (
                <li key={key}><a className={activeClass} onClick={() => updateSelection(key)}>{item}</a></li>
        )
    }
}
