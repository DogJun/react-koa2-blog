import * as React from 'react'
import PropTypes from 'prop-types'
import './index.css'
const LayoutLine = ({ title }) => {
  return (
    <p className="layout-line">
      <span className="title">{title}</span>
    </p>
  )
}
LayoutLine.propTypes = {
  title: PropTypes.string.isRequired,
}

export default LayoutLine
