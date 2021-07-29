import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { operacionAction } from '../../../application/actions/OperacionAction'
import Header from "../../components/Header";


const Operacion = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const operaciones = () => dispatch(operacionAction());
        operaciones();
    }, [dispatch]);


    const operaciones = useSelector((state) => state.operaciones.operaciones)

    return (
        <div>

            <Header />
            <br />
            <br />
            <br />
            <div className="container-fluid">
                <table className="table table-striped border">
                    <thead className="table bg-dark table-dark">
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Lider</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">País</th>
                            <th scope="col">Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {operaciones.length === 0
                            ? <h5>No hay operaciones</h5>
                            : operaciones.map((operacion) => (
                                <tr>
                                    <td>{operacion.nombre}</td>
                                    <td>{operacion.lider.nombre}</td>
                                    <td>{operacion.descripcion}</td>
                                    <td>{operacion.pais}</td>
                                    <td>
                                        <button className="btn btn-info">Editar</button>
                                        <button className="btn btn-danger">Borrar</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Operacion;