import React, {useState} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { settablenum } from '../Action/Actions';

const Tables = ({table_number, settablenum}) => {
    let tablenums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

    // let [number, setNumber] = useState('')

    let active = 'btn btn-outline-warning active '
    let inactive = 'btn btn-outline-warning '
  return (
    <div>
        <h4 className='mt-2 text-center' style={{fontSize:'4vmin'}}>Please, Select Your Table Number:</h4>
         <div className='tablelist'>
        {
            tablenums.map((table, index)=>(
                <button className={table_number===table?active:inactive} key={index} onClick={()=>settablenum(table)}>{table}</button>
            ))
        }
    </div>
    </div>
   
  )
}

const mapStateToProps = state =>({
  table_number : state.TableReducer.table_num
})

export default connect(mapStateToProps,{settablenum} )(Tables);
