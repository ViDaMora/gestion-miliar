import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { soldierAction } from '../../../application/actions/SoldierAction'
// import { GetSoldierInfo } from "../../../application/actions/SoldierAction";
import Header from "../../components/Header";


function Home() {

    const dispatch = useDispatch();

    const listSoldier = () =>{
        console.log("Hola");
        dispatch(soldierAction());
    }

/*
    useEffect(() => {
        const militares = () => dispatch(soldierAction());
        militares();
    }, [dispatch])
*/

    return (
        <div><Header />
            <div className="container">
                <br/>
                <br/>
                <br/>          
                <button onClick={() => listSoldier()}>Listar</button>
            </div>
        </div>
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         GetSoldierInfo: () => dispatch(GetSoldierInfo()),
//     }

// }

export default Home;
// export default connect(null, mapDispatchToProps)(Home);
