import { configureStore } from "@reduxjs/toolkit";
import watchReducer from "./features/watch/reducers";
const rootReducer = {
  watches: watchReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
