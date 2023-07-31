import React, { useState } from 'react';
import { Spiral as Hamburger } from 'hamburger-react';

const NavBar = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className='bg-primary fixed left-0 right-0 flex flex-row justify-between items-center px-5 py-3 tablet:px-[8vw] desktop:py-5 desktop:px-[10vw] border-b-2 border-b-line-t w-full z-40'>
        <span>GODSWIL ONWUCHUKWA</span>
        <span className='desktop:hidden'>
          <Hamburger
            direction="right"
            easing="ease-in"
            label="Show menu"
            distance="lg"
            toggled={open}
            size={20}
            toggle={setOpen}
            color="#484848"
          />
          {open && (
            <ul className='flex flex-col gap-2 fixed top-[8.5vh] border-2 rounded-md py-2 px-4 right-0 h-full bg-primary'>
                <li>Projects</li>
                <li>Skills</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
          )}
        </span>
        <ul className='hidden desktop:flex flex-row gap-2'>
            <li className='border-r-2 pr-2'>Projects</li>
            <li className='border-r-2 pr-2'>Skills</li>
            <li className='border-r-2 pr-2'>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default NavBar;