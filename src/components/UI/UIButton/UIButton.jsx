import css from "./UIButton.module.css";
import cn from "classnames";

export default function UIButton({ className, children, appearance = "primary", ...rest }) {
	return (
		<button
			type="button"
			className={cn(css.btn, className, {
				[css.primary]: appearance === "primary",
				[css.danger]: appearance === "danger",
			})}
			{...rest}
		>
			{children}
		</button>
	);
}
