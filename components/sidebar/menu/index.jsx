import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import classNames from 'classnames'

import MenuGroup from '../menuGroup'

import styles from './styles.module.css'

export default class Menu extends React.Component {
    render() {
        const { menuGroups, updateSelection } = this.props

        return (
            <div className={classNames("column", "is-2", styles.sidebarStyle)}>
                <p className={styles.topSpace}>SELECT A CATEGORY</p>
                <br />
                <aside className="menu">
                    <ul className="menu-list">
                        {menuGroups.map((group, i) => <MenuGroup group={group} key={group.head} updateSelection={updateSelection} />)}
                    </ul>
                </aside>
            </div>
        )
    }
}
