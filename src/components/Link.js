import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

const Link = ({to, children}) => {
    const {navigate} = useNavigation();
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