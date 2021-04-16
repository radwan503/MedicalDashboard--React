import React,{Fragment,useState,useEffect} from "react";
import { Badge, Breadcrumb, Button, Card, Container, Table } from "react-bootstrap";
import { FaHome,FaFileAlt,FaTrash,FaPen } from "react-icons/fa";

import axios from 'axios';

const VaccinatePatientListComponents = () => {
    const [vaccinatedPeople,setVaccinatePeople] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  const getVaccinatedPeopleList=()=>{
    fetch('./data/patient-list.json')
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
        <>
          <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Patient Name</th>
                  <th>Assigned Doctor</th>
                  <th>Vaccine Type</th>
                  <th>Date</th>
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
                        <td>{vaccinate.assignDoctor}</td>
                        <td>{vaccinate.date}</td>
                        {(() => {
                          if (vaccinate.vaccineType == "pfizer") {
                            return (
                              <td><Badge pill  variant="success">
                              {vaccinate.vaccineType}</Badge></td>
                            )
                          } else if (vaccinate.vaccineType == "moderna") {
                            return (
                              <td><Badge pill  variant="warning">
                              {vaccinate.vaccineType}</Badge></td>
                            )
                          } else if (vaccinate.vaccineType == "astraZeneca") {
                            return (
                              <td><Badge pill  variant="primary">
                              {vaccinate.vaccineType}</Badge></td>
                            )
                          } else if (vaccinate.vaccineType == "zymergen") {
                            return (
                              <td><Badge pill  variant="info">
                              {vaccinate.vaccineType}</Badge></td>
                            )
                          } else {
                            return (
                              <td><Badge pill  variant="danger">
                              {vaccinate.vaccineType}</Badge></td>
                            )
                          }
                        })()}
                      
                        <td>
                          <a className="edit-btn action-btn btn"><FaPen></FaPen></a>
                          <a className="delete-btn action-btn btn"><FaTrash></FaTrash></a>
                        </td>
                    </tr> 
                  )
                }
              </tbody>
            </Table>
        </>
    )
}

export default VaccinatePatientListComponents
