import * as React from 'react'
import LayoutHeader from '../../components/LayoutHeader'
import LayoutFooter from '../../components/LayoutFooter'
import LayoutBg from '../../components/LayoutBg'
import PropTypes from 'prop-types'
import './index.css'
const Layout = props => (
  <>
    <LayoutHeader />
    <div className="layout-main">{props.children}</div>
    <LayoutFooter />
    <LayoutBg />
  </>
)

Layout.propTypes = {
  children: PropTypes.element,
}

export default Layout
