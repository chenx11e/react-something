import { Layout } from 'antd'
import styles from './index.module.css'
const { Content } = Layout
const CContent = () => {
  return <Content className={styles.content}>这是一个Content</Content>
}
export default CContent
