import { createContext, useState } from 'react'

const ModalContext = createContext();

function ModalContextProvider({children}) {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ selectedCustomer, setSelectedCustomer ] = useState(null);

    const toggleModal = () => {
        setIsOpen(prev => !prev)
    }
    
    return (
        <ModalContext.Provider value={{ 
            isOpen, 
            toggleModal, 
            selectedCustomer,
            setSelectedCustomer
        }} >
            {children}
        </ModalContext.Provider> 
    )
}

export { ModalContext, ModalContextProvider };