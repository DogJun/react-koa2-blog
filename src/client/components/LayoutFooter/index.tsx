import * as React from 'react'
import './index.css'
const LayoutFooter = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer>
      <p>©2016-{year} dogjun.com 粤ICP备16078223号</p>
    </footer>
  )
}

export default LayoutFooter
