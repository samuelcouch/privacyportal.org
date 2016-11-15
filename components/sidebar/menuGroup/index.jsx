import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import classNames from 'classnames'

import MenuGroupItem from '../menuGroupItem'

import styles from './styles.module.css'

export default class MenuGroup extends React.Component {
    render() {
        const { group } = this.props
        return (
            <div>
                <li>
                <p className="menu-label">{group.head}</p>
                </li>
                <li>
                    <ul>
                        {group.children.map((entry) => <MenuGroupItem item={entry} />)}
                    </ul>
                </li>
            </div>
        )
    }
}
