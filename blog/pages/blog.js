import Content from "@/components/Blog/content"
import { getSortedPostData } from '../utils/postTools'
export const getStaticProps = async () => {
  const posts = await getSortedPostData()
  return {
    props: {
      posts,
    },
  }
}
const blog = ({ posts }) => {
  return (
    <div>
      <Content posts={posts} />
    </div>
  )
}
export default blog
