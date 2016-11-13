import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import classNames from 'classnames'

import Card from '../card'

import styles from './styles.module.css'

export default class ItemGrid extends React.Component {
    render() {
        return (
            <div className={classNames('column', 'is-10', styles.offsetSixPercent)}>
                <div className="columns is-multiline is-mobile">
                    <Card />
                </div>
            </div>
        )
    }
}
