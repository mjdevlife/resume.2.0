import React from 'react';
import {
    FaGithub, FaInstagram, FaLinkedinIn, FaTwitter,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';

const LandingPage = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-m pt-10 px-5 tablet:px-[12vw] desktop:px-[15vw]'>
        <span className='text-5xl pt-[20vh] self-start'>
        Welcome.
        <br />
        Glad you to see you!</span>
        <p className='text-3xl pt-[5vh]'>
          I’m a software developer! I can help you build a product,
          feature or website Look through some of my work and experience!
          If you like what you see and have a project you need coded,
          don’t hesitate to contact me.
        </p>
        <span className='py-3 self-start'>LET'S CONNECT</span>
        <IconContext.Provider value={{
          size: '2em',
          className: 'global-class-name home-sm-icons',
        }}
        >
        <ul className="flex flex-row self-start gap-4" data-testid="social-media-icons">
          <li>
            <a href="https://github.com/Haywayaheadshot" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/abubakar-ummar/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/haywayalive" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/haywayaofficial/?next=%2Fhaywayaofficial%2F&hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
      </ul>
    </IconContext.Provider>
    </div>
  )
}

export default LandingPage