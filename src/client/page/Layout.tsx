import * as React from 'react'
import LayoutHeader from '../components/LayoutHeader'
import LayoutFooter from '../components/LayoutFooter'
import PropTypes from 'prop-types'

const Layout = props => (
  <>
    <LayoutHeader />
    {props.children}
    <LayoutFooter />
    <div className="layout-bg"></div>
  </>
)

Layout.propTypes = {
  children: PropTypes.element,
}

export default Layout
