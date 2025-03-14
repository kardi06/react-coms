const Table = ({data, config}) => {
    const rederedHeaders = config.map((column) => {
        return <th key={column.label}>{column.label}</th>
    })
    const rendereRows = data.map((fruit) => {
        return (
            <tr key={fruit.name} className="border-b">
                <td className="p-3">{config[0].render(fruit)}</td>
                <td className="p-3">
                    <div className={`p-3 m-2 ${config[1].render(fruit)}`}></div>
                </td>
                <td className="p-3">{config[2].render(fruit)}</td>
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