import React, { useEffect, useState } from 'react';
import pictures from './Pictures';
import { connect } from 'react-redux';
import { placeorder, resettablenum, resetfilter } from '../Action/Actions';
import { Modal, Button } from 'react-bootstrap'; // Import Bootstrap modal components

const Card = ({filter,table_number, placeorder, resettablenum, resetfilter}) => {
    const [items, setItems] = useState([]);
    const [cloneData, setCloneData] = useState([]);
    const [showAlert, setShowAlert] = useState(false); // State to control the visibility of the alert
    const [tableAlert, settableAlert] = useState(false);

    useEffect(() => {
        fetch('https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json')
            .then(res => res.json())
            .then(data => {
                setItems(data.items);
                setCloneData(data.items)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    useEffect(()=>{
        if(filter!=='All-items'){
            let specific = cloneData.filter((item)=>item.category===filter)
            console.log(specific)
            setItems(specific)
        }
        else{
            setItems(cloneData)
        }
    },[filter])


    const Handler = async (id, name, prize, url)=>{
        if(table_number!==null){
            await placeorder(id,name,prize,table_number, url)
            await resettablenum();
            await resetfilter();
            setShowAlert(true);
            // alert("Order Placed Successfully")
            return(
                <div class="alert alert-success" role="alert">
                Order Placed Successfully
                </div>
            )
        }else{
            settableAlert(true)
            // alert('Select the Table First!!')
        }
        console.log(placeorder)
    }

    return (
        <div>
            <center>
                    {items.length > 0 ? (
                    <div className='container mt-3'>
                        <div className="row">
                        {items.map(item => {
                            // Find the matching picture for the current item
                            const matchingPicture = pictures.find(pic => pic.id === item.id);
                            // Use the URL of the matching picture if found, otherwise use item.url
                            const src = matchingPicture ? matchingPicture.url : item.url;

                            return (
                                <div className='col-sm-6 col-md-4 col-6 mt-2 ' key={item.id} >
                                    <div className='card'>
                                        <img src={src} className='card-img-top ' style={{ height: '200px', backgroundSize:'cover'}} alt='...' />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">Rs.{item.prize}</p>
                                            <button className='btn btn-primary' onClick={()=>Handler(item.id, item.name, item.prize, item.url)}>Order</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    </div>
                ) : (
                    <div className='container d-flex justify-content-center align-items-center' style={{height:'50vh'}}>
                        <div class="spinner-border text-warning mt-5" style={{height:'60px', width:'60px'}}>
                        </div>
                    </div>
                )}

                {/* Render the modal alert if showAlert is true */}
                <Modal show={showAlert} >
                    <Modal.Header  style={{backgroundColor:'lightgreen'}}>
                        <Modal.Title>Order Placed Successfully</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='fw-bolder'>Your order has been successfully placed.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => setShowAlert(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={tableAlert}>
                    {/* <Modal.Header  style={{backgroundColor:'lightred'}}>
                        <Modal.Title>Select the Table first!!</Modal.Title>
                    </Modal.Header> */}
                    <Modal.Body className=' d-flex justify-content-between' style={{backgroundColor:'#FF7F7F', fontWeight:'bolder'}}> Select the Table first!!
                    <Button variant="primary" onClick={() => settableAlert(false)}>
                            Close
                    </Button>
                    </Modal.Body>
                </Modal>
            </center>
        </div>
    );
};

const mapSateToProps = state=>({
    filter : state.FilterReducer.category,
    table_number:state.TableReducer.table_num
})

export default connect(mapSateToProps, {placeorder, resettablenum, resetfilter})(Card);
