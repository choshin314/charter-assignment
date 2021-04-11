import { useState } from 'react'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TransactionsEach from './TransactionsEach'
import TransactionsMonthly from './TransactionsMonthly'
import './TransactionTabs.css'

function TransactionTabs({data}) {
    const [ activeTab, setActiveTab ] = useState('monthly')
    
    return (
        <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
        >
            <Tab eventKey="monthly" title="By Month">
                <TransactionsMonthly data={data} />
            </Tab>
            <Tab eventKey="each" title="By Transaction">
                <TransactionsEach data={data} />
            </Tab>
        </Tabs>
    )
}

export default TransactionTabs