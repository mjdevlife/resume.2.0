import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from './skills/Skills';
import { createLogger } from "redux-logger";

const logger = createLogger();

const store = configureStore({
  reducer: {
    skills: skillsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export type RootState = ReturnType<typeof store.getState>;
export default store;