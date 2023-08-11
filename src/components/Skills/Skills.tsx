import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/configureStore';
import { IconContext } from 'react-icons';
import { BsPatchCheck } from 'react-icons/bs';

const Skills = () => {
  const skills = useSelector((state: RootState) => state.skills);
  
  return (
    <div className='py-20 flex flex-col gap-5 px-5 items-center desktop:px-[10vw]'>
        <h1 className='text-5xl text-center'>Skills</h1>
        <section className='flex flex-col gap-4 desktop:flex-wrap justify-center items-center'>
          {skills.map( skill => (
              <div key={skill.id} className='border-2 flex flex-col justify-center items-center p-5 rounded-lg tablet:max-w-rousel desktop:w-mid desktop:max-h-xl'>
                <span className='text-3xl py-5'>{skill.title}</span>
                 <table>
                   <tbody className='grid grid-cols-2 justify-end'>
                    {skill.skillArray.map(subSkill => (
                    <tr className='flex flex-row items-center'>
                      <td>
                      <IconContext.Provider value={{ size: '1.5em', className: 'global-class-name' }}>
                         <BsPatchCheck />
                      </IconContext.Provider>
                      </td>
                      <td>
                        <p className='text-xl'>
                          {subSkill.skill}
                          <br />
                          <span className='text-lg'>
                          {subSkill.level}
                          </span>
                        </p>
                      </td>
                    </tr>
                    ))}
                   </tbody>
                 </table>
              </div>
            )
          )
          }
        </section>
    </div>
  )
};

export default Skills;