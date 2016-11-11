import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

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
            <div className={styles.card} onClick={this.handleFullscreen.bind(this)}>
                <div className={styles.inner}>
                    <h2>{tool.name}</h2>
                    <p>{tool.description}</p>
                </div>
            </div>
        );
    }
}
