import React,{Fragment,useState,useEffect} from "react";
import { Badge, Breadcrumb, Button, Card, Container, Table } from "react-bootstrap";
import { FaHome,FaFileAlt,FaTrash,FaPen } from "react-icons/fa";

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import cellEditFactory from 'react-bootstrap-table2-editor';

import products from '../../../data/view-details.json'

import './FrontLinerUserTable.scss'

const columns = [{
  dataField: 'id',
  text: '#',
  sort: true
}, {
  dataField: 'name',
  text: 'Patient Name',
  sort: true
}, {
  dataField: 'email',
  text: 'Email'
},
{
  dataField: 'gender',
  text: 'Gender'
}
, {
  dataField: 'date',
  text: 'Date'
}
, {
  dataField: 'phone',
  text: 'Phone'
}
, {
  dataField: 'doctor',
  text: 'Doctor'
},
{
  dataField: 'vaccine',
  text: 'Vaccine'
}

];
const { SearchBar } = Search;

const defaultSorted = [{
  dataField: 'name',
  order: 'desc'
}];

const FrontLinerUserTable = () => {
    return (
        <div className="front-liner__table">
          <ToolkitProvider
            keyField="id"
            data={ products }
            columns={ columns }
            search
          >
            {
              props => (
                <div className="table-content">
                  <div className="table-content__searchBar float-right mb-3 mt-1">
                    <SearchBar { ...props.searchProps } />
                  </div>
                  <div className="table-content__table">
                    <BootstrapTable bootstrap4 keyField='id' { ...props.baseProps } 
                    pagination={ paginationFactory() } defaultSorted={ defaultSorted } cellEdit={ cellEditFactory({ mode: 'click' }) }
                    />
                  </div>
                </div>
              )
            }
          </ToolkitProvider>
          
        </div>
    )
}

export default FrontLinerUserTable
