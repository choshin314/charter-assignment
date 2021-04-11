import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import DataTable from './table/DataTable'
import DataRow from './table/DataRow'
import './CustomerTable.css'
import useModalContext from '../hooks/useModalContext';
import Spinner from './spinner/Spinner';
import useFetch from '../hooks/useFetch';

function CustomerTable() {
    const [ customers, setCustomers ] = useState([]);
    let { search } = useLocation();
    search = search.split('=')[1];
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
        console.log(search)
        const url = search ? `/customers?name=${search}` : '/customers'
        fetchData(url, data => setCustomers(data))
    }, [search])

    return (
        <div className="customer-table">
            <h1 className="customer-table__title mb-3">
                {search ? `Search Results for "${search.replaceAll('+', ' ')}"` : 'Customer List'}
            </h1>
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