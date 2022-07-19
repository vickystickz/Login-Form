import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
// import { Icon } from '@iconify/react';
import Popup from './Popup';

function Form_validation() {
  const initialValues = {username: "", email: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [popupShow, setPopupShow] = useState(false);



  const handleChange = (e) => { 
    const { name, value} = e.target;
    setFormValues({...formValues, [name]:value});
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors])

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username){
      errors.username = "Username is rquired";
    }
    if (!values.email){
      errors.email = "Email address is rquired";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.password){
      errors.password= "Password is rquired";
    } else if (values.password < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password > 10) {
      errors.password = "Password must not exceed more than 10 characters";
    }
    return errors;
  }

 

  

  return (
    <div className='container'>
      {
        popupShow & Object.keys(formErrors).length === 0 && isSubmit ?<Popup />:null
      }
      {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      {Object.keys(formErrors). length === 0 && isSubmit ? (<div className='form-message'><label>You signed in sucessfully</label><Icon icon="emojione:white-heavy-check-mark"width="27px" /></div>): 
      
      (<div></div>)} */}
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='form-fields'>
          <div className='field'>
            <label>Username</label>
            <input 
            type="text" 
            name="username" 
            placeholder='Username' 
            value={ formValues.username}
            onChange={handleChange}
            />
            <p className="error-text">{formErrors.username}</p>
          </div>
          
          <div className='field'>
            <label>Email</label>
            <input 
            type="email"
            name="email" 
            placeholder='Email' 
            value={ formValues.email}
            onChange={handleChange}
            />
            <p className="error-text">{formErrors.email}</p>
          </div>
          
          <div className='field'>
            <label>Password</label>
            <input 
            type="password" 
            name="password" 
            placeholder='Password' 
            value={ formValues.password}
            onChange={handleChange}
            />
            <p className="error-text">{formErrors.password}</p>
          </div>
          <button className='form-button'onClick={()=>setPopupShow(true)}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form_validation;
