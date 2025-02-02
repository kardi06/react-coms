import Link from "./Link";

function Sidebar() {
    const links = [
        {label: 'Dropdowns', to: '/'},
        {label: 'Accordions', to: '/accordions'},
        {label: 'Buttons', to: '/buttons'},
    ];

    const renderedLinks = links.map((link)=> {
        return <Link key={link.label} to={link.to}>{link.label}</Link>
    });

    return (
        <div className="sticky top-0  flex flex-col">
            {renderedLinks}
        </div>
    )
}

export default Sidebar;