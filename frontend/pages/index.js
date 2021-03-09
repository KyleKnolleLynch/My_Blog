import client from '../client'
import groq from 'groq'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const getStaticProps = async () => {
  const query = groq`
  {
    'posts': *[_type == 'post']{title, mainImage, publishedAt, slug,
      'categories': categories[]->title,
      'authorName': author->name,
      'authorSlug': author->slug,
    },
    'home': *[_type == 'homepage']
  }
  `

  const data = await client.fetch(query)

  return {
    props: {
      posts: data.posts,
      home: data.home[0],
    },
  }
}

export default function Home({ posts, home }) {
  return (
    <>
      <Hero home={home} />
      <div className='px-6 md:flex md:pt-20 pb-20'>
        <h2 className='my-10 text-2xl font-medium text-gray-800 lg:w-96 lg:text-center'>
          Latest Articles
        </h2>
        <Posts posts={posts} />
      </div>
    </>
  )
}
