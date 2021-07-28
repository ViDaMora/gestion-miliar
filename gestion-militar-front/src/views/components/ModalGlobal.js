import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createSoldierAction } from '../../application/actions/SoldierAction'

const ModalGlobal = ({ handleClose, show, showData }) => {

    const dispatch = useDispatch();

    const [formState, setFormState] = useState({
        nombre: "",
        cedula: "",
        email: "",
        nacionalidad: "",
        genero: "",
        edad: "",
        autoridad: "",

    });

    const { nombre, cedula, email, nacionalidad, genero, edad, autoridad } = formState;

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        dispatch(createSoldierAction(formState));
        handleClose();
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Registrar Militar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated}>
                        <Form.Group className="mb-3" controlId="formBasicNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" name="nombre" value={nombre} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCedula">
                            <Form.Label>Cedula</Form.Label>
                            <Form.Control type="text" placeholder="Cedula" name="cedula" value={cedula} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicNacionalidad">
                            <Form.Label>Nacionalidad</Form.Label>
                            <Form.Control type="text" placeholder="Nacionalidad" name="nacionalidad" value={nacionalidad} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicGenero">
                            <Form.Label>Genero</Form.Label>
                            <Form.Control type="text" placeholder="Genero" name="genero" value={genero} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEdad">
                            <Form.Label>Edad</Form.Label>
                            <Form.Control type="number" placeholder="Edad" name="edad" value={edad} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAutoridad">
                            <Form.Label>Autoridad</Form.Label>
                            <Form.Control type="text" placeholder="Autoridad" name="autoridad" value={autoridad} onChange={handleChange} required />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalGlobal;