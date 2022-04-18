import css from "./UIInput.module.css";
import cn from "classnames";

export default function UIInput({ className, children, ...rest }) {
	return <input className={cn(css.input, className)} {...rest}></input>;
}
