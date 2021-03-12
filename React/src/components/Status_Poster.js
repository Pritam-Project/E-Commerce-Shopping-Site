//This poster is done by tapai
import React, { useState} from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar'
import Footer from './footer';
// import {hashHistory} from 'react-router-dom';
// import { createHashHistory } from 'history';
function  StatusPoster(pram) {

    const [requestid,updateReqId]=useState(pram.id);
    const [status,updateStatus]=useState("");
    // const [msg, setMessage] = useState("");
    // const onChangeRequestId = (e) => updateReqId(e.target.value);
    const onChangeStatus = (e) => updateStatus(e.target.value);

    const handleSubmit = (evt) => {
      
      evt.preventDefault();
      console.log(`REQUEST ID: ${requestid}`);
      console.log(`STATUS : ${status}`);

    const updateordinfo = {

      requestid: requestid,
      status : status
  }

    axios.put('/retro/status_update', updateordinfo)
    .then(res => {
        console.log(res.data)
        // setMessage('POSTER ORDER SUCCESSFUL');
        // history.push('/orderposter')
        console.log("abcd")
        
    });

    updateReqId("")
    updateStatus("")

  }

//   useEffect(() => {
//     axios.get('http://localhost:4500/emp/search/' + requestid)
//         .then(response => {
//             console.log(response.data)
//             const { status } = response.data[0]
//             updateStatus(status)
//         })
//         .catch((error) => {
//             console.log(error);
//         })
// }, [])
  
  return (
    <div>
    <NavigationBar />
    <br />
    <h3>STATUS UPDATE</h3>
    {/* <h4 style={{ color: "brown" }}> {msg}</h4> */}
            <form onSubmit={handleSubmit}>

                <input type="text" value={requestid}
                    // onChange={onChangeRequestId} placeholder="Enter Request Id"
                    readOnly />
                <br /><br />

                <select value={status} onChange={onChangeStatus}>
                    <option value="">..SELECT..</option>
                    <option value="ACCEPT">ACCEPT</option>
                    <option value="REJECT">REJECT</option>
                </select>
                <br /><br />
                <input type="submit" value="SUBMIT" className="btn btn-success" />
            </form>
            <br/><br/><br/><br/><br/><br/><br/><br/>
    <Footer/>
</div>
  )

}
export default StatusPoster