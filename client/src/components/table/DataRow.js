import './DataRow.css'

function DataRow({ id, idx=0, cells, onClick }) {
    const rowClass = idx % 2 === 0 ? "" : "table-row--shaded"
    return (
        <tr
            id={id}
            onClick={onClick}
            className={`table-row ${rowClass}`}
        >
            {cells.map(c => <td className="text-center" key={c}>{c}</td>)}
        </tr>
    )
}

export default DataRow