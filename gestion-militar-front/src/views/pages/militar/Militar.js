import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { soldierAction } from '../../../application/actions/SoldierAction'
import Header from "../../components/Header";


function Militar() {

    const dispatch = useDispatch();

    const listSoldier = () => {
        dispatch(soldierAction());
    }


    useEffect(() => {
        const militares = () => dispatch(soldierAction());
        militares();
    }, [dispatch])


    return (
        <div>
            <Header />
            <div className="container bg-primary">
                <br />
                <br />
                <br />
                <br />
                <button onClick={() => listSoldier()}>Listar</button>
            </div>
        </div>
    )
}

export default Militar;