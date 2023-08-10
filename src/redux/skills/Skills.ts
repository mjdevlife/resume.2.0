import defaultState from './defaultState';

const GET_SKILLS = 'RESUME.2.0/src/redux/skills/getSkills';

export const getSkills = () => (
  {
    type: GET_SKILLS,
  }
);

const skillsReducer = (state = defaultState, action: { type: any; }) => {
  switch (action.type) {
    case GET_SKILLS:
      return [
        ...state,
      ];
    default:
      return state;
  }
};

export default skillsReducer;