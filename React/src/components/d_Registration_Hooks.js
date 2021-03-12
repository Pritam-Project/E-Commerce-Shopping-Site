//This part is done by afrina sultana
import React, { useState } from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';

function Registration() {

    const [ename, setEmpName] = useState("");
    const [eemail, setEmpEmail] = useState("");
    const [emobile, setEmpmobile] = useState("");
    const [edob, setEmpDOB] = useState("");
    const [epass, setEmpPass] = useState("");
    const [egender, setEmpGender] = useState("");
    const [ecountry, setEmpCountry] = useState("");
    const [estate, setEmpState] = useState("");
    const [eaddress, setEmpAddress] = useState("");
    const[eabout, setEmpAbout] = useState("");
    const [msg, setMessage] = useState("");

    const onChangeEmpName = (e) => setEmpName(e.target.value);
    const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
    const onChangeEmpMobile = (e) => setEmpmobile(e.target.value);
    const onChangeEmpDOB = (e) => setEmpDOB(e.target.value);
    const onChangeEmpPass = (e) => setEmpPass(e.target.value);
    const onChangeEmpGender = (e) => setEmpGender(e.target.value);
    const onChangeEmpCountry = (e) => setEmpCountry(e.target.value);
    const onChangeEmpState = (e) => setEmpState(e.target.value);
    const onChangeEmpAddress = (e) => setEmpAddress(e.target.value);
    const onChangeEmpAbout = (e) => setEmpAbout(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${ename}`);
        console.log(`EMAIL: ${eemail}`);

        const empinfo = {
            empname: ename,
            empemail: eemail,
            empmobile: emobile,
            empdob: edob,
            emppass: epass,
            empgender: egender,
            empcountry: ecountry,
            empstate:estate,
            empaddress: eaddress,
            about:eabout
        }

        axios.post('/deg/regpasswordencrypt/designer', empinfo)
            .then(res => {
                console.log(res.data)
                setMessage('REGISTRATION SUCCESSFUL..CHECK EMAIL')
            });

        setEmpName('')
        setEmpEmail('')
        setEmpmobile('')
        setEmpDOB('')
        setEmpPass('')
        setEmpGender('')
        setEmpCountry('')
        setEmpState('')
        setEmpAddress('')
        setEmpAbout('')
        
        

    }

    return (
        <div>
            <NavigationBar />
            <br />
            <h3>DESIGNER REGISTRATION FORM</h3>
            <h4 style={{ color: "brown" }}> {msg}</h4>
            <form onSubmit={handleSubmit}>

            <label>Name:</label>
                <input type="text" value={ename}
                    onChange={onChangeEmpName} placeholder="Enter Name"
                    required />
                <br /><br />

                <label>EMAIL ID:</label>
                <input type="email" value={eemail}
                    onChange={onChangeEmpEmail} placeholder="Enter Email"
                    required />
                <br /><br />

                <label>Mobile:</label>
                <input type="number" value={emobile}
                    onChange={onChangeEmpMobile} placeholder="Enter Mobile No"
                    required />
                <br /><br />


                <label>Password:</label>
                <input type="password" value={epass}
                    onChange={onChangeEmpPass} placeholder="Enter Password"
                    required />
                <br /><br />

                <label>Date of Birth:</label>
                <input type="date" value={edob}
                    onChange={onChangeEmpDOB} />
                <br /><br />

                <label>Gender:</label>

                <input type="radio" name="gender" value="MALE"
                    checked={egender === 'MALE'}
                    onChange={onChangeEmpGender} />
                <label>Male</label>



                <input type="radio" name="gender" value="FEMALE"
                    checked={egender === 'FEMALE'}
                    onChange={onChangeEmpGender} />
                <label>Female</label>
                <br /><br />

                <label>Country:</label>
                <select value={ecountry} onChange={onChangeEmpCountry}>
                    <option value="SELECT COUNTRY">SELECT</option>
                    <option value="AF">Afghanistan</option>
                    <option value="India">India</option>
                    <option value="UK">UK</option>
                    <option value="USA">USA</option>
                </select>
                <br /><br />
 
                <label>State:</label>
                <select value={estate} onChange={onChangeEmpState}>
                    
                    <option value="SELECT STATE">SELECT</option>
                    <option value="WB">West Bengal</option>
                    <option value="DEL">Delhi</option>
                    <option value="AP">AP</option>
                    <option value="UP">UP</option>
                </select>
                <br /><br />

                

                <label>ABOUT : </label> <br />
                <textarea value={eabout}
                    onChange={onChangeEmpAbout} rows="3" >
                </textarea>
                <br /><br />

                <label>ADDRESS: </label> <br />
                <textarea value={eaddress}
                    onChange={onChangeEmpAddress} rows="3" >
                </textarea>
                <br /><br />

                <input type="submit" value="REGISTER" className="btn btn-primary" />

            </form>
        </div>
    )
}


export default Registration
