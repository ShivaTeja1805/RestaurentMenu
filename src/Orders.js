import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import pictures from './Components/Pictures';
import { removeorder } from './Action/Actions';

const Orders = ({orders, removeorder}) => {
  const totalAmount = orders.reduce((total, order) => total + order.prize, 0);


  const RemoveHandler = (id, table_number)=>{
    removeorder(id, table_number)
  }

  return (
    <div>
      <center>
      <nav className='nav navbar'> 
      <Link to={'/'}>
      <i className="fa-solid fa-circle-arrow-left text-warning" style={{fontSize:'4vmin'}}></i>
      </Link>
        <a className='logo' href='3'><span className='aroma'>Aroma</span>Kitchens</a>
      </nav>
        <div>
          <div className='bg-secondary p-2'>
            <h1 className=' text-warning' style={{fontSize:'6vmin'}}>Your Orders</h1>
            <h5 className='text-warning' style={{fontSize:'3vmin'}}>Total Billing Amount: {totalAmount}</h5>
          </div>
          
          {orders.length > 0 ? (
                    <div className='container mt-3'>
                        <div className="row">
                        {orders.map(item => {
                            // Find the matching picture for the current item
                            const matchingPicture = pictures.find(pic => pic.id === item.id);
                            // Use the URL of the matching picture if found, otherwise use item.url
                            const src = matchingPicture ? matchingPicture.url : item.url;

                            return (
                                <div className='col-sm-6 col-md-3 mt-2' key={item.id} >
                                    <div className='card'>
                                        <img src={src} className='card-img-top ' style={{ height: '200px', backgroundSize:'cover'}} alt='...' />
                                        <div className="card-body">
                                            <h5>Table: {item.table_number}</h5>
                                            <h6 className="card-title">{item.name}</h6>
                                            <p className="card-text">Billing Amount: Rs.{item.prize}</p>
                                            <button className='btn btn-danger' onClick={()=>RemoveHandler(item.id, item.table_number)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                      </div>
                    </div>
                ) : (
                    <div className='container d-flex justify-content-center align-items-center' style={{height:'50vh'}}>
                        <h1>No Orders Yet!!</h1>
                    </div>
                )}
        </div>
      </center>
    </div>
  )
}

const mapStateToProps=(state)=>({
  orders:state.OrderReducer
})

export default connect(mapStateToProps, {removeorder})(Orders);
