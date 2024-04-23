import React, {useState} from 'react';
import { connect } from 'react-redux';
import {setfilter, resetfilter} from '../Action/Actions'

const Filter = ({filter, setfilter}) => {
    let items = ['All-items', 'Rice Items', 'Cold Drinks', 'Pizza', 'Hot Drinks']

    // let [filter, setFilter] = useState("All-items") 

  return (
    <div>
      <center className='mt-3'>
        <span style={{fontWeight:600}}>Filter by Category:</span><br />
        <select onChange={e=>setfilter(e.target.value)} className='px-3 py-1 mt-2' value={filter}>
            {items.map((item,index)=>(
                <option key={index} value={item}>{item}</option>
            ))}
        </select>
        {/* <button className='btn btn-sm btn-warning ml-2' onClick={()=>console.log(filter)}>Submit</button> */}
      </center>
    </div>
  )
}

const mapStateToProps = (state)=>({
  filter : state.FilterReducer.category
})

export default connect(mapStateToProps,{setfilter, resetfilter})(Filter)
