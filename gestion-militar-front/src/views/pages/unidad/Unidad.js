import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUnidad } from '../../../application/actions/UnidadAction'
import Header from "../../components/Header";
import ModalGlobal from "../../components/ModalGlobal";
import { soldierAction } from '../../../application/actions/SoldierAction'


const Unidad = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const unidades = () => dispatch(getUnidad());
        unidades();
        const militares = () => dispatch(soldierAction());
        militares();
    }, [dispatch]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Modal militar
    const [selectedId, setSelectedId] = useState(null);
    const [showMilitarTable, setShowMilitarTable] = useState(false);
    const handleClickMilitar = (id) => {
        setSelectedId(id)
        setShowMilitarTable(true)
        setShowVehiculoTable(false)
        setShowCreateUnidad(false)
        handleShow()
    }

    //Modal vehiculo
    const [showVehiculoTable, setShowVehiculoTable] = useState(false);
    const handleClickVehiculo = () => {
        setShowVehiculoTable(true)
        setShowMilitarTable(false)
        setShowCreateUnidad(false)
        handleShow()
    }

    //Modal Crear
    const [showCreateUnidad, setShowCreateUnidad] = useState(false);
    const handleClick = () => {
        setShowCreateUnidad(true)
        setShowVehiculoTable(false)
        setShowMilitarTable(false)
        handleShow()
    }

    const unidades = useSelector((state) => state.unidades.unidades)
    const soldiers = useSelector((state) => state.soldiers.soldier)

    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <div className="container-fluid">
                <Button variant="primary" onClick={() => handleClick()}>
                    Crear Unidad
                </Button>
                <ModalGlobal handleClose={handleClose} show={show} soldiers={soldiers} id={selectedId}
                    showMilitarTable={showMilitarTable} showVehiculoTable={showVehiculoTable}
                    showCreateUnidad={showCreateUnidad} />
                <table className="table table-striped border">
                    <thead className="table bg-dark table-dark">
                        <tr>
                            <th scope="col">Tipo Unidad</th>
                            <th scope="col">Encargado</th>
                            <th scope="col">Autoridad Encargado</th>
                            <th scope="col">Cantidad Militares</th>
                            <th scope="col">Cantidad Vehículos</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {unidades.length === 0
                            ? <h5>No hay unidades</h5>
                            : unidades.map((unidad) => (
                                <tr>
                                    <td>{unidad.tipoUnidad}</td>
                                    <td>{unidad.encargado.nombre}</td>
                                    <td>{unidad.encargado.autoridad}</td>
                                    <td>{unidad.militares.length}</td>
                                    <td>{unidad.vehiculos.length}</td>
                                    <td>{unidad.asignada ? "Asignada" : "Sin Asignar"}</td>
                                    <td>
                                        <button className="btn btn-warning" onClick={() => handleClickMilitar(unidad.id)}>Asignar Militar</button>
                                        <button className="btn btn-info" onClick={() => handleClickVehiculo()}>Asignar Vehiculo</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Unidad;