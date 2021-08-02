import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from "../../../infrastructure/services/firebase/auth";


export default class Login extends Component {

    async googleSignIn() {
        try {
            await signInWithGoogle();
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    render() {
        return (
            <div className="container d-flex justify-content-center">
                <div className="col-lg-7 rounded border d-flex justify-content-center form">
                    <div className="mt-5 py-5 px-5">
                        <h1>
                            Ingresa a
                            <Link to="/"> Gestión Militar</Link>
                        </h1>
                        <br />
                        <p>Para acceder, ingresar con:</p>
                        <div className="d-grid gap-">
                            <button onClick={this.googleSignIn} type="button" className="btn btn-danger">
                                <div className="logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                    </svg> Google
                                </div>
                            </button>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}