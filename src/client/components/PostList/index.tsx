import * as React from 'react'
import { NavLink } from 'react-router-dom'

const PostList = () => {
  const article = [
    {
      title: '大大大',
      id: 0,
      lastEditTime: '2019-08-09',
    },
    {
      title: 'sdsdff短发短发发广告',
      id: 1,
      lastEditTime: '2019-08-11',
    },
  ]
  return (
    <ul className="posts-list">
      {article.length
        ? article.map(item => {
            return (
              <li v-for="item in article" key={item.id}>
                <NavLink className="title" to="`/post/${item.id}`">
                  {item.title}
                </NavLink>
                <span className="createTime">（{item.lastEditTime}）</span>
              </li>
            )
          })
        : null}
    </ul>
  )
}

export default PostList
