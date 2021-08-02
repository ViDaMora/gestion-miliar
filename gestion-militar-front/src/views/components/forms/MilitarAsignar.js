import React, { useEffect } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { soldierAction } from '../../../application/actions/SoldierAction'
import { AsignarMilitarAction } from '../../../application/actions/UnidadAction'

const MilitarAsignar = ({ handleClose, id }) => {

    const dispatch = useDispatch();

    const asignarMilitar = async (cc) => {
        dispatch(AsignarMilitarAction(id, cc))
    }

    useEffect(() => {
        const militares = () => dispatch(soldierAction());
        militares();
    }, [dispatch]);

    const soldiers = useSelector((state) => state.soldiers.soldier)

    //Filtar los disponibles
    const filteredNotActiveSoldiers = () => {
        let notActive = []
        soldiers.forEach(soldier => {
            if (!soldier.activo) {
                notActive.push(soldier)
            }
        })
        return notActive
    }

    //Const activo
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
                        ? <h5>No hay militares disponibles</h5>
                        : notActive?.map((soldier) => (
                            <tr>
                                <td>{soldier.nombre}</td>
                                <td>{soldier.autoridad}</td>
                                <Button variant="success" onClick={() => asignarMilitar(soldier.cc)}>Asignar</Button>
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