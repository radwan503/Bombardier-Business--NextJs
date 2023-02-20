import { NextPage } from "next";
import React,{useState} from "react";
import {Button,Offcanvas} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import SideCanvas from '../../../components/SideCanvas';
import { FaEdit, FaTrash } from "react-icons/fa";

interface propsType {
  users: any,
  data: any,
}



export const getStaticProps = async () => {
  const res = await fetch('https://dummyjson.com/users');
  const users = await res.json();
  const data = users.users
  return {
    props: {
      data
    }
  }
}


const VoterList:NextPage<propsType>  = ({data}) => {

  const [addMemeberModalshow, setAddMemeberModalshowShow] = useState(false);
  const [editMemberModalShow, setEditMemberModalShow] = useState(false);
  const handleClose = () => {
    setAddMemeberModalshowShow(false)
    setEditMemberModalShow(false)
  };
  const handleShow = () => setAddMemeberModalshowShow(true);

  const columns = [{
    dataField: 'id',
    text: 'ID',
    sort:true
  }, {
    dataField: 'firstName',
    text: 'Name',
    sort:true,
    filter: textFilter()
  },
  {
    dataField: "action",
    text: "Action",
    editable: false,
    formatter: (cellContent:any, row:any) => {
      return (
        <>
         <button
          className="btn btn-warning-custom  me-2"
          onClick={() => handleEdit(row.id)}
        >
          <FaEdit/>
        </button>
        <button
          className="btn btn-danger btn-danger-custom"
          onClick={() => handleDelete(row.id)}
        >
          <FaTrash/>
        </button>
        </>
        
      );
    },
  },
  ];

  const handleEdit = (rowId:any) => {
    console.log(rowId);
    setEditMemberModalShow(true)
  };
  
  const handleDelete = (rowId:any) => {
    console.log(rowId);
  };

  return (
    <>
      <div className="container py-5">
        <div className="voter-list-table">
          <div className="table-header bg-light py-5 text-center mb-3">
            <h3>EXECUTIVE COMMITTEE ELECTION 2023-2024</h3>
            <p className="mb-0">
              ELIGIBLE VOTER LIST (Updated Till 30/06/2022)
            </p>
            <p className="mb-0">TOTAL VOTER: 829</p>
          </div>
          <div>
          <button className="btn btn-primary mb-3" onClick={handleShow} >+ Add New Member</button>
          </div>
          <div className="card rounded-0">
            <div className="card-body custom-table">
            <BootstrapTable keyField='id' data={ data } columns={ columns } pagination={paginationFactory({})} filter={ filterFactory() }/>
            </div>
          </div>
        </div>
      </div>

      {/* Add Member */}
       <SideCanvas show={addMemeberModalshow} onHide={handleClose} title="Add member"/> 
       {/* Edit Member */}
       <SideCanvas show={editMemberModalShow} onHide={handleClose} title="Edit member"/> 
  
    </>
  );
};

export default VoterList;
