import React, { useState } from "react";
import '../css/Support.css';

export const Support = () => {
    const [Name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const submittedData = {
            Name,
            phoneNumber,
            email,
            comments,
        };
        
        alert(`We will answer your questions shortly, ${submittedData.Name}. We will contact you at ${submittedData.phoneNumber} or ${submittedData.Email}.`);

        // Reset the form
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setEmail('');
        setComments('');
    };

    const handleChange = (event) => {
        const { id, value } = event.target;

        switch (id) {
            case 'name':
                setName(value);
                break;
            case 'phone':
                setPhoneNumber(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'comments':
                setComments(value);
                break;
            default:
                break;
        }
    };

    return (
        <div className="support-form">
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit}>
                <p>Name:</p>
                <input type="text" id="name" value={Name} onChange={handleChange} />

                <p>Phone Number:</p>
                <input type="text" id="phone" value={phoneNumber} onChange={handleChange} />

                <p>Email:</p>
                <input type="text" id="email" value={email} onChange={handleChange} />

                <p>Question:</p>
                <textarea name="comments" id="comments" value={comments} onChange={handleChange}></textarea>

                <div className="submit">
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    );
};

export default Support;
