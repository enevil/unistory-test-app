import { createSlice } from "@reduxjs/toolkit";

const initialState = { posts: [] };

const postsSlice = createSlice({
	initialState,
	name: "posts",
	reducers: {
		addPost(state, action) {
			state.posts = [action.payload, ...state.posts];
		},
		deletePost(state, action) {
			state.posts = state.posts.filter((post) => post.id !== action.payload);
		},
		editPost(state, action) {
			state.posts = [action.payload, ...state.posts.filter((post) => post.id !== action.payload.id)];
		},
	},
});

export default postsSlice.reducer;
export const { addPost, deletePost, editPost } = postsSlice.actions;
