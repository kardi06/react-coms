import Accordion from "./components/Accordion";

const App = () => {
    const items = [
        {   
            id: 'ckkc25',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you like. We like to use it on projects with large-scale UIs.'
        },
        {
            id: 'ckkc2502',
            label: 'Can I use javascript on a project?',
            content: 'You can use javascript on any project you like. We like to use it on projects with large-scale UIs.'
        },
        {
            id: 'ckkc25020420',
            label: 'Can I use CSS on a project?',
            content: 'You can use CSS on any project you like. We like to use it on projects with large-scale UIs.'
        }
    ]
    return (
        <Accordion items={items}/>
    )
}

export default App;