import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import Footer from './footer';

function OrderList() {
    const [orderlist, setOrderList] = useState([]);
  
    //Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
      axios.get('/product/orderlist/order')
        .then(response => {
          console.log(response.data)
          setOrderList(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }, [])
  
    function viewOrderList() {
      return orderlist.map((currentrow, index) => {
        return (
          <tr key={index}>
            <td>{currentrow.productid}</td>
            <td>{currentrow.productcat}</td>
            <td>{currentrow.productname}</td>
            <td>{currentrow.productdesc}</td>
            <td>{currentrow.productprice}</td>
            <td>{currentrow.productquantity}</td>
            <td>{currentrow.productsize}</td>
            <td>{currentrow.productPicture}</td>
            <td>{currentrow.customarname}</td>
            <td>{currentrow.customaremailid}</td>
            <td>{currentrow.customarphone}</td>
            <td>{currentrow.customaraddress}</td>
            <td>{currentrow.customarpin}</td>
            
          </tr>
        );
      });
    }
  
    return (
      <div>
        <NavigationBar/>
        <br />
        <h3>Order Lists</h3>
        <table border="1" align="center">
          <thead>
            <tr>
            <th>Product Id</th>
            <th>Product Catagory</th>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Product Price</th>
              <th>Product Quantity</th>
              <th>Product Size</th>
              <th>Product Picture</th>
              <th>Customar Name</th>
              <th>Customar EmailID</th>
              <th>Customar Mobile</th>
              <th>Customar Address</th>
              <th>Customar Pincode</th>

              
            </tr>
          </thead>
  
          <tbody>
            {viewOrderList()}
          </tbody>
        </table>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer/>
      </div>
    )
  }
  
  
  export default OrderList