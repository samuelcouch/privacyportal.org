import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import classNames from 'classnames'

import Modal from '../modal'

import styles from './styles.module.css'

export default class ItemCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modalIsActive: false,
        }

        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle() {
        this.setState({
            modalIsActive: !this.state.modalIsActive
        })
    }

    render() {
        const { tool } = this.props

        return(
            <div>
                <div className="column">
                  <div className="card" onClick={this.handleToggle}>
                      <header className="card-header">
                          <p className={classNames("card-header-title", styles.toolTitle)}>
                              {tool.name}
                          </p>
                      </header>
                      <div className="card-content">
                          <div className="content">
                              {tool.short_description}
                          </div>
                      </div>
                  </div>
                </div>
                <Modal details={tool} active={this.state.modalIsActive} clickHandler={this.handleToggle} />
            </div>
        );
    }
}
