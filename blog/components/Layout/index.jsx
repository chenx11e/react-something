import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      这是Layout
      <Footer />
    </div>
  )
}

export default Layout
