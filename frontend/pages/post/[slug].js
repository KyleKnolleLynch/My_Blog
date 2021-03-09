import groq from 'groq'
import client from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { useRouter } from 'next/router'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import BlockContent from '@sanity/block-content-to-react'
import Navbar from '../../components/Navbar'

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

  return {
    revalidate: 60 * 60 * 24,
    props: {
      post: data,
    },
  }
}

const SinglePost = ({ post }) => {
  const router = useRouter()

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
    <div className='px-4 max-w-2xl mx-auto'>
      <h1 className='text-4xl font-bold text-gray-900 pt-12 pb-8 lg:text-5xl'>
        {post.title}
      </h1>

      <div className='text-sm text-gray-500 pb-4 pl-0.5'>
        <p className='block'>
          By <span className='text-red-700'>{post.author}</span>
        </p>
        <span className='block'>
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
      </div>
      <Image width={800} height={500} src={urlFor(post.mainImage).url()} />
      <div className='prose prose-sm max-w-2xl py-16 sm:prose'>
        <BlockContent blocks={post.body} />
      </div>
    </div>
  )
}

export default SinglePost
