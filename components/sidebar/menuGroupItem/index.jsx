import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import classNames from 'classnames'

import styles from './styles.module.css'

export default class MenuGroupItem extends React.Component {
    render() {
        const { item } = this.props

        return (
                <li key={item.replace(/\s/g,'').toLowerCase()}><a href="#">{item}</a></li>
        )
    }
}
