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
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cédula</th>
                        <th scope="col">Nacionalidad</th>
                        <th scope="col">Género</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Autoridad</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {operaciones.length === 0
                        ? <h5>No hay operaciones</h5>
                        : operaciones.map((operacion) => (
                            <tr>
                                <td>{operacion.nombre}</td>
                                <td>{operacion.cc}</td>
                                <td>{operacion.nacionalidad}</td>
                                <td>{operacion.genero}</td>
                                <td>{operacion.edad}</td>
                                <td>{operacion.autoridad}</td>
                                <td>{operacion.activo}</td>
                                <td>
                                    <button className="btn btn-info">Editar</button>
                                    <button className="btn btn-danger">Borrar</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Operacion;