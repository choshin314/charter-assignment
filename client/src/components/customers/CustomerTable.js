import { useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

import useModalContext from '../../hooks/useModalContext'
import useFetch from '../../hooks/useFetch'
import DataTable from '../table/DataTable'
import DataRow from '../table/DataRow'
import Spinner from '../spinner/Spinner'
import BottomObserver from '../observer/BottomObserver'
import './CustomerTable.css'

const LIMIT = 20;

function CustomerTable() {
    const [ customers, setCustomers ] = useState([]);
    const [ customerIds, setCustomerIds ] = useState(new Set());
    const [ endOfList, setEndOfList ] = useState(true);

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

    const loadMoreCustomers = useCallback(() => {
        if (customers.length && !endOfList) {
            const url = search ? 
                `/api/customers?name=${search}&offset=${customers.length}` : 
                `/api/customers?offset=${customers.length}`

            fetchData(url, data => {
                const updatedIds = new Set(customerIds)
                data = data.filter(cus => !updatedIds.has(cus.id)) //check duplicates
                data.forEach(cus => updatedIds.add(cus.id)) 
                setCustomers(prev => [...prev, ...data ]) //update customerList & customerIds
                setCustomerIds(updatedIds)
                if (data.length < LIMIT) setEndOfList(true)
            })
        }
    }, [ search, customerIds, customers.length, endOfList, fetchData ])

    useEffect(() => {
        const url = search ? `/api/customers?name=${search}` : '/api/customers'
        fetchData(url, data => {
            setCustomerIds(new Set(data.map(d => d.id)))
            setCustomers(data)
            if (data.length === LIMIT) setEndOfList(false)
        })
    }, [search, fetchData])

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
            <BottomObserver 
                onIntersect={loadMoreCustomers}
            />
            {loading && <Spinner />}
            {error && <div className="mx-auto p-3 text-center">Uh oh, an error has occured: {error}</div>}
        </div>
    )
}

export default CustomerTable