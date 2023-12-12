# Bow Course Registration Fullstack Web Application

Welcome to the Bow Course Registration Fullstack Web Application! This README.md will provide you with an overview of the project's directory structure and its website functionality.

## Bow Course Registration Layout

![Bow Course Registration Website Layout](public/BowCourseRegistration.jpeg)

## Directory Structure

<pre>
|-- src
| |-- components
| | |-- App.js
| | |-- App.css
|-- css
| | |-- admin.css
| | |-- contact.css
| | |-- CourseSelection.css
| | |-- login.css
| | |-- nav.css
| | |-- StudentHomePage.css
| | |-- Welcome.css
|-- pages
| | |-- Admin.js
| | |-- AdminCourse.js
| | |-- AdminStudent.js
| | |-- Navigation.js
| | |-- Contact.js
| | |-- Login.js
| | |-- StudentHomePage.js
| | |-- Welcome.js
| | |-- CourseSelection.js
|-- public
| |-- index.html
| |-- BowCourseRegistration.jpeg
|-- README.md
</pre>


## Website Functionality

### Welcome Page (Welcome.js)
- The homepage of the application.
- Contains two buttons: "For Students" and "For Admin"
- Contains navigation bar with links to the Student Login page and the Admin login page.

### Student Login (Login.js)
- Functions for registered students to sign in.
- Functions for new students to sign up.
- Sign in takes students to the Course Selection page (CourseSelection.js).
- Sign up takes students to the Student Home Page (StudentHomePage.js).

### Student Home Page (StudentHomePage.js)
- Allows students to search for courses and sign up.


### Admin Login (Login.js)
- Functions for admin staff to sign in.
- After signing in, admins are directed to the Admin Page (Admin.js).

### Admin Page (Admin.js)
- Admin home page with multiple functions:
  - Search courses.
  - Add courses.
  - Delete courses.
  - Receive questions and comments from students.
  - Access the current student list.

### Contact Us (Contact.js)
- Allows users to send questions and comments to the admin staff.

## How to Use

1. Clone this GitHub repository to your local machine.
2. Install the necessary dependencies.

```bash
   cd backend
   npm install init -y
   npm install express
   npm install mssql
   npm install cors
   npm install body-parser
   npm install nodemon
   npm install bcrypt
   npm start
   
   cd frontend 
   npm install
   npm start
```
3. Access the web application in your web browser by visiting http://localhost:3000.    

## Dependencies
```bash
React
React Router
Express
MSSQL
Node.js
Other necessary packages (installed via npm install)
```
## Contributing

Feel free to contribute to this project by opening issues, proposing new features, or submitting pull requests. We welcome your feedback and collaboration to improve the Bow Course Registration Web Application.

## Contact

If you have any questions or need assistance, you can contact the project administrators through the "Contact Us" page or by reaching out to the email provided in the website.

Happy learning and course registration with Bow Course Registration Fullstack Web Application!


