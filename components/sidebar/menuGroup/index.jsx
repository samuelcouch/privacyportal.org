import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import classNames from 'classnames'

import MenuGroupItem from '../menuGroupItem'

import styles from './styles.module.css'

export default class MenuGroup extends React.Component {
    render() {
        const { group, updateSelection } = this.props

        return (
            <div>
                <li>
                <p className="menu-label">{group.head}</p>
                </li>
                <li>
                    <ul>
                        {group.children.map((entry, i) => <MenuGroupItem item={entry} key={i} updateSelection={updateSelection} />)}
                    </ul>
                </li>
            </div>
        )
    }
}
