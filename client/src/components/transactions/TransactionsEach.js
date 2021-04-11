import DataTable from '../table/DataTable'
import DataRow from '../table/DataRow'

function TransactionsEach({data}) {
    return (
        <DataTable
            headings={['Date', 'Amount', 'Points Added', 'Points Total']}
        >
            {data.map((t, i) => (
                <DataRow
                    key={t.id}
                    idx={i}
                    cells={[t.date, `$${t.amount}`, t.points, t.runningTotal]}
                />
            ))}
        </DataTable>
    )
}

export default TransactionsEach