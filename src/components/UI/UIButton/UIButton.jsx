import cn from "classnames";

export default function UIButton({ className, children, appearance = "primary", ...rest }) {
	return (
		<button
			type="button"
			className={cn("btn", className, {
				btn_primary: appearance === "primary",
				btn_danger: appearance === "danger",
			})}
			{...rest}
		>
			{children}
		</button>
	);
}
