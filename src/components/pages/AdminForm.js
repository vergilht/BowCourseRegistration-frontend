import { AdminNavigation } from "./Navigation";

export const AdminForm = () => {
  return (
    <>
      <AdminNavigation />
      Admin Form
      <div>
        <h1>Admin Navigation</h1>

        <h2>Admin Form</h2>

        <p>First Name</p>
        <input type="text" id="fname"></input>

        <p>Last Name</p>
        <input type="text" id="lname"></input>

        <p>Phone Number</p>
        <input type="text" id="phone"></input>

        <p>Email</p>
        <input type="text" id="email"></input>
      </div>
    </>
  );
};
