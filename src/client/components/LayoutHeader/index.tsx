import * as React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'
const LayoutHeader = () => (
  <header>
    <img
      className="avatar"
      src={require('./../../assets/imgs/avatar.jpeg')}
      alt="avatar"
    />
    <p className="name">DogJun@1995</p>
    <p className="description">
      A Front-end developer passionate about coding and sharing!
    </p>
    <ul className="navigations">
      <li>
        <NavLink to="/">
          <i className="iconfont icon-home" title="回到首页"></i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/post">
          <i className="iconfont icon-article" title="全部文章"></i>
        </NavLink>
      </li>
    </ul>
  </header>
)

export default LayoutHeader
