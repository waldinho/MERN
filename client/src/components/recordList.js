import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/actions/fetchUsers";

const Record = (props) => (
 <tr>
   <td>{props.record.name}</td>
   <td>{props.record.position}</td>
   <td>{props.record.level}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);

export default function RecordList() {
 const users = useSelector(state => state.users);
 const dispatch = useDispatch();
 
 // This method fetches the records from the database.
 useEffect(() => {
    dispatch(fetchUsers());
 }, []);

  
 // This method will delete a record
 const deleteRecord = async (id) => {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
   dispatch(fetchUsers());
 }
 
  // This method will map out the records on the table
 const recordList = () => users?.map((record) => 
    <Record
      record={record}
      deleteRecord={() => deleteRecord(record._id)}
      key={record._id}
    />
  );
 
  // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Employees:</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Position</th>
           <th>Level</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}