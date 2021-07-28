import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { soldierAction } from '../../../application/actions/SoldierAction'
import Header from "../../components/Header";
import ModalGlobal from '../../components/ModalGlobal'

import { nameEditor } from '../utils';
import { Button } from 'react-bootstrap';


const Militar = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const militares = () => dispatch(soldierAction());
        militares();
    }, [dispatch]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const soldiers = useSelector((state) => state.soldiers.soldier)

    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <div className="container-fluid">
                <Button variant="primary" onClick={handleShow}>
                    Crear Militar
                </Button>
                <ModalGlobal handleClose={handleClose} show={show} showData={false} />
                <table className="table table-striped border">
                    <thead className="table bg-dark table-dark">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Cédula</th>
                            <th scope="col">Email</th>
                            <th scope="col">Nacionalidad</th>
                            <th scope="col">Género</th>
                            <th scope="col">Edad</th>
                            <th scope="col">Autoridad</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {soldiers.length === 0
                            ? <h5>No hay militares</h5>
                            : soldiers.map((soldier) => (
                                <tr>
                                    <td>{nameEditor(soldier?.nombre)}</td>
                                    <td>{soldier.cc}</td>
                                    <td>{soldier.email}</td>
                                    <td>{nameEditor(soldier?.nacionalidad)}</td>
                                    <td>{soldier?.genero?.toUpperCase()}</td>
                                    <td>{soldier.edad}</td>
                                    <td>{nameEditor(soldier?.autoridad)}</td>
                                    <td>{soldier.activo}</td>
                                    <td>
                                        <button className="btn btn-info">Editar</button>
                                        <button className="btn btn-danger">Borrar</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Militar;