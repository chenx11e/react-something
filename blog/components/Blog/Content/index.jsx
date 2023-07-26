import { Layout } from 'antd'
import styles from './index.module.css'
import Post from '../Post'

const { Content } = Layout

const CContent = ({ posts }) => {
  return (
    <Content className={styles.content}>
      {posts
        // .filter((post) => post.date.includes(year))
        .map((post) => (
          <Post
            title={post.title}
            date={post.date}
            id={post.id}
            key={post.id}
          />
        ))}
    </Content>
  )
}
export default CContent
