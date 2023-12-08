import React, { useState, useEffect } from "react";

const FilterList = (props) => {
  const {list, setResult} = props
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setResult(list?.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase())))
   }, [searchTerm, setResult, list]);
   
  return (
    <>
      <input type="text" placeholder="Search by name..." onChange={(e) => setSearchTerm(e.target.value)}/>
    </>
  );
}

export default FilterList;