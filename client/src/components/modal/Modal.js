import ModalBS from 'react-bootstrap/Modal'
import './Modal.css'

function Modal ({ show, toggle, size, title, children }) {
    return (
        <ModalBS
            show={show}
            onHide={toggle}
            size={size || "lg"}
        >
            <ModalBS.Header closeButton>
                <ModalBS.Title>{title}</ModalBS.Title>
            </ModalBS.Header>
            <ModalBS.Body>
                {children}
            </ModalBS.Body>
        </ModalBS>
    )
}

export default Modal