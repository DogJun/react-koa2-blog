import * as React from 'react'
import Layout from '../Layout'
import LayoutLine from '../../components/LayoutLine'
import PostList from '../../components/PostList'
const HomePage = () => (
  <Layout>
    <LayoutLine title="CODING" />
    <PostList />
  </Layout>
)

export default HomePage
