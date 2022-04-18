import React, { useState } from "react";
export const AppStorage = React.createContext();

export default function Storage({ children, ...rest }) {
	const [postsData, setPostData] = useState([]);

	const addPost = (post) => {
		setPostData((prev) => [post, ...prev]);
	};

	const editPost = (editedPost) => {
		setPostData((prev) => [editedPost, ...prev.filter((post) => post.id !== editedPost.id)]);
	};

	const deletePost = (postId) => {
		setPostData((prev) => prev.filter((post) => post.id !== postId));
	};

	return (
		<AppStorage.Provider value={{ postsData, addPost, editPost, deletePost }} {...rest}>
			{children}
		</AppStorage.Provider>
	);
}
