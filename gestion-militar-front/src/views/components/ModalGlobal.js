import React from 'react';
import { Modal } from 'react-bootstrap';
import MilitarForm from './forms/MilitarForm';

const ModalGlobal = ({ handleClose, show, showData, soldiers, id, showMilitar = false, showVehiculo = false, showPerfil = false }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    {showMilitar && <MilitarForm handleClose={handleClose} soldiers={soldiers} id={id} showData={showData} />}
                    {showVehiculo && <MilitarForm handleClose={handleClose} soldiers={soldiers} id={id} showData={showData} />}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalGlobal;