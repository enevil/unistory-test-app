import UIButton from "../UI/UIButton/UIButton";
import css from "./ModalWindow.module.css";
import cn from "classnames";

export default function ModalWindow({ onSuccess, active, setActive }) {
	return (
		<div className={cn(css.modal, { [css.active]: active === true })} onClick={() => setActive(false)}>
			<div className={css.content} onClick={(e) => e.stopPropagation()}>
				<h2>Вы действительно хотите удалить пост?</h2>
				<div className={css.menu}>
					<UIButton onClick={() => setActive(false)}>Отмена</UIButton>
					<UIButton
						onClick={() => {
							onSuccess();
							setActive(false);
						}}
						appearance="danger"
					>
						Да
					</UIButton>
				</div>
			</div>
		</div>
	);
}
