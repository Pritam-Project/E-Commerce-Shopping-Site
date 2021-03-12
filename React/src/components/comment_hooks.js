import React,{useState} from 'react';
import axios from 'axios';
import Footer from './footer';
import NavigationBar from './NavigationBar';
import { Link } from 'react-router-dom';



function PostComment(){
    // const [userid,setUserId] = useState("");
     //const [name,setName] = useState("");
    const [category,setCategory] = useState("");
    const [subject,setSubject] = useState("");
    const [comment,setComment] = useState("");
    //const [country,setCountry] = useState("");
    const [msg,setMessage] = useState("");

    
   // const onChangeUserId = (e) => setUserId(e.target.value);
   // const onChangeName = (e) => setName(e.target.value);
   //setName(sessionStorage.getItem('username'));
   const onChangeCategory = (e) => setCategory(e.target.value);
   const onChangeSubject =(e) => setSubject(e.target.value);
    const onChangeComment = (e) => setComment(e.target.value);
    //setCountry(sessionStorage.getItem('country'));
   // const onChangeCountry = (e) => setCountry(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Post submitted:`);
      //  console.log(`USERID: ${userid}`);
        console.log(`NAME: ${sessionStorage.getItem('username')}`);
       console.log(`CATEGORY:${category}`);
       console.log(`SUBJECT:${subject}`);
        console.log(`COMMENT:${comment}`);
        console.log(`COUNTRY:${sessionStorage.getItem('country')}`);

        const userinfo = {
           // userid: userid,
           name: sessionStorage.getItem('username'),
           category:category,
           subject:subject,
           comment: comment,
           country: sessionStorage.getItem('country'),
           
        }

        axios.post('/comment/posts', userinfo)
            .then(res => {
                console.log(res.data)
                setMessage('COMMENT POSTED SUCCESSFULLY')
            });

       // setUserId('')
      // setName('')
       setCategory('')
       setSubject('')
        setComment('')
        //setCountry('')
 }

return(
    <div>
       <NavigationBar />
        <h3>POST COMMENTS</h3>
        <h4 style={{ color: "brown" }}> {msg}</h4>
        <form onSubmit={handleSubmit}>
       
        <select required value={category} onChange={onChangeCategory}>
                    <option value="choosecategory">choose category</option>
                    <option value="catgry1">Category1</option>
                    <option value="catgry2">Category2</option>
                    <option value="catgry3">Category3</option>
                    <option value="catgry4">Category4</option>

                </select>
                <br /><br />
        <label>Subject:  </label>
        <input type="text" value={subject}
                onChange={onChangeSubject} placeholder="Enter Subject"
                required />
            <br /><br /> 
          
        <textarea rows="5" cols="50" value={comment}
                onChange={onChangeComment} placeholder="Enter your Comment"
                required/>
            <br/><br/>
           
            
            <div>
            <input type="submit" className="btn btn-info" value="Post"></input>

            </div>
            <br /> <br />
            <Link to = "/displayall" className="btn btn-info btn-lg">viewall Comments</Link>
        </form>
        <br/><br/><br/>

    <Footer />

    </div>
)

}

export default PostComment;