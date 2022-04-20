import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UIButton from "../UI/UIButton/UIButton";
import UIInput from "../UI/UIInput/UIInput";
import UITextarea from "../UI/UITextarea/UITextarea";
import ModalWindow from "../UI/ModalWindow/ModalWindow";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { editPost, deletePost } from "../../redux/posts/postsSlice";

export default function PostAddForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { posts } = useSelector((reducer) => reducer.main);

	// Только для редактирования
	const { postId } = useParams();
	const postToEdit = posts.filter((post) => post.id === postId)[0];

	// Двустороннее связывание
	const [title, setTitle] = useState(postToEdit?.title || "");
	const [content, setContent] = useState(postToEdit?.content || "");

	// Переменная для модального окна
	const [modalActive, setModalActive] = useState(false);

	const goBack = () => {
		navigate(-1);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const editedPost = {
			id: postId,
			title,
			content,
		};
		dispatch(editPost(editedPost));
		goBack();
	};

	const handleDelete = () => {
		setModalActive(true);
	};

	return (
		<>
			<form className="post post__contatiner" onSubmit={handleSubmit}>
				<UIButton onClick={goBack} className="post__back">
					Назад
				</UIButton>
				<h3 className="text-overflow">Запись: {postToEdit?.title}</h3>
				<UIInput
					onInput={(e) => setTitle(e.target.value)}
					value={title}
					placeholder="Введите название"
				></UIInput>
				<UITextarea
					onInput={(e) => setContent(e.target.value)}
					value={content}
					placeholder="Введите текст"
				></UITextarea>
				<div className="menu">
					<UIButton appearance="danger" onClick={handleDelete}>
						Удалить
					</UIButton>
					<UIButton type="submit">Сохранить</UIButton>
				</div>
			</form>
			<ModalWindow active={modalActive} setActive={setModalActive}>
				<div className="modal__delete">
					<h2>Вы действительно хотите удалить пост?</h2>
					<div className="menu">
						<UIButton onClick={() => setModalActive(false)}>Отмена</UIButton>
						<UIButton
							onClick={() => {
								dispatch(deletePost(postId));
								setModalActive(false);
								goBack();
							}}
							appearance="danger"
						>
							Да
						</UIButton>
					</div>
				</div>
			</ModalWindow>
		</>
	);
}
