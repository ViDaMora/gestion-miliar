import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteVehicleAction, getVehiculos } from '../../../application/actions/VehiculoActions';
import Header from "../../components/Header";

import { Card, Button } from "react-bootstrap";
import ModalGlobal from "../../components/ModalGlobal";

const Vehiculo = () => {
    const vehiculos = useSelector((state) => state.vehiculos.vehiculos)
    const dispatch = useDispatch();

    useEffect(() => {
        const vehiculos = () => dispatch(getVehiculos());
        vehiculos();
    }, [dispatch]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = () => {
        handleShow()
    }

    const deleteVehicle = async (id) => {
        dispatch(deleteVehicleAction(id))
    };

    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <div className="container">
                <Button variant="primary" onClick={() => handleClick()}>
                    Crear Vehículo
                </Button>
                <ModalGlobal handleClose={handleClose} show={show} showVehiculo={true} />
                <div className="row">
                    {vehiculos?.length === 0
                        ? <h5>No hay vehículos</h5>
                        : vehiculos.map((vehiculo) => (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={vehiculo.url} />
                                <Card.Body>
                                    <Card.Title>{vehiculo.tipoVehiculo}</Card.Title>
                                    <Button variant="danger" onClick={()=> deleteVehicle(vehiculo.id)}>Borrar</Button>
                                </Card.Body>
                            </Card>
                        ))}
                </div>
            </div>
        </>
    )
}

export default Vehiculo;