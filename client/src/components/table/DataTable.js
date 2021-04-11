import Table from 'react-bootstrap/Table'
import './DataTable.css'

function DataTable({ headings, onClick, children }) {
    return (
        <Table className="d-table" onClick={onClick}>
            <thead className="d-table__head text-center">
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