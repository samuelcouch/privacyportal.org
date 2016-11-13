import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import classNames from 'classnames'

import styles from './styles.module.css'

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className={classNames("column", styles.sidebarStyle)}>
                <p>SELECT A CATEGORY</p>
                <br />
                <aside className="menu">
                    <ul className="menu-list">
                        <li>
                            <p className="menu-label">MOBILE</p>
                        </li>
                        <li>
                            <ul>
                                <li><a className="menu-label is-active">iOS</a></li>
                                <li><a className="menu-label">Android</a></li>
                            </ul>
                        </li>
                        <li>
                            <p className="menu-label">DESKTOP</p>
                        </li>
                        <li>
                            <ul>
                                <li><a className="menu-label">OS X</a></li>
                                <li><a className="menu-label">Windows</a></li>
                                <li><a className="menu-label">Linux</a></li>
                            </ul>
                        </li>
                        <li>
                            <p className="menu-label">GENERAL WEB</p>
                        </li>
                        <li>
                            <ul>
                                <li><a className="menu-label">Passwords</a></li>
                                <li><a className="menu-label">Browser privacy</a></li>
                            </ul>
                        </li>
                    </ul>
                </aside>
            </div>
        )
    }
}
