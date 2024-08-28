import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const modalStyles = {
    backgroundColor: '#1e1f21',
    color: 'white',
    border: 'none',
};

const headerFooterStyles = {
    backgroundColor: '#1e1f21',
    color: 'white',
    border: 'none',
};

const ModalAlert = ({ show, handleClose }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            dialogClassName="custom-modal"
            style={{ color: 'white' }}
        >
            <Modal.Header closeButton style={headerFooterStyles}>
                <Modal.Title>Profile Updated!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Your profile has been successfully updated.
            </Modal.Body>
            <Modal.Footer style={headerFooterStyles}>
                <Button variant="primary" onClick={handleClose} style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalAlert;
