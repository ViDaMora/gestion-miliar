import React from 'react';
import { Modal } from 'react-bootstrap';
import MilitarForm from './forms/MilitarForm';
import VehiculoForm from './forms/VehiculoForm';

const ModalGlobal = ({ handleClose, show, showData, soldiers, vehiculos, id, showMilitar = false, showVehiculo = false, showPerfil = false }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    {showMilitar && <MilitarForm handleClose={handleClose} soldiers={soldiers} id={id} showData={showData} />}
                    {showVehiculo && <VehiculoForm handleClose={handleClose} vehiculos={vehiculos} showData={showData} />}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalGlobal;