import React, { useEffect, useState } from 'react'

 const Search = (props) => {
     const [searchData, setSearchData]= useState("");

     const handleSearchData =(e)=>{
        setSearchData(e.target.value);
     }
     useEffect(()=>{
        props.onSearch(searchData);
     },[searchData])
  return (
    <div style={{textAlign: "center"}}>
        <input type="text" placeholder='Search Country' 
        value={searchData} onChange={handleSearchData}
        ></input>
    </div>
  )
}
export default Search;
