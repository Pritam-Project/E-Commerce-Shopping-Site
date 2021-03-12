//this part is done by ankita biswas
import React, {useState} from 'react'
//import { Redirect } from "react-router-dom";
import axios from 'axios';

function ResetPassword(props)
{

    let designerEmail= sessionStorage.getItem("abc")
    


    const [epass, setEmpPass] = useState("");
    const [reenterpass, setEmpRePass] = useState("");
    //const [empemail, setEmpEmail] = useState("");
    //const [msg, setMessage] = useState("");

    const onChangeEmpPass = (e) => setEmpPass(e.target.value);
   // const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
   const onChangeEmpRePass = (e) => setEmpRePass(e.target.value);



    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (epass === reenterpass)
        {
            const empinfo = {

                emppass: epass,
                empmail: designerEmail,
                //empemail:empemail
                // repass:reenterpass
                
        
            }
            axios.put('/user/update/pass/', empinfo)
        .then(res => {
           
            props.history.push('/login')
            alert('Password changed... Now login.')
        });
        
            // props.history.push('/login')
            // alert('Password changed... Now login.')
            
        }
        else
        { 
           // console.log(epass)
            //console.log(reenterpass)
           // props.history.push('/newpassword')
            alert("not matched")
        }

       // console.log(`email : ${empemail}`)s
       // console.log(`pass : ${epass}`)

    

    // axios.put('http://localhost:4500/emp/new_pass', empinfo)
    //     .then(res => {
    //         console.log(res.data)
    //         props.history.push('/login')
    //         alert('Password changed... Now login.')
    //     });
        


    setEmpPass('')
    setEmpRePass('')
   // setEmpEmail('')

    }



    return (
         <div>
          <form onSubmit={handleSubmit}>
              <h3>CHANGE PASSWORD</h3>

                <input type="password" value={epass} onChange={onChangeEmpPass} placeholder="Enter Password"
                    required />
                    <br /><br />

                     <input type="password" value={reenterpass} onChange={onChangeEmpRePass} placeholder="Re-enter Password"
                    required />
                    <br /><br /> 


                <input type="submit" value="CHANGE" className="btn btn-primary" />


            </form>
        </div>

    )


}

export default ResetPassword