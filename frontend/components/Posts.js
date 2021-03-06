import Link from 'next/link'

const Posts = ({ posts }) => {
  console.log(posts)

  return (
    <div className='flex flex-col md:pl-16 md:w-3/4 lg:w-3/5'>
      {posts &&
        posts.map(post => (
          <div
            key={post.slug.current}
            className='py-12 border-red-700 border-b-2'
          >
            <span className='text-gray-400'>
              {post.categories.map(category => category + ' ')}
            </span>
            <Link href={`/post/${post.slug.current}`}>
              <a>
                <h2 className='text-3xl font-medium text-gray-600 my-2 md:text-4xl hover:text-gray-400 transition-colors duration-500'>
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
