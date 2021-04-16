import React from 'react'
import { Button, Form, Modal,Col,Row } from 'react-bootstrap';

const EditAppoinmentComponents = () => {
    return (
        <div>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="patientName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Name" value="Titus Miskelly"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" value="mmcjarrow0@kickstarter.com"/>
                    </Form.Group>
                </Form.Row>
        
                <Form.Row>
                    <Form.Group as={Col} controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="Date" value="04/03/2021"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control  type="number" placeholder="Phone" value="879-337-5896"/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group as={Col} controlId="doctorName">
                    <Form.Label>Doctor Name</Form.Label>
                    <Form.Control  type="text" placeholder="Doctor Name" value="Marcie McJarrow"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="vaccine">
                    <Form.Label>Vaccine</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option selected value="oxford">Oxford</option>
                    </Form.Control>
                    </Form.Group>
                </Form.Row>
                <fieldset>
                    <Form.Group>
                
                        <Form.Check
                        type="radio"
                        inline
                        checked
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
        </div>
    )
}

export default EditAppoinmentComponents
