import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import classNames from 'classnames'

import styles from './styles.module.css'

export default class ItemCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fullscreen: false,
        }
    }

    handleFullscreen() {
        this.setState({
            fullscreen: !this.state.fullscreen
        })

        console.log(this.state.fullscreen)
    }

    render() {
        const { tool } = this.props

        return(
            <div>
                <div className="column">
                  <div className="card" onClick={this.handleFullscreen.bind(this)}>
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
            </div>
        );
    }
}
