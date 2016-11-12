import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import classNames from 'classnames'

import styles from './styles.module.css'

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className={classNames("section", styles.fill)}>
                <div className={classNames("column", styles.sidebarStyle)}>
                    <aside className="menu">
                        <p className="menu-label">TESTING</p>
                        <ul className="menu-list">
                            <li>
                                <a className="is-active">MOBILE</a>
                            </li>
                            <li>
                                <ul>
                                    <li>iOS</li>
                                    <li>Android</li>
                                </ul>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>
        )
    }
}
