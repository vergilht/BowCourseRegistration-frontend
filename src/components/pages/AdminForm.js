import { AdminNavigation } from "./Navigation";
import React from "react";
import { useLocation } from "react-router-dom";

export const AdminForm = () => {
    const location = useLocation();
    const query = location.search;
    const queryParams = new URLSearchParams(query);

    const firstName = queryParams.get("firstName");
    const lastName = queryParams.get("lastName");
    const phoneNumber = queryParams.get("phoneNumber");
    const email = queryParams.get("email");
    const comments = queryParams.get("comments");

    return (
        <>
            <AdminNavigation />
            Admin Form
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Phone Number: {phoneNumber}</p>
            <p>Email: {email}</p>
            <p>Question/Comment: {comments}</p>
        </>
    );
};
