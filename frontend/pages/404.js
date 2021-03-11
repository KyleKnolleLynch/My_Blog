import Link from 'next/link'
import Head from 'next/head'

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 Page Not Found!</title>
        <meta name='robots' content='noindex' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta charset='UTF-8' />
      </Head>
      <div className='flex flex-col min-h-screen pb-44 justify-center items-center space-y-6'>
        <h1 className='font-medium text-5xl'>Ooops...</h1>
        <h2 className='text-2xl'>That page could not be found.</h2>
        <p className='text-lg'>
          Go back to the blog's
          {' '}
          <Link href='/'>
            <a className='text-red-700 font-bold text-2xl underline'>
              Homepage
            </a>
          </Link>
        </p>
      </div>
    </>
  )
}

export default NotFound
