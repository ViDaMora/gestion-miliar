import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createSoldierAction } from '../../../application/actions/SoldierAction'

const MilitarForm = ({ handleClose, showData, soldiers, id }) => {

    const dispatch = useDispatch();

    const [formState, setFormState] = useState({
        nombre: "",
        cc: "",
        email: "",
        nacionalidad: "",
        genero: "",
        edad: "",
        autoridad: "",

    });

    useEffect(() => {
        if (showData) {
            const soldier = soldiers.find(soldier => soldier.id === id)
            console.log(soldier)
            setFormState({
                nombre: soldier.nombre,
                cc: soldier.cc,
                email: soldier.email,
                nacionalidad: soldier.nacionalidad,
                genero: soldier.genero,
                edad: soldier.edad,
                autoridad: soldier.autoridad,
            })
        }

        if (!showData) {
            setFormState({
                nombre: "",
                cc: "",
                email: "",
                nacionalidad: "",
                genero: "",
                edad: "",
                autoridad: "",
            })
        }
    }, [id, showData, soldiers])

    const { nombre, cc, email, nacionalidad, genero, edad, autoridad } = formState;

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
            <Modal.Title>{showData ? "Editar Militar" : "Registrar Militar"}</Modal.Title>
            <Form noValidate validated={validated}>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" name="nombre" value={nombre} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCedula">
                    <Form.Label>Cedula</Form.Label>
                    <Form.Control type="text" placeholder="Cedula" name="cc" value={cc} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={handleChange} required />
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
                    <Form.Select aria-label="Default select example" name="autoridad" value={autoridad} onChange={handleChange} required>
                        <option>Seleccione una opción</option>
                        <option value="general">General</option>
                        <option value="teniente">Teniente</option>
                        <option value="mayor">Mayor</option>
                        <option value="bregadier">Brigadier</option>
                        <option value="coronel">Coronel</option>
                        <option value="comandante">Comandante</option>
                        <option value="capitan">Capitan</option>
                        <option value="sargento">Sargento</option>
                        <option value="cabo">Cabo</option>
                    </Form.Select>
                </Form.Group>
            </Form>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    {showData ? "Editar" : "Guardar"}
                </Button>
            </Modal.Footer>
        </>
    );
}

export default MilitarForm;