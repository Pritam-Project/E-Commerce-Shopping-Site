import React , {useState,useEffect} from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

function Updatepro(props)  {

    const [prospe, setProSpe] = useState("");
    const [procat, setProCat] = useState("");
    const [prodes, setProDes] = useState("");
    const [procost, setProCost] = useState("");
    const [prosize, setProSize] = useState("");
    const [profile, setProFile] = useState("");
    const [proid, setProId] = useState("");
    const [msg, setMessage] = useState("");


    const onChangeProDes = (e) => setProDes(e.target.value);
    const onChangeProSpe = (e) => setProSpe(e.target.value);
    const onChangeProCost = (e) => setProCost(e.target.value);
    const onChangeProFile = (e) => setProFile(e.target.value);
    const onChangeProID = (e) => setProId(e.target.value);
    const onChangeProCat = (e) => setProCat(e.target.value);
    const onChangeProSize = (e) => setProSize(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Product submitted:`);
        console.log(`Product ID : ${proid}`);
        console.log(`Product Catagory : ${procat}`);
        console.log(`Specification: ${prospe}`);
        console.log(`Description: ${prodes}`);
        console.log(`Product Cost: ${procost}`);
        console.log(`Product Size : ${prosize}`);
        console.log(`Product File: ${profile}`);

        const desinfo = {
            desproid:proid,
            desprocat:procat,
            desprospe:prospe,
            desprodes:prodes,
            desprocost:procost,
            desprosize:prosize,
            desprofile:profile
        }

        axios.put('/des/update' , desinfo)
            .then(res => {
                console.log(res.data)
                setMessage('Product Update SUCCESSFUL')
            });

        setProCost('')
        setProCat('')
        setProDes('')
        setProSize('')
        setProSpe('')
        setProFile('')
        setProId('')
        }


        useEffect(() => {
            let id = sessionStorage.getItem('Product ID')
            if (id == null)
                id = props.id
            axios.get('/des/search/' + id)
                .then(response => {
                    console.log(response.data)
                    const {desproid,desprocat, desprospe, desprodes, desprocost,desprosize} = response.data[0]
                    setProSpe(desprospe)
                    setProCat(desprocat)
                    setProDes(desprodes)
                    setProCost(desprocost)
                    setProSize(desprosize)
                    setProId(desproid)
                    
                })
                .catch((error) => {
                    console.log(error);
                })
        }, [])




        return (
            <div className="container">
            <div className="row">
                <Card>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <h3>Add Product</h3>
                    <h4 style={{ color: "brown" }}> {msg}</h4>
                    <div>
                    <label for="text"><b>Product ID</b></label><br/>
                    <input type="text"  
                    value = {proid}  onChange={onChangeProID}  readOnly/>
                    </div>
                    <br/>
                    <div>
                    <label for="text"><b>Product Catagory</b></label><br/>
                    <input type="text"  placeholder="Enter Catagory"
                    value = {procat}  onChange={onChangeProCat}  required/>
                    </div>
                    <br/>
                    <div>
                    <label for="text"><b>Product Specification</b></label><br/>
                    <input type="text" placeholder="Enter Spicification" 
                    value = {prospe}  onChange={onChangeProSpe}  required/>
                    </div>
                    <br/>
                    <div>
                    <label for="text"><b>Product Description</b></label><br/>
                    <input type="text" placeholder="Enter Description" 
                    value = {prodes}  onChange={onChangeProDes}  required/>
                    </div>
                    <br/>
                    <div>
                    <label for="text"><b>Product Cost</b></label><br/>
                    <input type="text" placeholder="Enter Cost" 
                    value = {procost}  onChange={onChangeProCost}  required/>
                    </div>
                    <br/>
                    <div>
                    <label for="text"><b>Product ID</b></label><br/>
                    <input type="text" placeholder="Enter Size"
                    value = {prosize}  onChange={onChangeProSize}  required/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="file" value = {profile}  
                        onChange={onChangeProFile} required/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Upload Product</button>
                    </div>
                </form>
                </Card>
            </div>
        </div>
        );
    
}

    export default Updatepro;
