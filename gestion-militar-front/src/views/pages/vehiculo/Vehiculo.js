import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVehiculos } from '../../../application/actions/VehiculoActions';
import Header from "../../components/Header";

const Vehiculo = () => {
    const vehiculos = useSelector((state) => state.vehiculos.vehiculos)
    const dispatch = useDispatch();

    useEffect(() => {
        const vehiculos = () => dispatch(getVehiculos());
        vehiculos();
    }, [dispatch]);

    return (
        <div>

            <Header />
            <br />
            <br />
            <br />
            <div className="container-fluid">
                {vehiculos.length === 0
                    ? <h5>No hay vehículos</h5>
                    : vehiculos.map((vehiculo) => (
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card-home border">
                                    <div>
                                        <img src={vehiculo.url} className="image-card card-img-top" alt={vehiculo.tipoVehiculo} />
                                    </div>
                                    <div class="card-body">
                                        <h5 className="card-title">{vehiculo.tipoVehiculo}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>

    )

}

export default Vehiculo;