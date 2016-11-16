import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import classNames from 'classnames'

import MenuGroup from '../menuGroup'

import styles from './styles.module.css'

export default class Menu extends React.Component {
    static propTypes = {
        menuGroups: React.PropTypes.array.isRequired,
        updateSelection: React.PropTypes.func.isRequired,
        active: React.PropTypes.string.isRequired
    }

    render() {
        const { menuGroups, updateSelection, active } = this.props

        return (
            <div className={classNames("column", "is-2", styles.sidebarStyle)}>
                <p className={styles.topSpace}>SELECT A CATEGORY</p>
                <br />
                <aside className="menu">
                    <ul className="menu-list">
                        {menuGroups.map((group, i) => <MenuGroup group={group} key={group.head} updateSelection={updateSelection} active={active} />)}
                    </ul>
                </aside>
            </div>
        )
    }
}
