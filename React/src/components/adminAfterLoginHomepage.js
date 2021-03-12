/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UpdatePosterAdmin from './adminUpdatePoster'
//import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router";
import NavigationBar from './NavigationBar';
import Footer from './footer';
// import router from '../../Node/controllers/product-router-operation';
// import Updatepro from './updatepro'



function DisplayAdminProductsAlsoOperations() {
  const history = useHistory();
  const [prolist, setProList] = useState([]);
  const [msg, ] = useState("");
  // const [msg, setMessage] = useState("");
  const [status, setStatus ] = useState(true);
  // const [status, setStatus] = useState(true);
  const [id, setId] = useState("");

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
      const productOwner = sessionStorage.getItem("Key_Veriable");
      //const adminLoginCheck = sessionStorage.getItem("Key_Variable")
      if(productOwner === "ADMIN")
      {
        axios.post('/admin/posters/'+productOwner)
      .then(response => {
        console.log(response.data)
        setProList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

      }

      else{
          console.log("please Admin Login First")
          //return(<Redirect to="/adminlogin" />)
          history.push("/adminlogin")
        
      }
    
  }, [history])

  function viewProList() {
    return prolist.map((currentrow, index) => {
        
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{currentrow.desprospe}</td>
          <td>{currentrow.desprodes}</td>
          <td>{currentrow.desprocost}</td>
          <td>{currentrow.desprosize}</td>
          <td>{currentrow.desprocat}</td>
          <td><button type="submit" className="btn btn-primary" onClick={() => RemovePoster(currentrow._id,index) }>Delete</button></td>
          <td><button type="submit" className="btn btn-primary" onClick={() => UpdatePoster(index) }>Update</button></td>
          
          
        </tr>
      )
    })
  }

  

  function RemovePoster(id,index){
    var tempemplist = [...prolist]; // make a new copy of array instead of mutating the same array directly. 
      tempemplist.splice(index, 1);
    axios.delete('/admin/posterdelete/'+id).then(() =>{
        alert("Deleted")
        setProList(tempemplist)
    }).catch((err) => console.log(err))
  }

  function UpdatePoster(index) {
    var tempprolist = [...prolist]; // make a new copy of array instead of mutating the same array directly. 
    let removerow = tempprolist.splice(index, 1);
    console.log(removerow[0].desproid)
    setStatus(false)
    setId(removerow[0].desproid)
  }



  if (status === true) {
  return (
    <div>
    <NavigationBar/>
      <b style={{ color: "red" }}>{msg}</b>
      <h3>All Added Posters </h3>
      <table border="1" align="center">
        <thead>
          <tr>
            <th>SL. No</th>
            <th>posterSpecification</th>
            <th>posterDescription</th>
            <th>posterPrice</th>
            <th>posterSize</th>
            <th>Catagory</th>
            <th>Delete</th>
            <th>Update</th>
            
            
          </tr>
        </thead>

        <tbody>
          {viewProList()}
        </tbody>
      </table>
      <br/><br/><br/><br/>
      <Footer/>
    </div>
  )
}
else{
  return (
    <div>
      <UpdatePosterAdmin id={id} />
    </div>
  )
}
}




export default DisplayAdminProductsAlsoOperations