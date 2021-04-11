import { useState, useEffect } from 'react'

import DataTable from './table/DataTable'
import DataRow from './table/DataRow'
import './CustomerTable.css'
import useModalContext from '../hooks/useModalContext';
import Spinner from './spinner/Spinner';
import useFetch from '../hooks/useFetch';

function CustomerTable() {
    const [ customers, setCustomers ] = useState([]);
    const { toggleModal, setSelectedCustomer } = useModalContext();
    const { loading, error, fetchData } = useFetch()

    function handleClick(e) {
        const row = e.target.closest('.table-row');
        if (row) {
            const id = parseInt(row.id.split(' ')[1])
            const cus = customers.find(c => c.id === id)
            setSelectedCustomer(cus)
            toggleModal()
        }
    }

    useEffect(() => {
        fetchData('/customers', data => setCustomers(data))
    }, [])

    return (
        <div className="customer-table">
            <h1 className="customer-table__title mb-3">Customer List</h1>
            <DataTable
                headings={['ID','Name','Phone']}
                onClick={handleClick}
            >
                {customers.length && customers.map((cus, i) => (
                    <DataRow 
                        key={cus.id}
                        id={`customer ${cus.id}`}
                        idx={i}
                        cells={[cus.id, `${cus.firstName} ${cus.lastName}`, cus.phone]}
                    />
                ))}
            </DataTable>
            {loading && <Spinner />}
        </div>
    )
}

export default CustomerTable