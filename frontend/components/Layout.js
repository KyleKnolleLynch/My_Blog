import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className='bg-gray-300 antialiased'>
      <div className='max-w-screen-2xl min-h-screen mx-auto bg-white'>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
