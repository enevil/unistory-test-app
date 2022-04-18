import css from "./UITextarea.module.css";
import cn from "classnames";

export default function UITextarea({ className, children, ...rest }) {
	return <textarea className={cn(css.textarea, className)} {...rest}></textarea>;
}
