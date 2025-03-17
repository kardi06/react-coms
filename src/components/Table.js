const Table = ({data, config}) => {
    const rederedHeaders = config.map((column) => {
        return <th key={column.label}>{column.label}</th>
    })
    const rendereRows = data.map((fruit) => {
        const renderedCells = config.map((column) => {
            return <td className="p-2" key={column.label}>{column.render(fruit)}</td>
        })
        return (
            <tr key={fruit.name} className="border-b">
                {renderedCells}
            </tr>
        )
    })
    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {rederedHeaders}
                </tr>
            </thead>
            <tbody>
                {rendereRows}
            </tbody>
        </table>
    )
}

export default Table;