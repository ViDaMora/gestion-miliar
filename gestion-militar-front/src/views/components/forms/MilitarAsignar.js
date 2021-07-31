import React, { useEffect, useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { soldierAction } from '../../../application/actions/SoldierAction'
import { AsignarMilitarAction } from '../../../application/actions/UnidadAction'

const MilitarAsignar = ({ handleClose }) => {

    const dispatch = useDispatch();

    const asignarMilitar = (e, soldier, unidad) => {
        e.preventDefault()
        dispatch(AsignarMilitarAction(unidad.id, soldier.cc))
    }


    useEffect(() => {
        const militares = () => dispatch(soldierAction());
        militares();
    }, [dispatch]);

    const soldiers = useSelector((state) => state.soldiers.soldier)

    const filteredNotActiveSoldiers = () => {
        let notActive = []
        soldiers.forEach(soldier => {
            if (!soldier.activo) {
                notActive.push(soldier)
            }
        })
        return notActive
    }

    const notActive = filteredNotActiveSoldiers()

    return (
        <>
            <Modal.Title>Asignar Militar</Modal.Title>
            <Table striped bordered >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Autoridad</th>
                        <th>Asignar</th>
                    </tr>
                </thead>
                <tbody>
                    {notActive?.length === 0
                        ? <h5>No hay militares</h5>
                        : notActive?.map((soldier) => (
                            <tr>
                                <td>{soldier.nombre}</td>
                                <td>{soldier.autoridad}</td>
                                <Button variant="success" onClick={(e) => asignarMilitar(e, soldier)}>Asignar</Button>
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

export default MilitarAsignar;