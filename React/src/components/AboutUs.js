import React from 'react'
import Navigation from './NavigationBar'
import Footer from './footer'


function aboutus() {
    return (

      <div>
        <Navigation/>
            <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body m-5">
      
      
            <p    className="text-info">We are Adding New Banner Designs that feature the quotations along with textured backgrounds and photos</p>
            <p  className="text-info">Banners can be printed in simplex or duplex, that means one-sided or two-sided.It is a type of poster printing.</p>
            <p   className="text-info">Banner printing generally employs  much larger size than regular printings, may be printed one- or two-sided.</p>
      
      
      
      
      
      
          <div className="card text-dark bg-info mb-3" >
          <div className="card-body">
          <p  className="text-info">text here.</p>
          <h1 className="text-white">ABOUT US</h1>
          <p  className="text-info">text here.</p>
        </div>
      </div>
      
      
      
            <div className="row g-0">
            <div className="col-md-4">
            <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/Aboutus1.jpeg'} alt="img" />
          </div>
          <div className="col-md-8">
            <div className="card-body m-5">
              <h4   className="text-lg-left text-info"   >OUR FOUNDING</h4>
              <p  className="text-lg-left" >Music  posters , a makeover venture of Tiara Ventures is dedicated to change the way how the walls in your house look like we make posters which will lift your mood ,
              reeve up your emotions and hang on your walls to make your drwaing room or bedroom reflect your teste, culture and signature. We are
              a bunch of young enterpreneurs having rich experience in relevent backgrounds and we commit to deliver high quality creative and
              innovative posters at your doorstep on time.</p>
              
            </div>
          </div></div>
      
      
      
      
          
      
      
      <div className="row g-0">
            <div className="col-md-8">
            <div className="card-body m-5">
              <h4   className="text-lg-left text-info"   >OUR STREGTH</h4>
              <p  className="text-lg-left" >Music  posters , a makeover venture of Tiara Ventures is dedicated to change the way how the walls in your house look like we make posters which will lift your mood ,
              reeve up your emotions and hang on your walls to make your drwaing room or bedroom reflect your teste, culture and signature. We are
              a bunch of young enterpreneurs having rich experience in relevent backgrounds and we commit to deliver high quality creative and
              innovative posters at your doorstep on time.</p>
              
            </div>
          </div>
          <div className="col-md-4">
          <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/Aboutus5.jpeg'} alt="img" /> 
          </div></div>
      
      
      
      
      
          <div className="row g-0">
            <div className="col-md-4">
            <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/Aboutus7.jpeg'} alt="img" />
          </div>
          <div className="col-md-8">
            <div className="card-body m-5">
              <h4   className="text-lg-left text-info"   >OUR AIM</h4>
              <p  className="text-lg-left" >Music  posters , a makeover venture of Tiara Ventures is dedicated to change the way how the walls in your house look like we make posters which will lift your mood ,
              reeve up your emotions and hang on your walls to make your drwaing room or bedroom reflect your teste, culture and signature. We are
              a bunch of young enterpreneurs having rich experience in relevent backgrounds and we commit to deliver high quality creative and
              innovative posters at your doorstep on time.</p>
              
            </div>
          </div></div>
      
      
      
      
      
      
      
      
      
          <div className="card text-dark bg-info mb-3" >
          <div className="card-body">
          <p  className="text-info">text here.</p>
          <h5  className="text-white">www.musicposters.org</h5>
          <p >We believe in progress where everything can be achieved by hardwork</p>
        </div>
      </div>
      
      
      
            <div className="card-group">
        <div className="card">
        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/Aboutus4.jpeg'} alt="img" />
          <div className="card-body">
           
            <p >Music  posters , a makeover venture of Tiara Ventures is dedicated to change the way how the walls in your house look like we make posters which will lift your mood ,
              reeve up your emotions and hang on your walls to make your drwaing room or bedroom reflect your teste, culture and signature and it will work longer. </p>
            <p ><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/Aboutus3.jpeg'} alt="img" />
          <div className="card-body">
            
            <p >Music  posters , a makeover venture of Tiara Ventures is dedicated to change the way how the walls in your house look like we make posters which will lift your mood ,
              reeve up your emotions and hang on your walls to make your drwaing room or bedroom reflect your teste, culture and signature and it will work longer. </p>
            <p ><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
        <img className="d-block w-100" src={process.env.PUBLIC_URL + '/images/Aboutus2.jpeg'} alt="img" />
          <div className="card-body">
           
            <p >Music  posters , a makeover venture of Tiara Ventures is dedicated to change the way how the walls in your house look like we make posters which will lift your mood ,
              reeve up your emotions and hang on your walls to make your drwaing room or bedroom reflect your teste, culture and signature and it will work longer. </p>
            <p ><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      
      
      
      </div></div></div></div>
      <Footer/>
      </div>
          );
      }
     
  

export default aboutus;