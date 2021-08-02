import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createVehiculoAction } from '../../../application/actions/VehiculoActions';

const VehiculoForm = ({ handleClose, showData, vehiculos, id }) => {

    const dispatch = useDispatch();

    const [formState, setFormState] = useState({
        url: "",
        tipoVehiculo: "",

    });

    const { url, tipoVehiculo } = formState;

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
        dispatch(createVehiculoAction(formState));
        handleClose();
    };

    return (

        <>
            <Modal.Title>Agregar Vehículo</Modal.Title>
            <Form noValidate validated={validated}>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Imagen Vehículo</Form.Label>
                    <Form.Control type="text" placeholder="URL Imagen" name="url" value={url} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCedula">
                    <Form.Label>Tipo Vehículo</Form.Label>
                    <Form.Select aria-label="Default select example" name="tipoVehiculo" value={tipoVehiculo} onChange={handleChange} required>
                        <option>Seleccione una opción</option>
                        <option value="terrestre">Terrestre</option>
                        <option value="aereo">Aereo</option>
                        <option value="marino">Marino</option>
                    </Form.Select>
                </Form.Group>
            </Form>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Guardar
                </Button>
            </Modal.Footer>
        </>
    );
}

export default VehiculoForm;