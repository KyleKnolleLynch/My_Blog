import Link from 'next/link'

const Posts = ({ posts }) => {
  return (
    <div className='flex flex-col divide-y-2 divide-red-700 md:pl-16 md:w-3/4 lg:w-3/5'>
      {posts &&
        posts.map(post => (
          <div key={post.slug.current} className='py-12'>
            <div className='text-gray-500 text-sm font-bold pb-6 flex space-x-4'>
              {post.categories.map(category => (
                <span key={category}>{category}</span>
              ))}
            </div>
            <Link href={`/post/${post.slug.current}`}>
              <a className='text-gray-600 hover:text-gray-400 transition-colors duration-500'>
                <h2 className='text-3xl font-medium  pb-4 md:text-4xl tracking-tight'>
                  {post.title}
                </h2>
              </a>
            </Link>
            <span className='text-gray-500 text-sm'>
              article by <span className='text-red-700'>{post.authorName}</span>{' '}
              on {new Date(post.publishedAt).toLocaleDateString()}
            </span>
          </div>
        ))}
    </div>
  )
}

export default Posts
