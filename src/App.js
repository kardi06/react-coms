import Button from "./Button";
import PropTypes from "prop-types";
const App = () => {
    return (
        <div>
            <div><Button success rounded outline>Click Me!</Button></div>
            <div><Button primary rounded>Buy Now</Button></div>
            <div><Button secondary>Seal the Deal</Button></div>
            <div><Button danger outline>Close Ads</Button></div>
        </div>
    )
}

Button.PropTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger})=>{
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success) 
            + Number(!!warning)
            + Number(!!danger);
        
        if(count > 1){
            throw new Error("Only one of primary, secondary, success, warning, danger can be true");
        }
        
    }
};
export default App;