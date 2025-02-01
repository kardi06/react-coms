import { useContext } from "react";
import classNames from "classnames";
import  NavigationContext from "../context/navigation";

const Link = ({to, children}) => {
    const {navigate} = useContext(NavigationContext);
    const handleClick = (event) => {
        if(event.metaKey || event.ctrlKey) return;
        event.preventDefault();
        navigate(to);
    };
    
    const classes = classNames('text-blue-500');
    return (
        <a className={classes} href={to} onClick={handleClick}>{children}</a>
    );
}

export default Link;