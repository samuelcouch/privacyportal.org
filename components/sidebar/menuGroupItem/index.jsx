import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import classNames from 'classnames'

import styles from './styles.module.css'

export default class MenuGroupItem extends React.Component {
    static propTypes = {
        updateSelection: React.PropTypes.func.isRequired
    }

    render() {
        const { item, updateSelection } = this.props
        const key = item.replace(/\s/g,'').toLowerCase()

        return (
                <li key={key}><a onClick={() => updateSelection(key)} href="#">{item}</a></li>
        )
    }
}
