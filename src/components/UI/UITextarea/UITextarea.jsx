import cn from "classnames";

export default function UITextarea({ className, children, ...rest }) {
	return <textarea required className={cn("textarea", "textarea__container", className)} {...rest}></textarea>;
}
