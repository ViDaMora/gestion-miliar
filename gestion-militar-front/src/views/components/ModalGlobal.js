import React from 'react';
import { Modal } from 'react-bootstrap';
import Encargado from './forms/Encargado';
import MilitarAsignar from './forms/MilitarAsignar';
import MilitarForm from './forms/MilitarForm';
import VehiculoAsignar from './forms/VehiculoAsignar';
import VehiculoForm from './forms/VehiculoForm';

const ModalGlobal = ({ handleClose, show, showData, soldiers, vehiculos, id, showMilitar = false,
    showVehiculo = false, showPerfil = false, showMilitarTable = false, showVehiculoTable = false, showEncargado = false }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    {showMilitar && <MilitarForm handleClose={handleClose} soldiers={soldiers} id={id} showData={showData} />}
                    {showVehiculo && <VehiculoForm handleClose={handleClose} vehiculos={vehiculos} showData={showData} />}
                    {showMilitarTable && <MilitarAsignar handleClose={handleClose} />}
                    {showVehiculoTable && <VehiculoAsignar handleClose={handleClose} />}
                    {showEncargado && <Encargado handleClose={handleClose} />}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalGlobal;