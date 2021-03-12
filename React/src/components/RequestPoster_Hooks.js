//This poster is done by tapai
import React from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';
import {Redirect} from 'react-router-dom';

function RequestPoster() {

    // const [posterid, setPosterId] = useState("");
    // const [cusname, setCusName] = useState("");
    // const [cusemail, setCusEmail] = useState("");
    // const [cusmobile, setCusmobile] = useState("");
    // const [posterquentity, setQuentity] = useState("");
    // const [delivery_date, setdelivery_date] = useState("");
    // const [msg, setMessage] = useState("");

    // const onChangePosterId = (e) => setPosterId(e.target.value);
    // const onChangeCusName = (e) => setCusName(e.target.value);
    // const onChangeCusEmail = (e) => setCusEmail(e.target.value);
    // const onChangeCusMobile = (e) => setCusmobile(e.target.value);
    // const onChangeQuentity = (e) => setQuentity(e.target.value);
    // const onChangedelivery_date = (e) => setdelivery_date(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`poster 1`);
        // console.log(`NAME: ${cusname}`);
        // console.log(`EMAIL: ${cusemail}`);

        const posterOrdinfo = {

            posterid: "00001",
            postername: "poster 1",
            customername: sessionStorage.getItem('username'),
            customeremail: sessionStorage.getItem('useremail')
            // customermobile: cusmobile,
            // quentity: posterquentity,
            // delivery_date : delivery_date
        }

        axios.post('/retro/poster_request', posterOrdinfo)
            .then(res => {
                console.log(res.data)
               alert('POSTER ORDER SUCCESSFUL')
            });

        // setPosterId('')
        // setCusName('')
        // setCusEmail('')
        // setCusmobile('')
        // setQuentity('')
        // setdelivery_date('')

    }

    const handleSubmit_1 = (evt) => {
      evt.preventDefault();
      console.log(`poster 2`);
      const posterOrdinfo = {

          posterid: "00002",
          postername: "poster 2",
          customername: sessionStorage.getItem('username'),
          customeremail: sessionStorage.getItem('useremail')
      }

      axios.post('/retro/poster_request', posterOrdinfo)
          .then(res => {
              console.log(res.data)
             alert('POSTER ORDER SUCCESSFUL')
          });
  }
  const handleSubmit_2 = (evt) => {
    evt.preventDefault();
    console.log(`poster 3`);

    const posterOrdinfo = {

        posterid: "00003",
        postername: "poster 3",
        customername: sessionStorage.getItem('username'),
        customeremail: sessionStorage.getItem('useremail')
    }

    axios.post('/retro/poster_request', posterOrdinfo)
        .then(res => {
            console.log(res.data)
           alert('POSTER ORDER SUCCESSFUL')
        });
}
const handleSubmit_3 = (evt) => {
  evt.preventDefault();
  console.log(`poster 4`);

  const posterOrdinfo = {

      posterid: "00004",
      postername: "poster 4",
      customername: sessionStorage.getItem('username'),
      customeremail: sessionStorage.getItem('useremail')
  }

  axios.post('/retro/poster_request', posterOrdinfo)
      .then(res => {
          console.log(res.data)
         alert('POSTER ORDER SUCCESSFUL')
      });
}
const handleSubmit_4 = (evt) => {
  evt.preventDefault();
  console.log(`poster 5`);

  const posterOrdinfo = {

      posterid: "00005",
      postername: "poster 5",
      customername: sessionStorage.getItem('username'),
      customeremail: sessionStorage.getItem('useremail')
  }

  axios.post('/retro/poster_request', posterOrdinfo)
      .then(res => {
          console.log(res.data)
         alert('POSTER ORDER SUCCESSFUL')
      });
}
const handleSubmit_5 = (evt) => {
  evt.preventDefault();
  console.log(`poster 6`);

  const posterOrdinfo = {

      posterid: "00006",
      postername: "poster 6",
      customername: sessionStorage.getItem('username'),
      customeremail: sessionStorage.getItem('useremail')
  }

  axios.post('/retro/poster_request', posterOrdinfo)
      .then(res => {
          console.log(res.data)
         alert('POSTER ORDER SUCCESSFUL')
      });
}
const handleSubmit_6 = (evt) => {
  evt.preventDefault();
  console.log(`poster 7`);

  const posterOrdinfo = {

      posterid: "00007",
      postername: "poster 7",
      customername: sessionStorage.getItem('username'),
      customeremail: sessionStorage.getItem('useremail')
  }

  axios.post('/retro/poster_request', posterOrdinfo)
      .then(res => {
          console.log(res.data)
         alert('POSTER ORDER SUCCESSFUL')
      });
}
const handleSubmit_7 = (evt) => {
  evt.preventDefault();
  console.log(`poster 8`);

  const posterOrdinfo = {

      posterid: "00008",
      postername: "poster 8",
      customername: sessionStorage.getItem('username'),
      customeremail: sessionStorage.getItem('useremail')
  }

  axios.post('/retro/poster_request', posterOrdinfo)
      .then(res => {
          console.log(res.data)
         alert('POSTER ORDER SUCCESSFUL')
      });
}
  
