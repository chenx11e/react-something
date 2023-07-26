import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './index.module.css'
import { Layout } from 'antd'
// const { Footer } = Layout
const CLayout = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </Layout>
  )
}

export default CLayout
