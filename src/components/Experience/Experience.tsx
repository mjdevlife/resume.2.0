import React from 'react';

const Experience = () => {
  return (
    <div className='py-20 px-5 flex flex-col gap-10'>
       <p>
          My expertise lies in programming and implementing web-based solutions that
          meet the evolving needs of modern businesses. I have over 8 years of experience in a wide range of technologies,
          including Typescript, JavaScript, React, Ruby on Rails, AWS, GraphQL, and Docker.
          I am passionate about using technology to improve people's lives and am constantly seeking
          new ways to leverage emerging tools and frameworks to create innovative solutions.
          Below are companies I have worked with.
       </p>
       <section className='flex flex-row gap-5 justify-end'>
        <span>Sort by stack:</span>
        <span>Select Comp</span>
       </section>
       <section className='flex flex-col gap-5'>
         <div className='border-2 flex flex-col items-center gap-2 justify-center px-5 rounded-md py-5'>
            <span className='text-xl'>Company Name</span>
            <ul className='flex flex-row gap-2 items-center justify-center border-b-2'>
              <li>Month, Year Started</li>
              <li> - </li>
              <li>Month, Year ended</li>
            </ul>
            <span>Tech Stack used</span>
            <p>
              In here will be a brief about the company.
              This will consist of what the company does, where
              the company is located, why dev felt like the company
              was the right move, what they worked on, and what they
              learnt from being at the company.
            </p>
            {/* 
              This button should lead to modal pop where
              a user can see more about features implemented
            */}
            <button type='button' className='border-2 rounded-md p-2 self-end'>
              View more 
            </button>
         </div>
         <div className='border-2 flex flex-col items-center gap-2 justify-center px-5 rounded-md py-5'>
            <span className='text-xl'>Company Name</span>
            <ul className='flex flex-row gap-2 items-center justify-center border-b-2'>
              <li>Month, Year Started</li>
              <li> - </li>
              <li>Month, Year ended</li>
            </ul>
            <span>Tech Stack used</span>
            <p>
              In here will be a brief about the company.
              This will consist of what the company does, where
              the company is located, why dev felt like the company
              was the right move, what they worked on, and what they
              learnt from being at the company.
            </p>
            {/* 
              This button should lead to modal pop where
              a user can see more about features implemented
            */}
            <button type='button' className='border-2 rounded-md p-2 self-end'>
              View more 
            </button>
         </div>
         <div className='border-2 flex flex-col items-center gap-2 justify-center px-5 rounded-md py-5'>
            <span className='text-xl'>Company Name</span>
            <ul className='flex flex-row gap-2 items-center justify-center border-b-2'>
              <li>Month, Year Started</li>
              <li> - </li>
              <li>Month, Year ended</li>
            </ul>
            <span>Tech Stack used</span>
            <p>
              In here will be a brief about the company.
              This will consist of what the company does, where
              the company is located, why dev felt like the company
              was the right move, what they worked on, and what they
              learnt from being at the company.
            </p>
            {/* 
              This button should lead to modal pop where
              a user can see more about features implemented
            */}
            <button type='button' className='border-2 rounded-md p-2 self-end'>
              View more 
            </button>
         </div>
       </section>
    </div>
  )
}

export default Experience;