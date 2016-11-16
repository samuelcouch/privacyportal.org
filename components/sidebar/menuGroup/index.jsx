import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import classNames from 'classnames'

import MenuGroupItem from '../menuGroupItem'

import styles from './styles.module.css'

export default class MenuGroup extends React.Component {
    static propTypes = {
        group: React.PropTypes.object.isRequired,
        updateSelection: React.PropTypes.func.isRequired,
        active: React.PropTypes.string.isRequired
    }

    render() {
        const { group, updateSelection, active } = this.props

        return (
            <div>
                <li>
                <p className="menu-label">{group.head}</p>
                </li>
                <li>
                    <ul>
                        {group.children.map((entry, i) => <MenuGroupItem item={entry} key={i} updateSelection={updateSelection} active={active} />)}
                    </ul>
                </li>
            </div>
        )
    }
}
