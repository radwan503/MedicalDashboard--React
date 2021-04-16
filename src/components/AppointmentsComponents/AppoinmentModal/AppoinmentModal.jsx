import React,{useState} from 'react'
import { Button, Form, Modal,Col,Row } from 'react-bootstrap';

import './AppoinmentModal.scss';

const AppoinmentModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="vaccinate-appoinment-create--modal">
            <Button variant="primary" className="addNew-btn" onClick={handleShow}>
                Add New
            </Button>

            <Modal
                className="vaccinate-appoinment-create-modal--content"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Vaccinate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="patientName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                        </Form.Row>
                
                        <Form.Row>
                            <Form.Group as={Col} controlId="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" placeholder="Date"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control  type="number" placeholder="Phone" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col} controlId="doctorName">
                            <Form.Label>Doctor Name</Form.Label>
                            <Form.Control  type="text" placeholder="Doctor Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="vaccine">
                            <Form.Label>Vaccine</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Oxford</option>
                            </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <fieldset>
                            <Form.Group>
                        
                                <Form.Check
                                type="radio"
                                inline
                                label="Male"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                />
                                <Form.Check
                                type="radio"
                                inline
                                label="Female"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                />
                                <Form.Check
                                type="radio"
                                inline
                                label="Third"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                                />
                   
                            </Form.Group>
                        </fieldset>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button className="close-btn" variant="danger"  onClick={handleClose}>
                    Close
                </Button>
                <Button className="submit-btn" variant="primary" type="submit">Submit</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AppoinmentModal
