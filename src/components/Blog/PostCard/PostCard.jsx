import { Link } from "react-router-dom";
import UIButton from "../../UI/UIButton/UIButton";

export default function PostCard({ _id, title, content }) {
	return (
		<li className="card card__container">
			<h3 className="text-overflow">{title}</h3>
			<p className="text-overflow card__content">{content}</p>
			<Link to={_id}>
				<UIButton>Перейти</UIButton>
			</Link>
		</li>
	);
}
