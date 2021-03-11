import { FaCodepen, FaGithub } from 'react-icons/fa'

const SocialIcons = ({ color, hoverColor }) => {
  return (
    <div className={`${color} text-3xl flex space-x-4`}>
      <a
        href='https://github.com/KyleKnolleLynch'
        target='none'
        className={`hover:${hoverColor} transition-colors duration-500`}
      >
        <FaGithub />
        <span className='sr-only'>Visit my Github</span>
      </a>
      <a
        href='https://codepen.io/KyleKnolleLynch'
        target='none'
        className={`hover:${hoverColor} transition-colors duration-500`}
      >
        <FaCodepen />
        <span className='sr-only'>Visit my Codepen</span>
      </a>
    </div>
  )
}

export default SocialIcons
