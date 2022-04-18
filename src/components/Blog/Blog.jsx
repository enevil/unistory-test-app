import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppStorage } from "../../Storage";
import UIButton from "../UI/UIButton/UIButton";
import css from "./Blog.module.css";
import PostCard from "./PostCard/PostCard";

export default function Blog() {
	const { postsData } = useContext(AppStorage);
	return (
		<div className={css.container}>
			<h1>Блог</h1>
			{postsData.length ? (
				<div className={css.posts}>
					{postsData.map((post) => (
						<PostCard key={post.id} _id={post.id} title={post.title} content={post.content} />
					))}
				</div>
			) : (
				<h2 className={css.empty}> Пока не добавлено ни одного поста </h2>
			)}

			<footer className={css.footer}>
				<Link to="add">
					<UIButton>+ Добавить</UIButton>
				</Link>
			</footer>
		</div>
	);
}
