import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../infrastructure/services/firebase/firebase-config'
import { useHistory } from 'react-router-dom'

function Header() {
    const history = useHistory();
    return (
        <header>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <h5 className="text-header">Gestión Militar</h5>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link className="navbar-brand" to="/lider">
                            <p className="text-header">Lider</p>
                        </Link>
                        <Link className="navbar-brand" to="/militar">
                            <p className="text-header">Militar</p>
                        </Link>
                        <Link className="navbar-brand" to="/vehiculo">
                            <p className="text-header">Vehículo</p>
                        </Link>
                        <Link className="navbar-brand" to="/operacion">
                            <p className="text-header">Operación</p>
                        </Link>
                        <Link className="navbar-brand" to="/unidad">
                            <p className="text-header">Unidad</p>
                        </Link>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    {auth().currentUser
                        ? <div className="navbar-nav">
                            <Link className="nav-item nav-link mr-3 " to="/profile" title="Perfil">
                                <div className="profile">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg>
                                </div>
                            </Link>
                            <button className="btn btn-danger mr-3" onClick={() => {
                                history.push(`/login`);
                                auth().signOut()
                            }}>Salir</button>
                        </div>
                        : <div className="navbar-nav">
                            <Link className="nav-item nav-link mr-3 btn btn-outline-secondary link-header" to="/login">Acceder</Link>
                        </div>}
                </div>
            </nav>
        </header >
    );
}

export default Header;