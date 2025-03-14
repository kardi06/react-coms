const Table = ({data, config}) => {
    const rederedHeaders = config.map((column) => {
        return <th key={column.label}>{column.label}</th>
    })
    const rendereRows = data.map((fruit) => {
        return (
            <tr key={fruit.name} className="border-b">
                <td className="p-3">{fruit.name}</td>
                <td className="p-3">
                    <div className={`p-3 m-2 ${fruit.color}`}></div>
                </td>
                <td className="p-3">{fruit.score}</td>
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