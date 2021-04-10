import Table from 'react-bootstrap/Table'
import './DataTable.css'

function DataTable({ headings, children }) {
    return (
        <div className="table-wrapper">
            <Table>
                <thead>
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
        </div>
    )
}

export default DataTable