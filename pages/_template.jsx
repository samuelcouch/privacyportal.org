import React from 'react'
import '../assets/css/normalize.css'
import '../assets/css/skeleton.css'
import '../assets/css/main.css'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },

  render () {
    return (
      <div className="container">
          <div className="row">
              <section>
                  <nav className="sidebar">
                      <ul className="sidebar-items">
                          <li>ONE</li>
                          <li>TWO</li>
                          <li>THREE</li>
                          <li>FOUR</li>
                      </ul>
                  </nav>
                  &nbsp;
              </section>
              <section className="nine columns" style={{
                      marginTop: 50,
                  }}>
                  {this.props.children}
              </section>
          </div>
      </div>
    )
  },
})
