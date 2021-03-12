//This part is done by afrina sultana
import React, { useState } from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';

//import OTPCheck from './OTPCheck_Hooks'

function UserLogin(props) {

//const authuserr = sessionStorage.getItem("user_email", );


  const [eemail, setEmpEmail] = useState("");
  //const [epass, setEmpPass] = useState("");
  //const [empname, setEmpName] = useState("");

  //const [msg,setMessage] = useState("");
  const [status1, setStatus] = useState(false);
  const [otpno, setOTPNo] = useState("");
  const [servergenotp, setServerGenOTP] = useState("");

  const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
  //const onChangeEmpPass = (e) => setEmpPass(e.target.value);
  const onChangeOTPNo = (e) => setOTPNo(e.target.value);

  const handleLoginSubmit = (evt) => {
    evt.preventDefault();
    sessionStorage.setItem("abc",eemail);
    console.log(`EMAIL: ${eemail}`);
    //console.log(`PASS: ${epass}`); 

    const emplogininfo = {
      empemail: eemail,
      //emppass: epass
    }

    

    sendvalues(emplogininfo);
    

    setEmpEmail('')
    //setEmpPass('')
  }

  function sendvalues(emplogininfo)
  {
    console.log(emplogininfo);
    axios.post('/deg/resetpass/designer', emplogininfo)
    .then(res => {
      //console.log(res.data)
      
      alert('Check your email');
      setStatus(true)
     // setEmpName(res.data[0].empname)
      setServerGenOTP(res.data[1])

    })
    .catch(err => {
      //console.log(err)
      alert('INVALID UID ')
      
    })
  }

  const handleOTPCheckSubmit = (evt) => {
    evt.preventDefault();
    
    if (otpno === servergenotp) {
     
      props.history.push("/newpassword")
      
    }
    else {
      alert('INVALID OTP')
    }

    setOTPNo('')
  }

  if (status1 === false) {
    return (
      <div>
        <NavigationBar />
        <br />
        <h3>FORGET PASSWORD</h3>
        {/*<b style={{ color: "red" }}> {msg} </b>*/}
        <form onSubmit={handleLoginSubmit}>
          <input type="email" value={eemail}
            onChange={onChangeEmpEmail}
            placeholder="Enter Email"
            required />
          <br /><br />


        { /* <input type="password" value={epass}
            placeholder="Enter Password"
            onChange={onChangeEmpPass}
            required />
          <br /><br />*/}
          
          <input type="submit" value="NEXT" className="btn btn-success" />
        </form>
      </div>
    )
  }
  else {
    return (
      <div>
        <br />
        <h3>ENTER OTP</h3>
        {/*<b style={{ color: "red" }}> {msg} </b>*/}
        <form onSubmit={handleOTPCheckSubmit}>
          <input type="text" value={otpno}
            onChange={onChangeOTPNo}
            placeholder="Enter OTP"
            required />
          <br /><br />

          

          <input type="submit" value="CHECK OTP" className="btn btn-success" />
        </form>
      </div>
    )
  }
}

export default UserLogin
