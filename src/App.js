import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";


function App() {
    return (
        <div>
            <Link to="/accordions">Go to Accordion</Link>
            <Link to="/dropdown">Go to Dropdowns</Link>
            <div>
                <Route path="/accordions">
                    <AccordionPage />
                </Route>
                <Route path="/dropdown">
                    <DropdownPage />
                </Route>
            </div>
        </div>
    );
}

export default App;