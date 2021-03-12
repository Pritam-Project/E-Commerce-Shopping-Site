import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Redirect } from 'react-router-dom';
// import router from '../../Node/controllers/product-router-operation';
import Order from './order'
import NavigationBar from './NavigationBar';
import Footer from './footer';
import { useHistory } from 'react-router-dom';

function DisplayAllUserOp(poprs) {
  const history = useHistory();
  const [prolist, setProList] = useState([]);
  const [id, setId] = useState("")
  const useremail = sessionStorage.getItem("useremail")
  // const [msg, setMessage] = useState("");
  const [status,setStatus ] = useState(true);

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('/search/searchbygenre/rock')
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
          {/* <td>{currentrow.desproid}</td> */}
          <td>{currentrow.desprocat}</td>
          <td>{currentrow.desprospe}</td>
          <td>{currentrow.desprodes}</td>
          <td>{currentrow.desprocost}</td>
          <td>{currentrow.desprosize}</td>
          <td>{currentrow.desprofile}</td>
          <td><button type="submit" className="btn btn-primary" onClick={() => AddToCart(currentrow._id,useremail) }>AddToCart</button></td>
          <td><button type="submit" className="btn btn-warning" onClick={() =>  MoveToWishList(currentrow._id,useremail) }>MoveToWishlist</button></td>
          <td><button type="submit" className="btn btn-secondary" onClick={() =>  MoveToOrderList(currentrow.desproid) }>Buy Now</button></td>
          
        </tr>
      )
    })
  }

  function AddToCart(params,useremail) {
    let authuser = sessionStorage.getItem('Key_Veriable')
         console.log(authuser)
         if (authuser === "USER") {
    const obj ={
      addtocartid:params,
      cartuseremail:useremail
    }
    axios.post('/product/cart',obj).then(
      alert("Added to Cart"),
      // router.route("")
      
      
    ).catch((error) => {
      console.log(error);
    });
    
  }
  else {
    //return (<Redirect to="/login" />)
    history.push('/login')

}

}

  function MoveToWishList(params,useremail) {
    let authuser = sessionStorage.getItem('Key_Veriable')
    console.log(authuser)
    if (authuser === "USER") {
    const obj ={
      addtowishlistid:params,
      wishuseremail:useremail
    }
    axios.post('/product/wishlist/',obj).then(
      alert("Added to Wishlist")
    ).catch((error) => {
      console.log(error);
    });
  }
  else {
    //return (<Redirect to="/login" />)
    history.push('/login')
  
  }
}


function MoveToOrderList(params) {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser === "USER") {
          console.log("Create Object")
          setStatus(false)
          setId(params)
          console.log("Parameter Passed")

  }
  else {
    //return (<Redirect to="/login" />)
    history.push('/login')
  
  }
}


  // function removeRow(index) {
  //   var tempprolist = [...prolist]; // make a new copy of array instead of mutating the same array directly. 
  //   let removerow = tempprolist.splice(index, 1);
  //   console.log(removerow[0].desproid)
  //   axios.delete('http://localhost:4500/des/remove/' + removerow[0].desproid)
  //     .then(res => {
  //       console.log(res.data)
  //       setMessage('SUCCESSFULLY DELETED')
  //       setProList(tempprolist)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       setMessage('INVALID EMAIL ID')
  //     })
  // }

  



  if (status === true) {
  return (
    <div>
      <NavigationBar />
      <h3>ALL Product DETAILS</h3>
      <table border="1" align="center">
        <thead>
          <tr>
            <th>SL. No</th>
            {/* <th>Product ID</th> */}
            <th>Product Catagory</th>
            <th>Specification</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Product Size</th>
            <th>Poster</th>
            <th>Add to cart</th>
            <th>Move to wISHLIST</th>
            <th>bUY nOW</th>
            
          </tr>
        </thead>

        <tbody>
          {viewProList()}
        </tbody>
      </table>
      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <Footer />
    </div>
  )
}else{
  return(
    <div>
      <NavigationBar />
      <Order id = {id} />
      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <Footer />
    </div>
  )
}

}



export default DisplayAllUserOp