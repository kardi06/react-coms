import {GoBell, GoCloudDownload, GoDatabase  } from "react-icons/go";
import Button from "../components/Button";

const ButtonPage = () => {
    const handleClick = () => {
        
    }
    return (
        <div>
            <div><Button success rounded outline onClick={handleClick} className="mb-3"><GoBell/>Click Me!</Button></div>
            <div><Button primary rounded onMouseEnter={handleClick}><GoCloudDownload /> Now</Button></div>
            <div><Button secondary><GoDatabase/>Seal the Deal</Button></div>
            <div><Button danger outline>Close Ads</Button></div>
        </div>
    )
}

export default ButtonPage;