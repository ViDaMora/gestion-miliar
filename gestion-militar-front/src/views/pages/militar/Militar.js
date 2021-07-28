import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { soldierAction } from '../../../application/actions/SoldierAction'
import Header from "../../components/Header";


const Militar = () => {

    const dispatch = useDispatch();

    const listSoldier = () => {
        dispatch(soldierAction());
    }


    useEffect(() => {
        const militares = () => dispatch(soldierAction());
        militares();
    }, [dispatch]);


    const soldiers = useSelector((state) => state.soldiers.soldier)
    console.log(soldiers)

    return (
        <div>

            <Header />
            <br />
            <br />
            <br />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cédula</th>
                        <th scope="col">Email</th>
                        <th scope="col">Nacionalidad</th>
                        <th scope="col">Género</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Autoridad</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {soldiers.length === 0
                        ? <p>No hay militares</p>
                        : soldiers.map((soldier) => (
                            <tr>
                                <td>{soldier.nombre}</td>
                                <td>{soldier.cc}</td>
                                <td>{soldier.email}</td>
                                <td>{soldier.nacionalidad}</td>
                                <td>{soldier.genero}</td>
                                <td>{soldier.edad}</td>
                                <td>{soldier.autoridad}</td>
                                <td>{soldier.activo}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Militar;