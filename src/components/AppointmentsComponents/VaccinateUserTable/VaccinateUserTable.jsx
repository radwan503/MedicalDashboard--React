import React,{Fragment,useState,useEffect} from "react";
import { Modal, Breadcrumb, Button, Card, Container, Table } from "react-bootstrap";
import { FaHome,FaFileAlt,FaTrash,FaPen } from "react-icons/fa";
import EditAppoinmentComponents from "../EditAppoinmentComponents/EditAppoinmentComponents";

import './VaccinateUserTable.scss'

const VaccinateUserTable = () => {
    const [vaccinatedPeople,setVaccinatePeople] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  
    const getVaccinatedPeopleList=()=>{
      fetch('./data/vaccinate-user-table.json')
       .then(response=>{
         if(response.ok){
           return response.json();
         }
         throw response;
       })
       .then(vaccinatedPeople=>{
         setVaccinatePeople(vaccinatedPeople);
       })
       .catch(error=>{
         console.error("Error fetching data",error);
         setError(error);
       })
       .finally(()=>{
         setLoading(false);
       })
    }
  
    useEffect(() => {
      getVaccinatedPeopleList();
    }, [])
  
    if (loading) return "Loading..";
    if(error) return "Error !";
    return (
        <div>
            <Table responsive striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Patient Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Date</th>
                    <th>Phone</th>
                    <th>Doctor</th>
                    <th>Vaccine</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                  {
                      vaccinatedPeople && vaccinatedPeople.length>0 
                      && vaccinatedPeople.map((vaccinate)=>
                          <tr key={vaccinate.id}>
                          <td>{vaccinate.id}</td>
                          <td>{vaccinate.name}</td>
                          <td>{vaccinate.email}</td>
                          <td>{vaccinate.gender}</td>
                          <td>{vaccinate.date}</td>
                          <td>{vaccinate.phone}</td>
                          <td>{vaccinate.doctor}</td>
                          <td>{vaccinate.vaccine}</td>
                          <td>
                              <a className="edit-btn action-btn btn" onClick={() => setShow(true)}><FaPen></FaPen></a>
                              <a className="delete-btn action-btn btn"><FaTrash></FaTrash></a>
                          </td>
                      </tr> 
                      )
                  }
                </tbody>
            </Table>

            <Modal
              className="vaccinate-appoinment-edit-modal--content"
              show={show}
              backdrop="static"
              keyboard={false}
              onHide={() => setShow(false)}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Edit Vaccinate
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <EditAppoinmentComponents></EditAppoinmentComponents>
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

export default VaccinateUserTable
