import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/postsSlice";

const rootReducer = combineReducers({
	main: postsReducer,
});

export const store = configureStore({ reducer: rootReducer });