let authuser = sessionStorage.getItem('Key_Veriable')
console.log(authuser)
if (authuser === "USER") {
    return (
      <div>
        <NavigationBar />
      {/*Frist row Starts*/}
      <div class="row">

        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">


              <div class="row">
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
    
                      <div class="card" style={{ width: "18rem" }}>
                        <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/land1.jpeg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit}>
                        <input type="submit" class="btn btn-danger" value="REQUEST" />
                          {/* <a href="#" class="btn btn-danger">Buy Now</a> */}  
                        </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">        
                      <div class="card" style={{ width: "18rem" }}>
                        <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/land1.jpeg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_1}>
                        <input type="submit" class="btn btn-danger" value="REQUEST" />
                           {/* <a href="#" class="btn btn-danger">Buy Now</a> */}
                           </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>



        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <div class="row">

                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="card" style={{ width: "18rem" }}>
                        <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/land1.jpeg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_2}>
                        <input type="submit" class="btn btn-danger" value="REQUEST" />
                           {/* <a href="#" class="btn btn-danger">Buy Now</a> */}
                           </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      
                      <div class="card" style={{ width: "18rem" }}>
                        <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/land1.jpeg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_3}>
                        <input type="submit" class="btn btn-danger" value="REQUEST" />
                           {/* <a href="#" class="btn btn-danger">Buy Now</a> */}
                           </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
      {/*End of First row*/}

      {/* Start Second Row */}

      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">


              <div class="row">
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="card" style={{ width: "18rem" }}>
                        <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/land1.jpeg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_4}>
                        <input type="submit" class="btn btn-danger" value="REQUEST" />
                           {/* <a href="#" class="btn btn-danger">Buy Now</a> */}
                           </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="card" style={{ width: "18rem" }}>
                        <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/land1.jpeg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_5}>
                        <input type="submit" class="btn btn-danger" value="REQUEST" />
                             {/* <a href="#" class="btn btn-danger">Buy Now</a> */}
                             </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>



        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <div class="row">

                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      
                      <div class="card" style={{ width: "18rem" }}>
                        <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/land1.jpeg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_6}>
                        <input type="submit" class="btn btn-danger" value="REQUEST" />
                          {/* <a href="#" class="btn btn-danger">Buy Now</a> */}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                    
                      <div class="card" style={{ width: "18rem" }}>
                        <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/land1.jpeg'} alt="img" />
                        <div class="card-body">
                        <form onSubmit={handleSubmit_7}>
                        <input type="submit" class="btn btn-danger" value="REQUEST" />
                        {/* <a href="#" class="btn btn-danger">Buy Now</a> */}
                        </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>

      {/*End Second row */}
      <Footer/>
    </div>

  );
}
else {
    return (<Redirect to="/login" />)

}


    //     <div>
    //         <NavigationBar />
    //         <br />
    //         <h3>POSTER ORDER</h3>
    //         <h4 style={{ color: "brown" }}> {msg}</h4>
    //         <form onSubmit={handleSubmit}>

    //             <input type="text" value={posterid}
    //                 onChange={onChangePosterId} placeholder="Enter Poster Id"
    //                 required />
    //             <br /><br />

    //             <input type="text" value={cusname}
    //                 onChange={onChangeCusName} placeholder="Enter Name"
    //                 required />
    //             <br /><br />

    //             <input type="email" value={cusemail}
    //                 onChange={onChangeCusEmail} placeholder="Enter Email"
    //                 required />
    //             <br /><br />

    //             <input type="number" value={cusmobile}
    //                 onChange={onChangeCusMobile} placeholder="Enter Mobile No"
    //                 required />
    //             <br /><br />

    //             <input type="number" value={posterquentity}
    //                 onChange={onChangeQuentity} placeholder="Enter Quentity"
    //                 required />
    //             <br /><br />
    //             <input type="date" value={delivery_date}
    //                 onChange={onChangedelivery_date} placeholder="Enter Delivary Date"
    //                 required />
    //             <br /><br />



    //             <input type="submit" value="REQUEST" />

    //         </form>
    //     </div>
    // )

}
export default RequestPoster