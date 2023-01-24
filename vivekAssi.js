import React from 'react';
import "./styles.css";
import axios from 'axios';
import { useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';

 function Vivek () {

  const [appear,setAppear] = useState(false);
  const [photo,setPhoto] = useState("");
  const [clientId] = useState("nDAlWJb5w_cGZ03r3LfnLssigcuHlv9q_1xswUxSpQk");
  const [result,setResult] = useState([]);
 
  function handleChange(event) {
     setPhoto(event.target.value);
     
  }
 
  function handleSubmit(event){
    console.log(photo);
  if(photo) setAppear(true);
  else{
    alert("Please give the Keyword!")
  }

     const url = "https://api.unsplash.com/search/photos?page=9&query="
     +photo+"&client_id="+clientId;
     axios.get(url)
     .then((response)=> {
       console.log(response);
       setResult(response.data.results);
     })
   
 }
 
   return (
     <div className="App">
       <h1>Unsplash Photo search in React </h1>
       <input className="inp" onChange={handleChange} type="text" 
       name="photo" placeholder="Search for photos ..."/>
       <button className="ser"  onClick={handleSubmit}
       type="submit">Search </button>
 
 <fieldset className={appear ? "" : "field"} >
    <legend>Photos:</legend>
    <InfiniteScroll dataLength={result.length} >
      <div className="pic" > { result.map((photo)=> (
         <img className="but" src= {photo.urls.small} alt="pics"
          key={photo.urls.small}/>
         ))}</div>
         </InfiniteScroll>
         </fieldset>
    </div>
   );
 }

 export default Vivek;