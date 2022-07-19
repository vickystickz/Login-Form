import React from 'react';
import correct from './Images/correct.png';
import './App.css';


function Popup () {


    return (
        <div className='popup-message'>
            <img className='correct-img' src={correct} alt="Correct" width="80px" height="100px"/>
            <h1>Login Successful</h1>
            <p>Redirecting to your dashboard......</p>
        </div>
    )

}

export default Popup