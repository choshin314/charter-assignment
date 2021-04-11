import DataTable from '../table/DataTable'
import DataRow from '../table/DataRow'

function TransactionsMonthly({ data }) {
    function convertToMonthly(data) {
        const months = new Set()
        const converted = []
        let date;
        let runningTotal = 0;
        data.forEach(t => {
            date = t.date.split('/')
            date = `${date[0]}/${date[2]}`
            runningTotal += t.points; 
            if (!months.has(date)) {
                months.add(date);
                converted.push({ date, points: t.points, amount: t.amount, runningTotal });
            } else {
                converted[converted.length-1].points += t.points;
                converted[converted.length-1].runningTotal = runningTotal;
                converted[converted.length-1].amount += t.amount;
            }
        })
        return converted;
    }
    const converted = convertToMonthly(data)
    return (
        <DataTable
            headings={['Month', 'Amount', 'Points Added', 'Points Total']}
        >
            {converted.map((t, i) => (
                <DataRow
                    key={t.id}
                    idx={i}
                    cells={[t.date, `$${t.amount.toFixed(2)}`, t.points, t.runningTotal]}
                />
            ))}
        </DataTable>
    )
}

export default TransactionsMonthly