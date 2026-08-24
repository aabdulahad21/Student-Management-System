# Student Management System

A web-based Student Management System developed using HTML, CSS, and JavaScript. The application provides an interactive interface for managing student records, calculating grades, searching and filtering students, and displaying academic statistics.

## Live Demo

[View Live Demo](YOUR_NETLIFY_URL)

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser LocalStorage

## Features

### Authentication
- Student Portal login page
- Login validation using predefined credentials
- Login protection for application pages
- Logout functionality

### Student Management
- Add new student records
- Edit existing student records
- Delete student records
- Prevent duplicate USNs
- Store student data using browser LocalStorage

### Grade Management

Grades are calculated automatically based on marks:

- 90–100 → Grade A
- 75–89 → Grade B
- 50–74 → Grade C
- Below 50 → Grade F

### Search, Sort and Filter

- Search students by name or USN
- Sort students by marks
- Sort students alphabetically by name
- Filter students by grade

### Statistics

The dashboard displays:

- Total number of students
- Average marks
- Highest marks
- Lowest marks

### Validation

- Required field validation
- Marks validation between 0 and 100
- Duplicate USN prevention

## Screenshots

### Login Page

![Login Page](./Student%20Management%20System/studentproject-main/Project/screenshots/login.png)

### Student Management

![Student Management](screenshots/students.png)

### Dashboard

![Dashboard](screenshots/dashboard.png)

## Project Structure

Student-Management-System/
│
├── index.html
├── dashboard.html
├── students.html
├── courses.html
├── about.html
├── style.css
├── script.js
└── screenshots/
    ├── login.png
    ├── students.png
    └── dashboard.png

## How to Run

1. Clone the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Login using the credentials configured in the application.
5. Navigate through the dashboard, student management, courses, and about pages.

## Login Credentials

For demonstration purposes:

**Username:** `ABCD`  
**Password:** `0011`

## Data Storage

Student records are stored in the browser's `localStorage`. This allows student data to persist between browser sessions without requiring a backend database.

## Learning Outcomes

- Developed an interactive frontend application using JavaScript
- Implemented CRUD operations
- Worked with DOM manipulation and event handling
- Implemented client-side validation
- Used LocalStorage for client-side data persistence
- Implemented searching, sorting, and filtering
- Implemented dynamic grade calculation and statistics
- Built a multi-page web application

## Author

A Abdul Ahad
