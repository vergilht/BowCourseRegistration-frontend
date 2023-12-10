import React, { useState, useEffect } from "react";
import { AdminNavigation } from "./Navigation.js";
import { Table } from "react-bootstrap";

export const AdminForm = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5070/admin/contact"); // Replace with your actual API endpoint
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <>
      <AdminNavigation />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {setData.length > 0 ? (
            data.map((comment) => (
              <tr>
                <td>{comment.contactID}</td>
                <td>{comment.firstName}</td>
                <td>{comment.lastName}</td>
                <td>{comment.phoneNumber}</td>
                <td>{comment.email}</td>
                <td>{comment.comments}</td>
              </tr>
            ))
          ) : (
            <p>No contact form from the students</p>
          )}
        </tbody>
      </Table>
    </>
  );
};
