import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import classNames from 'classnames'

import Card from '../card'

import styles from './styles.module.css'

export default class ItemGrid extends React.Component {
    render() {
        const { items } = this.props
        return (
            <div className={classNames('column', 'is-10', styles.offsetSixPercent)}>
                <div className="columns is-multiline is-mobile">
                    {items.map((item, i) => <Card tool={item} key={i} />)}
                </div>
            </div>
        )
    }
}
