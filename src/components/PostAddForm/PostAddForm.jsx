import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppStorage } from "../../Storage";
import UIButton from "../UI/UIButton/UIButton";
import UIInput from "../UI/UIInput/UIInput";
import UITextarea from "../UI/UITextarea/UITextarea";
import ModalWindow from "../ModalWindow/ModalWindow";
import css from "./PostAddForm.module.css";

// Переиспользуемый компонент, в зависимости от пропса edit меняет свое поведение

export default function PostAddForm({ edit }) {
	const navigate = useNavigate();
	const { postsData, addPost, editPost, deletePost } = useContext(AppStorage);

	// Только для редактирования
	const { postId } = useParams();
	const postToEdit = postsData.filter((post) => post.id === postId)[0];

	// Двустороннее связывание
	// Если в режиме edit, то выставляем по дефолту параметры
	const [title, setTitle] = useState(edit ? postToEdit?.title : "");
	const [content, setContent] = useState(edit ? postToEdit?.content : "");

	// Переменная для модального окна
	const [modalActive, setModalActive] = useState(false);

	const goBack = () => {
		navigate(-1);
	};

	const clearInputs = () => {
		setTitle("");
		setContent("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (edit) {
			const editedPost = {
				id: postId,
				title,
				content,
			};
			editPost(editedPost);
			goBack();
			return;
		}

		const post = {
			id: Date.now().toString(),
			title,
			content,
		};
		addPost(post);
		goBack();
	};

	const handleDelete = () => {
		setModalActive(true);
	};

	const handleFinallDelete = () => {
		deletePost(postId);
		goBack();
	};

	return (
		<>
			<form className={css.container} onSubmit={handleSubmit}>
				<UIButton onClick={goBack} className={css.back}>
					Назад
				</UIButton>
				{edit && <h3>Запись: {postToEdit?.title}</h3>}
				<UIInput
					onInput={(e) => setTitle(e.target.value)}
					value={title}
					placeholder={"Введите название"}
				></UIInput>
				<UITextarea
					onInput={(e) => setContent(e.target.value)}
					value={content}
					placeholder="Введите текст"
				></UITextarea>
				<div className={css.menu}>
					{edit ? (
						<UIButton appearance="danger" onClick={handleDelete}>
							Удалить
						</UIButton>
					) : (
						<UIButton onClick={clearInputs}>Очистить</UIButton>
					)}

					<UIButton type="submit">Сохранить</UIButton>
				</div>
			</form>
			<ModalWindow active={modalActive} setActive={setModalActive} onSuccess={handleFinallDelete} />
		</>
	);
}
