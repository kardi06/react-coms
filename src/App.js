import {GoBell, GoCloudDownload, GoDatabase  } from "react-icons/go";
import Button from "./Button";

const App = () => {
    const handleClick = () => {
        console.log('Button Clicked!');
    }
    return (
        <div>
            <div><Button success rounded outline onClick={handleClick}><GoBell/>Click Me!</Button></div>
            <div><Button primary rounded onMouseEnter={handleClick}><GoCloudDownload /> Now</Button></div>
            <div><Button secondary><GoDatabase/>Seal the Deal</Button></div>
            <div><Button danger outline>Close Ads</Button></div>
        </div>
    )
}

export default App;