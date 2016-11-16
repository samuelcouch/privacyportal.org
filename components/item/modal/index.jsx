import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import classNames from 'classnames'

import styles from './styles.module.css'

export default class Modal extends React.Component {
    render() {
        const { active, details } = this.props
        const activeClass = (active)? 'is-active':''

        return (
            <div className={classNames("modal", activeClass)}>
              <div className="modal-background" onClick={this.props.clickHandler}></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">{details.name}</p>
                  <button className="delete" onClick={this.props.clickHandler}></button>
                </header>
                <section className="modal-card-body">
                  <div className="content">
                  </div>
                </section>
                <footer className="modal-card-foot">
                </footer>
              </div>
            </div>
        )
    }
}
