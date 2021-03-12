//This part is done by pritam gayen
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Updatepro from './updatepro'
import NavigationBar from './NavigationBar';
import Footer from './footer';
import {Redirect} from 'react-router-dom';


function DisplayAll() {
  const [prolist, setProList] = useState([]);
  const [msg, setMessage] = useState("");
  const [status, setStatus] = useState(true);
  const [id, setId] = useState("");

  //Similar to componentDidMount and componentDidUpdate
  
  useEffect(() => {
    axios.get('/des/'+sessionStorage.getItem("useremail"))
      .then(response => {
        console.log(response.data)
        setProList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  function viewProList() {
    return prolist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{currentrow.desproid}</td>
          <td>{currentrow.desprocat}</td>
          <td>{currentrow.desprospe}</td>
          <td>{currentrow.desprodes}</td>
          <td>{currentrow.desprocost}</td>
          <td>{currentrow.desprosize}</td>
          <td>{currentrow.desprofile}</td>
          <td><button onClick={() => removeRow(index)} className="btn btn-danger">Delete</button></td>
          <td><button onClick={() => updateRow(index)} className="btn btn-primary">Update</button></td>
          
        </tr>
      )
    })
  }



  function removeRow(index) {
    var tempprolist = [...prolist]; // make a new copy of array instead of mutating the same array directly. 
    let removerow = tempprolist.splice(index, 1);
    console.log(removerow[0].desproid)
    axios.delete('/des/remove/' + removerow[0].desproid)
      .then(res => {
        console.log(res.data)
        setMessage('SUCCESSFULLY DELETED')
        setProList(tempprolist)
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID EMAIL ID')
      })
  }

  function updateRow(index) {
    var tempprolist = [...prolist]; // make a new copy of array instead of mutating the same array directly. 
    let removerow = tempprolist.splice(index, 1);
    console.log(removerow[0].desproid)
    setStatus(false)
    setId(removerow[0].desproid)
  }



  if (status === true) {
    let authuser = sessionStorage.getItem('Key_Veriable')
         console.log(authuser)
         if (authuser === "DESIGNER") {
  return (
    
    <div>
      <NavigationBar />
      <b style={{ color: "red" }}>{msg}</b>
      <h3>ALL Product DETAILS</h3>
      <table border="1" align="center">
        <thead>
          <tr>
            <th>SL. No</th>
            <th>Product ID</th>
            <th>Product Catagory</th>
            <th>Specification</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Product Size</th>
            <th>Poster</th>
            <th>Delete</th>
            <th>Update</th>
            
          </tr>
        </thead>

        <tbody>
          {viewProList()}
        </tbody>
      </table>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />
    </div>
  )
}
else {
    return (<Redirect to="/designerlogin" />)

}
}
else{
  return (
    <div>
      <NavigationBar />
      <br />
      <Updatepro id={id} />
      <br /><br /><br />
      <Footer />
    </div>
  )
}
}



export default DisplayAll