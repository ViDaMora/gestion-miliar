import React, { useEffect } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { soldierAction } from '../../../application/actions/SoldierAction'

const Encargado = ({ handleClose }) => {

    const dispatch = useDispatch();

    const asignarEncargado = () => {
        handleClose();

    }

    useEffect(() => {
        const militares = () => dispatch(soldierAction());
        militares();
    }, [dispatch]);

    const soldiers = useSelector((state) => state.soldiers.soldier)

    return (
        <>
            <Modal.Title>Asignar Encargado</Modal.Title>
            <Table striped bordered >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Autoridad</th>
                        <th>Asignar</th>
                    </tr>
                </thead>
                <tbody>
                    {soldiers?.length === 0
                        ? <h5>No hay militares</h5>
                        : soldiers?.map((soldier) => (
                            <tr>
                                <td>{soldier.nombre}</td>
                                <td>{soldier.autoridad}</td>
                                <button className="btn btn-success" onClick={() => asignarEncargado(soldier.cc)}>Asignar</button>
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

export default Encargado;