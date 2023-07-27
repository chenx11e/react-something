import { getAllIds, getPostById } from '@/utils/postTools'
import styles from './article.module.css'
import { Tag } from 'antd'
// 这个data就是getStaticProps中的props内容
const Post = ({ data }) => {
  console.log(data)
  const colors = ['#f50', '#2db7f5', '#87d068', '#108ee9']
  return (
    <div>

      <p className={styles.title}>{data.title}</p>
      <p className={styles.date}>{data.date}</p>
      {data.tags
        ? data.tags.map((tag, index) => (
          <Tag color={colors[index % 4]} key={tag}>
            {tag}
          </Tag>
        ))
        : ''}
      <article className='md'>
        <div dangerouslySetInnerHTML={{ __html: data.htmlContent }}></div>
      </article>
    </div>

  )
}

export default Post

// 提供动态路由 
// getStaticPaths 中的 paths 参数用于指定哪些路径需要被预先生成。
export const getStaticPaths = async () => {
  const paths = await getAllIds()
  return {
    paths,
    fallback: false,
  }
}

// 数据预取函数 用于在构建时获取组件所需的静态数据。
// getStaticProps 函数在构建时执行，可以通过该函数从外部数据源（如数据库或 API）获取数据，并将其作为属性传递给组件。
// 通过在页面组件中使用 getStaticProps，可以实现静态生成并在构建时提供所需的数据，从而提高性能和SEO。
export const getStaticProps = async ({ params }) => {
  const data = await getPostById(params.id)
  console.log(data)
  return {
    // 将数据放在props中返回 传递给页面组件
    props: {
      data,
    },
  }
}