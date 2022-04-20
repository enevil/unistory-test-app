import cn from "classnames";

export default function UIInput({ className, children, ...rest }) {
	return <input required className={cn("input", "input__container", className)} {...rest}></input>;
}
