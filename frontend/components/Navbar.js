const Navbar = () => {
  return (
    <nav className='flex py-2 pl-10 lg:pl-44 space-x-28 text-xl text-white bg-red-700 sticky top-0 z-30'>
      <a
        href='/'
        className='border-b-2 border-red-700 hover:border-white transition-all duration-300'
      >
        Blog
      </a>
      <a
        href='https://kylelynch.me'
        target='none'
        className='border-b-2 border-red-700 hover:border-white transition-all duration-300'
      >
        Portfolio
      </a>
    </nav>
  )
}

export default Navbar
