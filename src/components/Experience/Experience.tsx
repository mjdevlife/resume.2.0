import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/configureStore';

const Experience = () => {
  const experiences = useSelector((state: RootState) => state.experiences);
  
  const handleModalPop = () => {
    const [showModal, setShowModal] = useState(false);

  };

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
          {experiences.map((experience) => (
            <div key={experience.id} className='border-2 flex flex-col items-center gap-2 justify-center px-5 rounded-md py-5'>
              <span className='text-xl'>{experience.companyName.toUpperCase()}, <i className='text-sm'>Remote</i></span>
              <ul className='flex flex-row gap-2 items-center justify-center border-b-2'>
                <li>{experience.employmentSpan[0].toUpperCase()}</li>
                <li> - </li>
                <li>{experience.employmentSpan[1].toUpperCase()}</li>
              </ul>
              <span className='underline'>{experience.employmentStack}</span>
              <p>{experience.projectBrief[0].slice(0, 300)}...</p>
              <button type='button' className='border-2 rounded-md p-2 self-end' onClick={() => handleModalPop()}>
                View more 
              </button>
            </div>
          ))}
       </section>
    </div>
  )
}

export default Experience;