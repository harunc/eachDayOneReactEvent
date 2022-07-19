import React from 'react'
import {AiOutlineLinkedin,AiOutlineGithub} from 'react-icons/ai'
import {TbZodiacScorpio} from 'react-icons/tb'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target='_blank'><AiOutlineLinkedin/></a>
        <a href="https://github.com" target='_blank'><AiOutlineGithub/></a>
        <a href="https://dribbble.com" target='_blank'><TbZodiacScorpio/></a>
    </div>
  )
}

export default HeaderSocials