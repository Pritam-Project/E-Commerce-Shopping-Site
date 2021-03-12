import React from 'react'
import { Link } from 'react-router-dom';

function card() {
    return (
      <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/land1.jpeg'} alt="img" />
      <div className="card-body">
      
        <h5 className="card-title"> Music Banner</h5>
          <p className="card-text" align= "left"> Catagory: Song Banner </p>
          <p className="card-text" align= "left"> Quality: High Quality </p>
          <p className="card-text" align= "left"> Grommets : Standard Grommets </p>
           <p className="text-muted" align= "left">More of this catagory <Link to="/display_catagory_prod" className="btn btn-info" style={{color:'white'}}>View All</Link> 
         </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/land1.jpeg'} alt="img" />
      <div className="card-body"> 
        <h5 className="card-title"> folk Songs Banner</h5>
          <p className="card-text" align= "left"> Catagory: Song Banner </p>
          <p className="card-text" align= "left"> Quality: High Quality </p>
          <p className="card-text" align= "left"> Grommets : Standard Grommets </p>
          <p className="text-muted" align= "left">More of this catagory <Link to="display_catagory_prod" className="btn btn-info" style={{color:'white'}}>View All</Link> 
         </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/land1.jpeg'} alt="img" />
      <div className="card-body">
       
      <h5 className="card-title">Jazz Songs Banner</h5>
          <p className="card-text" align= "left"> Catagory: Song Banner </p>
          <p className="card-text" align= "left"> Quality: High Quality </p>
          <p className="card-text" align= "left"> Grommets : Standard Grommets </p>
          <p className="text-muted" align= "left">More of this catagory <Link to="display_catagory_prod" className="btn btn-info" style={{color:'white'}}>View All</Link> 
         </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/land1.jpeg'} alt="img" />
      <div className="card-body">
        <h5 className="card-title">Hip Hop songs Banner</h5>
          <p className="card-text" align= "left"> Catagory: Song Banner </p>
          <p className="card-text" align= "left"> Quality: High Quality </p>
          <p className="card-text" align= "left"> Grommets : Standard Grommets </p>
          <p className="text-muted" align= "left">More of this catagory <Link to="display_catagory_prod" className="btn btn-info" style={{color:'white'}}>View All</Link> 
         </p>
      </div>
    </div>
  </div>
</div>
   



   <div className="row row-cols-1 row-cols-md-3 g-4">
   <div className="col">
     <div className="card">
       <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/land1.jpeg'} alt="img" />
       <div className="card-body">
         <h5 className="card-title">Ambient Songs Banner</h5>
          <p className="card-text" align= "left"> Catagory: Song Banner </p>
          <p className="card-text" align= "left"> Quality: High Quality </p>
          <p className="card-text" align= "left"> Grommets : Standard Grommets </p>
          <p className="text-muted" align= "left">More of this catagory <Link to="display_catagory_prod" className="btn btn-info" style={{color:'white'}}>View All</Link> 
         </p>
       </div>
     </div>
   </div>
   <div className="col">
     <div className="card">
       <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/land1.jpeg'} alt="img" />
       <div className="card-body">
         <h5 className="card-title">Progressive Music Banner</h5>
          <p className="card-text" align= "left"> Catagory: Song Banner </p>
          <p className="card-text" align= "left"> Quality: High Quality </p>
          <p className="card-text" align= "left"> Grommets : Standard Grommets </p>
          <p className="text-muted" align= "left">More of this catagory <Link to="display_catagory_prod" className="btn btn-info" style={{color:'white'}}>View All</Link> 
         </p>
       </div>
     </div>
   </div>
   <div className="col">
     <div className="card">
       <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/land1.jpeg'} alt="img" />
       <div className="card-body">
       <h5 className="card-title">Country Music Banner</h5>
          <p className="card-text" align= "left"> Catagory: Song Banner </p>
          <p className="card-text" align= "left"> Quality: High Quality </p>
          <p className="card-text" align= "left"> Grommets : Standard Grommets </p>
          <p className="text-muted" align= "left">More of this catagory <Link to="display_catagory_prod" className="btn btn-info" style={{color:'white'}}>View All</Link> 
         </p>
       </div>
     </div>
   </div>
   <div className="col">
     <div className="card">
       <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/land1.jpeg'} alt="img" />
       <div className="card-body">
         <h5 className="card-title">Latin Music Banner</h5>
          <p className="card-text" align= "left"> Catagory: Song Banner </p>
          <p className="card-text" align= "left"> Quality: High Quality </p>
          <p className="card-text" align= "left"> Grommets : Standard Grommets </p>
          <p className="text-muted" align= "left">More of this catagory <Link to="display_catagory_prod" className="btn btn-info" style={{color:'white'}}>View All</Link> 
         </p>
       </div>
     </div>
   </div>
 </div>




 
  
   
    </div>

        
    );
}

export default card;