import React , {useState} from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import Footer from './footer';

function AdminAddNewPoster()  {

    const [posterSpec, setProSpe] = useState("");
    const [posterDesc, setProDes] = useState("");
    const [posterCost, setProCost] = useState("");
    const [posterSize, setProSize] = useState("");
    const [posterCat, setProCat] = useState("");
    //const [profile, setProFile] = useState("");
    const [msg, setMessage] = useState("");


    const onChangeProDes = (e) => setProDes(e.target.value);
    const onChangePosterSprc = (e) => setProSpe(e.target.value);
    const onChangeProCost = (e) => setProCost(e.target.value);
    const onChangeProSize = (e) => setProSize(e.target.value);
    const onChangeProCat = (e) => setProCat(e.target.value);

    //const onChangeProFile = (e) => setProFile(e.target.value);


    const handleSubmit = (evt) => {
        evt.preventDefault();
        const adminEmail = sessionStorage.getItem("adminemail")
        console.log(`Product submitted:`);
        console.log(`Specification: ${posterSpec}`);
        console.log(`Description: ${posterDesc}`);
        console.log(`Product Cost: ${posterCost}`);
       // console.log(`Product File: ${profile}`);

        const adminPosterAdd = {
            posterSpecification:  posterSpec,
            posterDescription:  posterDesc,
            posterPrice: posterCost,
            posterSize: posterSize,
            adminemail:adminEmail,
            catagory:posterCat,
           // desprofile: profile
        }

        axios.post('/admin/addposter', adminPosterAdd)
            .then(() => {
                //console.log(res.data)
                alert('Poster Added Successfully')
                setMessage('Poster Added Successfully')
            });
           
        setProCost('')
        setProDes('')
        setProSpe('')
        setProSize('')
        setProCat('')
        }

        return (
            <div>
                <NavigationBar/>
            <div className="container">
                <div className="row">
                    <Card>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <h3>Add Product</h3>
                        <h4 style={{ color: "teal" }}> {msg}</h4>
                        <div>
                        <label htmlFor="text"><b>Poster Specification</b></label><br/>
                        <input type="text" placeholder="Enter Spicification" 
                        value = {posterSpec}  onChange={onChangePosterSprc}  required/>
                        </div>
                        <br/>
                        <div>
                        <label htmlFor="text"><b>Poster Description</b></label><br/>
                        <input type="text" placeholder="Poster Description" 
                        value = {posterDesc}  onChange={onChangeProDes}  required/>
                        </div>

                        <div>
                        <label htmlFor="text"><b>Poster Catagory</b></label><br/>
                        <input type="text" placeholder="Poster Description" 
                        value = {posterCat}  onChange={onChangeProCat}  required/>
                        </div>


                        <br/>
                        <div>
                        <label htmlFor="text"><b>Poster Price</b></label><br/>
                        <input type="text" placeholder="Enter Poster Price" 
                        value = {posterCost}  onChange={onChangeProCost}  required/>
                        </div>
                        <br/>
                        <div>
                        <label htmlFor="text"><b>Poster Size</b></label><br/>
                        <input type="text" placeholder="Enter Poster Size" 
                        value = {posterSize}  onChange={onChangeProSize}  required/>
                        </div>
                        {/* <div className="form-group">
                            <input type="file" value = {profile}  
                            onChange={onChangeProFile} required/>
                        </div> */}
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Add New Product</button>
                        </div>
                    </form>
                    </Card>
                </div>
            </div>
            <Footer />
            </div>
        );
    
}

    export default AdminAddNewPoster;
