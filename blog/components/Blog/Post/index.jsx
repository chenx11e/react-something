import Link from 'next/link'

const Post = ({ title, date, id }) => {
  return (
    <Link href={`/blog/${id}`}>
      <p>{title}</p>
    </Link>
  )
}

export default Post
