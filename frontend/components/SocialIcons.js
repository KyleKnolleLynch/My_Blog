import { FaCodepen, FaGithub } from 'react-icons/fa'

const SocialIcons = ({ color, hoverColor }) => {
  return (
    <div className={`${color} text-3xl flex space-x-4 lg:text-4xl`}>
      <a
        href='https://github.com/KyleKnolleLynch'
        target='none'
        className={`hover:${hoverColor} transition-colors`}
      >
        <FaGithub />
      </a>
      <a
        href='https://codepen.io/KyleKnolleLynch'
        target='none'
        className={`hover:${hoverColor} transition-colors`}
      >
        <FaCodepen />
      </a>
    </div>
  )
}

export default SocialIcons
