import Link from 'next/link'

const Post = ({ title, date, id }) => {
  return (
    <Link href={`/blog/${id}`}>
      {/* <div className={styles.post}>
        <p className={styles.title}>{title}</p>
        <p className={styles.date}>{date}</p>
      </div> */}
      <p>{title}</p>
    </Link>
  )
}

export default Post
