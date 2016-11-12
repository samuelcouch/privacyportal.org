import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import classNames from 'classnames'

import styles from './styles.module.css'
import laptopImg from '../../assets/images/laptop.svg'
import phoneImg from '../../assets/images/phone.svg'

export default class Hero extends React.Component {
    render() {
        return (
            <section className={classNames("hero", "is-primary")}>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <div className="column is-half">
                                <p className="title">KEEP YOUR DIGITAL LIFE IN CHECK.</p>
                                <p className="subtitle">
                                    Today, more than ever, it's important to be aware of the technology that you use on a daily basis, and how to protect your privacy. We reliaze that everyone has different concerns and want to be able to suggest tips and tools to best suit your needs, and keep you safe!
                                </p>
                            </div>
                            <div className={classNames("column", "is-narrow", "is-offset-1")}>
                                <img src={laptopImg} />
                                <img className={styles.iconImg} src={phoneImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
