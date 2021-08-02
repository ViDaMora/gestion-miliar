import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createUnidadAction } from '../../../application/actions/UnidadAction';

const UnidadForm = ({ handleClose, soldiers,showData, unidades, id }) => {

    const dispatch = useDispatch();

    const [formState, setFormState] = useState({
        tipoUnidad: "",
        cc: "",
    });

    const { tipoUnidad, cc } = formState;

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
        dispatch(createUnidadAction(formState));
        handleClose();
    };

    const filteredNotActiveSoldiers = () => {
        let notActive =[]
        soldiers.forEach(soldier => {
            if (!soldier.activo) {
                notActive.push(soldier) 
            }
        })
        return notActive
    }

    const notActive = filteredNotActiveSoldiers()
    return (

        <>
            <Modal.Title>Agregar Unidad</Modal.Title>
            <Form noValidate validated={validated}>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Tipo Unidad</Form.Label>
                    <Form.Control type="text" placeholder="Tipo Unidad" name="tipoUnidad" value={tipoUnidad} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCedula">
                    <Form.Label>Encargado</Form.Label>
                    <Form.Select aria-label="Default select example" name="cc" value={cc} onChange={handleChange} required>
                        <option>Seleccione una opción</option>
                        {notActive?.length > 0 && notActive.map(notActive => (
                            <option value={notActive.cc}>{notActive.nombre}</option>
                        ))}
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

export default UnidadForm;