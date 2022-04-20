import cn from "classnames";

export default function ModalWindow({ active, setActive, children }) {
	return (
		<div className={cn("modal", { modal_active: active === true })} onClick={() => setActive(false)}>
			<div className={"modal__content"} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
}
