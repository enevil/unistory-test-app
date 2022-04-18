import { Link } from "react-router-dom";
import UIButton from "../../UI/UIButton/UIButton";
import css from "./PostCard.module.css";

export default function PostCard({ _id, title, content }) {
	return (
		<div className={css.container}>
			<h3 className={css.title}>{title}</h3>
			<div className={css.content}>{content}</div>
			<Link to={_id}>
				<UIButton>Перейти</UIButton>
			</Link>
		</div>
	);
}
