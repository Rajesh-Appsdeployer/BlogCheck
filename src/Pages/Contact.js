import React from "react";
import image from '../Images/call-icon-9597.svg';
import TextField from '@mui/material/TextField';
 
import '../CSS/Contact.css'

const Contact = ()=>{
    return(
        <>
        <div className="Contect">
        <div className="head">
         <div className="query">
            <h4>Have any queries?</h4>
            <p>Get a free counselling session from our experts</p>
            <div className="icon">
                            <img src={image} alt="" />
                            <div>
                                <h3>Call us on our toll free number</h3>
                                <h1>1800-123-3598</h1>
                            </div>
                        </div>
         </div>
         <form className="form" >
         <div className='input_area'>
            <div className='input_field'>
            <TextField type="number" color='warning' borderColor='red'  id="outlined-basic" label="Contact Number" variant="outlined" />
            </div>
            <div className='input_field'>
            <TextField type="text" color='warning'  id="outlined-basic" label="First Name" variant="outlined" />
            </div>
            <div className='input_field'>
            <TextField  type="text" color='warning' id="outlined-basic"  label="Email Address" variant="outlined" />
            </div>
            <div className='input_field'>
            <TextField  type="number" color='warning' id="outlined-basic"  label="Graduation Year" variant="outlined" />
            </div>
            <button   className="btn">Request Callback</button>
        </div>
         </form>
         </div>
        </div>
        </>
        )}

export default Contact ;