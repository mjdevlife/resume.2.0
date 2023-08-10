import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/configureStore';

const Skills = () => {
  const skills = useSelector((state: RootState) => state.skills);
  
  return (
    <div>
        <h1 className='pt-20 text-3xl text-center'>Skills</h1>
        {skills.map( skill => (
            <span key={skill.id} className='pt-20'>{skill.title}</span>
          )
        )
        }
    </div>
  )
};

export default Skills;