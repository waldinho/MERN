import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/actions/fetchUsers";

import FilterList from "./filterList";

const Record = (props) => {
  const {name, position, level, _id} = props.record
  return (
  <tr>
    <td>{name}</td>
    <td>{position}</td>
    <td>{level}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${_id}`}>Edit</Link> |
      <button className="btn btn-link"
        onClick={() => {
          props.deleteRecord(_id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
 )
};

const RecordList = () =>{
 const users = useSelector(state => state.users);
 const [result, setResult] = useState(users);
 const dispatch = useDispatch();

 const userList = result || users;
 
 useEffect(() => {
  dispatch(fetchUsers());
 }, [dispatch]);

 const deleteRecord = async (id) => {
  await fetch(`http://localhost:5000/${id}`, {
    method: "DELETE"
  });
  dispatch(fetchUsers());
 }
 
 const recordList = () => userList?.map((record) => 
  <Record
    record={record}
    deleteRecord={() => deleteRecord(record._id)}
    key={record._id}
  />
 );
 
 return (
   <div>
     <h3>Employees:</h3>
     <FilterList list={users} setResult={setResult}/>
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

export default RecordList;