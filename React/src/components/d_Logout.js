//This part is done by afrina sultana
import React from 'react';
import { Redirect } from "react-router-dom";
//import {Link} from 'react-router-dom';
//import  { useState } from 'react'
//import axios from 'axios';
//import useHistory from 'react-router-dom'
//const history=useHistory();
//import Home from '../components/Home';

function Logout(props) {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser === 'USER' || authuser === 'DESIGNER' || authuser === 'ADMIN') {
    sessionStorage.removeItem('Key_Veriable')
    sessionStorage.clear();
  }
    return (<Redirect to="/" />)
  
}


export default Logout
