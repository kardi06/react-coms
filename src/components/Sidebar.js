import Link from "./Link";

function Sidebar() {
    const links = [
        {label: 'Dropdowns', to: '/'},
        {label: 'Accordions', to: '/accordions'},
        {label: 'Buttons', to: '/buttons'},
    ];

    const renderedLinks = links.map((link)=> {
        return <Link key={link.label} to={link.to}c className="mb-3" activeClassName="font-bold border-l-4 border-blue-500 pl-2">{link.label}</Link>
    });

    return (
        <div className="sticky top-0  flex flex-col items-start">
            {renderedLinks}
        </div>
    )
}

export default Sidebar;