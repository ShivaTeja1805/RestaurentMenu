import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const Navbar = ({orders}) => {
  return (
    <div>
      <nav className='nav navbar'> 
        <a className='logo' href='3'><span className='aroma'>Aroma</span>Kitchens</a>
        <Link to={'./Orders'}>
        <button type="button" class="btn btn-warning position-relative .text-light" style={{color: 'white', padding:'1vmin 3vmin', fontSize:'3vmin'}}>
            Orders
            <span className="badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{height:'3.5vmin', width:'3.5vmin'}}>
                {orders.length}
            </span>
        </button>
        </Link>

      </nav>

      
    </div>
  )
}

const mapStateToProps = (state)=>({
  orders : state.OrderReducer
})

export default connect(mapStateToProps)(Navbar);
