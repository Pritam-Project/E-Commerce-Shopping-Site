import React , {useState,useEffect} from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import Footer from './footer';

function AdminUpdatePoster(props)  {

    const [posterSpec, setPosterSpec] = useState("");
    const [posterDesc, setPosterDesc] = useState("");
    const [posterCost, setPosterCost] = useState("");
    const [posterSize, setPosterSize] = useState("");
    const [proid, setPosterId] = useState("");
    const [msg, setMessage] = useState("");
    const [posterCat, setPosterCat] = useState("");
    

    const onChangeProDes = (e) => setPosterDesc(e.target.value);
    const onChangeProCat = (e) => setPosterCat(e.target.value);
    const onChangeProSpe = (e) => setPosterSpec(e.target.value);
    const onChangeProCost = (e) => setPosterCost(e.target.value);
    const onChangeProFile = (e) => setPosterSize(e.target.value);
    const onChangeProID = (e) => setPosterId(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log(`Product submitted:`);
        // console.log(`Product ID : ${proid}`);
        // console.log(`Specification: ${prospe}`);
        // console.log(`Description: ${prodes}`);
        // console.log(`Product Cost: ${procost}`);
        // console.log(`Product File: ${profile}`);

        const AdminPosterUpdate = {
            adminid:proid, 
            posterSpecification: posterSpec,
            posterDescription: posterDesc,
            posterPrice:posterCost,
            posterSize: posterSize,
            //adminemail:adminEmail,
            catagory:posterCat,
        }

        axios.put('/admin/poster/update' , AdminPosterUpdate)
            .then(res => {
                console.log(res.data)
                alert('Product Update SUCCESSFUL')
                setMessage('Updated')
                
            });

        setPosterCost('')
        setPosterDesc('')
        setPosterSpec('')
        setPosterSize('')
        setPosterId('')
        setPosterCat('')
        }


        useEffect(() => {
            let id = sessionStorage.getItem('Product ID')
            if (id == null)
                id = props.id
            axios.post('/admin/search/'+id)
                .then(response => {
                    console.log(response.data)
                    const {desproid,desprocat, desprospe, desprodes, desprosize,desprocost} = response.data[0]
                    setPosterSpec(desprospe)
                    setPosterDesc(desprodes)
                    setPosterCost(desprocost)
                    setPosterId(desproid)
                    setPosterSize(desprosize)
                    setPosterCat(desprocat)
                    
                })
                .catch((error) => {
                    console.log(error);
                })
        }, [props.id])




        return (
            <div>
                <NavigationBar/>
            
            <div className="container">
                <div className="row">
                    <Card>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <h3>Update Product</h3>
                        <h4 style={{ color: "teal" }}> {msg}</h4>
                        <div>
                        <input type="hidden"  
                    value = {proid}  onChange={onChangeProID}  readOnly/>
                        </div>
                        <div>
                        
                        <label htmlFor="text"><b>Poster Specification</b></label><br/>
                        <input type="text" placeholder="Enter Spicification" 
                        value = {posterSpec}  onChange={onChangeProSpe}  required/>
                        </div>
                        <br/>
                        <div>
                        
                        <label htmlFor="text"><b>Poster Catagory</b></label><br/>
                        <input type="text" placeholder="Enter Catagory" 
                        value = {posterCat}  onChange={onChangeProCat}  required/>
                        </div>
                        <div>
                        <label htmlFor="text"><b>Poster Description</b></label><br/>
                        <input type="text" placeholder="Poster Description" 
                        value = {posterDesc}  onChange={onChangeProDes}  required/>
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
                        value = {posterSize}  onChange={onChangeProFile}  required/>
                        </div>
                        {/* <div className="form-group">
                            <input type="file" value = {profile}  
                            onChange={onChangeProFile} required/>
                        </div> */}
                        <div className="form-group">
                            <button className="btn btn-secondary" type="submit">Update</button>
                        </div>
                    </form>
                    </Card>
                </div>
            </div>
            <Footer/>
            </div>
        );
    
}
export default AdminUpdatePoster