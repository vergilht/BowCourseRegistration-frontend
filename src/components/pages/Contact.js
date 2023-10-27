import React, { useState } from "react";

export const Contact = () => {
    const [inputText, setInputText] = useState('');
    const [displayedText, setDisplayedText] = useState('');

    const handleChange = (event) => {
        setInputText(event.target.value);
    };

    const displayInfo = () => {
        setDisplayedText(inputText);
    };

    return (
        <div>
            <h1>Contact Form</h1>

            <p>First Name</p>
            <input type="text" 
            id="fname" value={inputText} 
            onChange={handleChange}></input>

            <p>Last Name</p>
            <input type="text" 
            id="lname" value={inputText}
            onChange={handleChange}></input>

            <p>Phone Number</p>
            <input type="text" 
            id="phone" value={inputText}
            onChange={handleChange}></input>

            <p>Email</p>
            <input type="text" 
            id="email" value={inputText}
            onChange={handleChange}></input>

            <button onclick={displayInfo()}>Display Info</button>

            <p id={displayedText}></p>
        </div>
    );
}

export default Contact;
