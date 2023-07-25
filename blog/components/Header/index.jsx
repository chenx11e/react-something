import { Layout } from 'antd'
import styles from './index.module.css'
import Link from 'next/link'
const { Header } = Layout
const CHeader = () => {
  return (
    <Header className={styles.header} style={{ backgroundColor: '#7dbcea' }}>
      <Link href="/">
        <a className={styles.signature}>cxp</a>
      </Link>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={`${styles.link} ${styles.laptop}`}>Me</a>
        </Link>
        <Link href="/blog">
          <a className={`${styles.link} ${styles.laptop}`}>Blog</a>
        </Link>
        <Link href="/project">
          <a className={`${styles.link} ${styles.laptop}`}>Projects</a>
        </Link>
      </nav>
    </Header>
  )
}

export default CHeader
