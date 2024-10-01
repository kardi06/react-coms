import Button from "./Button";

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

export default App;