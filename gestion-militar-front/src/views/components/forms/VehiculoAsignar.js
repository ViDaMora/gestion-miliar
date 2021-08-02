import React, { useEffect } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AsignarVehiculoAction } from '../../../application/actions/UnidadAction';
import { getVehiculos } from '../../../application/actions/VehiculoActions';

const VehiculoAsignar = ({ handleClose, id }) => {

    const dispatch = useDispatch();

    const asignarVehiculo = async (idVehiculo) => {
        dispatch(AsignarVehiculoAction(id, idVehiculo))
    }

    useEffect(() => {
        const vehiculos = () => dispatch(getVehiculos());
        vehiculos();
    }, [dispatch]);

    const vehiculos = useSelector((state) => state.vehiculos.vehiculos)

    return (

        <>
            <Modal.Title>Asignar Vehículo</Modal.Title>
            <Table striped bordered >
                <thead>
                    <tr>
                        <th>Tipo Vehículo</th>
                        <th>Asignar</th>
                    </tr>
                </thead>
                <tbody>

                    {vehiculos?.length === 0
                        ? <h5>No hay militares</h5>
                        : vehiculos?.map((vehiculo) => (
                            <tr>
                                <td>{vehiculo.tipoVehiculo}</td>
                                <button className="btn btn-success" onClick={() => asignarVehiculo(vehiculo.id)}>Asignar</button>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </>
    );
}

export default VehiculoAsignar;