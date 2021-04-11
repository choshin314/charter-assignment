import { useEffect, useState } from 'react'

import useModalContext from '../../hooks/useModalContext'
import useFetch from '../../hooks/useFetch'
import Modal from '../modal/Modal'
import TransactionTabs from './TransactionTabs'
import Spinner from '../spinner/Spinner'


function TransactionModal() {
    const { toggleModal, isOpen, selectedCustomer: customer } = useModalContext();
    const [ transactions, setTransactions ] = useState(null)
    const { loading, error, fetchData } = useFetch();

    useEffect(() => {
        if(customer) {
            fetchData(`/api/transactions?customer=${customer.id}`, (data) => {
                setTransactions(data)
            })
        }
        return () => setTransactions(null)
    }, [customer, fetchData])

    return (
        <Modal
            show={isOpen}
            toggle={toggleModal}
            size="lg"
            title={customer && `${customer.firstName} ${customer.lastName}'s Transactions & Points`}
        >
            {loading && <Spinner />}
            {error && <div className="mx-auto p-3 text-center">Uh oh, an error has occured: {error}</div>}
            {transactions && <TransactionTabs data={transactions} />}
        </Modal>
    )
}

export default TransactionModal