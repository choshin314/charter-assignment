import Table from 'react-bootstrap/Table'
import './DataTable.css'

function DataTable({ headings, onClick, children }) {
    return (
        <Table className="d-table text-center" onClick={onClick}>
            <thead className="d-table__head">
                <tr>
                    {headings.map(h => (
                        <th key={h}>
                            {h}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </Table>
    )
}

export default DataTable