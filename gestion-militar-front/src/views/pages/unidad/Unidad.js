import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUnidad } from '../../../application/actions/UnidadAction'
import Header from "../../components/Header";


const Unidad = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const unidades = () => dispatch(getUnidad());
        unidades();
    }, [dispatch]);


    const unidades = useSelector((state) => state.unidades.unidades)

    return (
        <>

            <Header />
            <br/>
            <br/>
            <br/>
            <div className="container-fluid">
                <table className="table table-striped border">
                    <thead className="table bg-dark table-dark">
                        <tr>
                            <th scope="col">Tipo Unidad</th>
                            <th scope="col">Encargado</th>
                            <th scope="col">Cantidad Militares</th>
                            <th scope="col">Cantidad Vehículos</th>
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
                                    <td>{unidad.militares.length}</td>
                                    <td>{unidad.vehiculos.length}</td>
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

export default Unidad;