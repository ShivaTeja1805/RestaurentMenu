import React from 'react';
import Navbar from './Components/Navbar';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      <center>
        <Navbar />
        <div className='container d-flex flex-column justify-content-center align-item-center' style={{height:'80svh'}}>
        <h1 style={{fontSize:'8vmin'}} >Page Not Found</h1>
        <h1>ERROR 404</h1>
        <Link to={'/RestaurentMenu'}><button className='btn btn-warning'>Back to Home</button></Link>
        </div>
      </center>
    </div>
  )
}

export default PageNotFound;
