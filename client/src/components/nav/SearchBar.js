import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { convertToQueryString } from '../../util'

function SearchBar() {
    const [ query, setQuery ] = useState('')
    const history = useHistory();

    const handleChange = e => setQuery(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search?name=${convertToQueryString(query)}`)
        setQuery('');
    }

    return (
        <Form inline onSubmit={handleSubmit}>
            <FormControl 
                value={query}
                type="text" 
                placeholder="Search Customers" 
                onChange={handleChange} 
            />
            <Button type="submit" variant="light" className="ml-1">Search</Button>
        </Form>
    )
}

export default SearchBar