import { configureStore } from '@reduxjs/toolkit';
import watchReducer from './module/watch/reducers';
const rootReducer = {
	watches: watchReducer,
};
const store = configureStore({
	reducer: rootReducer,
});

export default store;
