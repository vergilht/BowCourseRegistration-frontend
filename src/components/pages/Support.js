import React, { useState } from "react";
import '../css/Support.css';

export const Support = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const submittedData = {
            firstName,
            lastName,
            phoneNumber,
            email,
            comments,
        };
        
        alert(`We will answer your questions shortly, ${submittedData.firstName} ${submittedData.lastName}. We will contact you at ${submittedData.phoneNumber}.`);

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
            case 'fname':
                setFirstName(value);
                break;
            case 'lname':
                setLastName(value);
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
                <p>First Name:</p>
                <input type="text" id="fname" value={firstName} onChange={handleChange} />

                <p>Last Name:</p>
                <input type="text" id="lname" value={lastName} onChange={handleChange} />

                <p>Phone Number:</p>
                <input type="text" id="phone" value={phoneNumber} onChange={handleChange} />

                <p>Email:</p>
                <input type="text" id="email" value={email} onChange={handleChange} />

                <p>Question/Comment:</p>
                <textarea name="comments" id="comments" value={comments} onChange={handleChange}></textarea>

                <div className="submit">
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    );
};

export default Support;
