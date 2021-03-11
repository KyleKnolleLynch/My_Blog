const Loader = () => {
  return (
    <div className='w-screen h-screen bg-white flex min-h-screen justify-center items-center pb-40'>
      <div className='w-24 h-24 flex justify-around items-end'>
        <div className='w-5 h-5 bg-red-700 rounded-full animate-bouncer'></div>
        <div
          className='w-5 h-5 bg-red-700 rounded-full opacity-80 animate-bouncer'
          style={{ animationDelay: '100ms' }}
        ></div>
        <div
          className='w-5 h-5 bg-red-700 rounded-full opacity-60 animate-bouncer'
          style={{ animationDelay: '200ms' }}
        ></div>
        <div
          className='w-5 h-5 bg-red-700 rounded-full opacity-40 animate-bouncer'
          style={{ animationDelay: '300ms' }}
        ></div>
      </div>
    </div>
  )
}

export default Loader
