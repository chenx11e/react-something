import { Layout } from 'antd'
import styles from './index.module.css'
import Post from '../Post'
import { Timeline, Tag } from 'antd'
import Link from 'next/link'

const { Content } = Layout

const CContent = ({ posts }) => {
  // console.log(posts)
  return (
    <Content className={styles.content}>
      <Timeline
      // items={[
      //   {
      //     children: post.title,
      //   },
      // ]}
      >
        {posts.map((post) => (
          <div key={post.id}>
            {/* <Post title={post.title} date={post.date} id={post.id} /> */}

            {post.categories
              ? post.categories.map((tag) => (
                  <Tag color="green" key={tag}>
                    {tag}
                  </Tag>
                ))
              : ''}

            <Link href={`/blog/${post.id}`}>
              <a>
                {post.title}
                <div>{post.date}</div>
              </a>
            </Link>
          </div>
        ))}
      </Timeline>
    </Content>
  )
}
export default CContent
