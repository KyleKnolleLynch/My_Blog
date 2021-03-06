import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import client from '../client'
import SocialIcons from './SocialIcons'

const builder = imageUrlBuilder(client)

const urlFor = source => builder.image(source)

const Hero = ({ home }) => {
  return (
    <div>
      <div className='relative h-144'>
        <div className='absolute w-full h-full bg-yellow-900 bg-opacity-50 z-10'></div>
        <Image
          layout='fill'
          src={urlFor(home.mainImage).url()}
          className='absolute object-cover'
        />
        <div className='absolute h-full w-full text-white flex flex-col justify-end pb-14 px-6 z-20 sm:px-12 lg:px-28'>
          <h1 className='text-4xl font-bold mb-4 md:text-6xl lg:text-7xl'>{home.title}</h1>
          <p className='text-xl text-gray-100 mb-6 md:text-2xl'>
            {home.description}
          </p>
          <SocialIcons color='text-white' hoverColor='text-gray-300' />
        </div>
      </div>
    </div>
  )
}

export default Hero
