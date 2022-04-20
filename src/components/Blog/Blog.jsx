import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import UIButton from "../UI/UIButton/UIButton";
import PostCard from "./PostCard/PostCard";
import ModalWindow from "../UI/ModalWindow/ModalWindow";
import UIInput from "../UI/UIInput/UIInput";
import UITextarea from "../UI/UITextarea/UITextarea";
import { addPost } from "../../redux/posts/postsSlice";

export default function Blog() {
	const dispatch = useDispatch();
	const { posts } = useSelector((reducer) => reducer.main);

	const [activeModal, setActiveModal] = useState(false);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const clearInputs = () => {
		setTitle("");
		setContent("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		clearInputs();

		const post = {
			id: Date.now().toString(),
			title,
			content,
		};
		dispatch(addPost(post));
		setActiveModal(false);
	};

	return (
		<>
			<div className="blog blog__container">
				<h1>Блог</h1>
				{posts.length ? (
					<ul className="blog__posts posts">
						{posts.map((post) => (
							<PostCard key={post.id} _id={post.id} title={post.title} content={post.content} />
						))}
					</ul>
				) : (
					<h2 className="blog__empty"> Пока не добавлено ни одного поста </h2>
				)}

				<footer className="blog__footer">
					<UIButton onClick={() => setActiveModal(true)}>+ Добавить</UIButton>
				</footer>
			</div>

			<ModalWindow active={activeModal} setActive={setActiveModal}>
				<form className="modal__form" onSubmit={handleSubmit}>
					<UIInput onInput={(e) => setTitle(e.target.value)} value={title} placeholder={"Введите название"} />
					<UITextarea
						onInput={(e) => setContent(e.target.value)}
						value={content}
						placeholder="Введите текст"
					/>
					<div className="menu">
						<UIButton
							onClick={() => {
								clearInputs();
								setActiveModal(false);
							}}
						>
							Отмена
						</UIButton>

						<UIButton type="submit">Сохранить</UIButton>
					</div>
				</form>
			</ModalWindow>
		</>
	);
}
