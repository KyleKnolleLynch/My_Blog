import groq from 'groq'
import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { useRouter } from 'next/router'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(client)

const urlFor = source => builder.image(source)

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  //  try to fetch data
  const { slug } = params
  const query = groq`
    *[_type == 'post' && slug.current == '${slug}'][0]{
      ...,
      'author': author->name
    }
  `

  const data = await client.fetch(query)

  console.log(data)
  return {
    revalidate: 60 * 60 * 24,
    props: {
      post: data,
    },
  }
}

const SinglePost = ({ post }) => {
  const router = useRouter()

  console.log(post)

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  if (!post) {
    return (
      <>
        <Head>
          <meta name='robots' content='noindex' />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    )
  }

  return (
    <div className='bg-gray-300 antialiased'>
      <div className='max-w-screen-2xl min-h-screen mx-auto bg-white'>
        <div className='px-4 max-w-2xl mx-auto'>
          <h1 className='text-4xl font-bold text-gray-900 pt-12 pb-8 lg:text-5xl'>
            {post.title}
          </h1>

          <div className='flex space-x-5 text-sm text-gray-500 pb-4 pl-0.5'>
            <span className='text-red-700'>{post.author}</span>
            <span>{new Date(post.publishedAt).toDateString()}</span>
          </div>
          <Image width={800} height={500} src={urlFor(post.mainImage).url()} />
          <div className='prose max-w-2xl pb-16'>
            <BlockContent blocks={post.body} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePost
