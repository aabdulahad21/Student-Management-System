
// ================= LOGIN PROTECTION =================

// Redirect to login if not logged in
if (!localStorage.getItem("loggedIn")) {
    if (!window.location.href.includes("index.html")) {
        window.location.href = "index.html";
    }
}

// =============== EDIT INDEX =============

let editIndex = -1;

// ================= LOGOUT =================

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}


// ================= GRADE =================

function getGrade(marks) {
    marks = Number(marks);
    if (marks >= 90) return "A";
    if (marks >= 75) return "B";
    if (marks >= 50) return "C";
    return "F";
}

// ================= ADD / UPDATE =================

function addOrUpdateStudent() {
    let name = document.getElementById("name").value.trim();
    let usn = document.getElementById("usn").value.trim();
    let marks = document.getElementById("marks").value.trim();

    // Validation
    if (!name || !usn || !marks) {
        alert("All fields are required!");
        return;
    }

    if (marks < 0 || marks > 100) {
        alert("Marks must be between 0 and 100");
        return;
    }

    // Prevent duplicate USN
    let duplicate = students.some((s, i) => s.usn === usn && i !== editIndex);
    if (duplicate) {
        alert("USN already exists!");
        return;
    }

    let student = { name, usn, marks };

    if (editIndex === -1) {
        students.push(student);
    } else {
        students[editIndex] = student;
        editIndex = -1;
        document.getElementById("submitBtn").innerText = "Add Student";
    }

    localStorage.setItem("students", JSON.stringify(students));
    clearForm();
    displayStudents();
}

// Load from localStorage
let students = JSON.parse(localStorage.getItem("students"));

// If no data exists, preload default students
if (!students || students.length === 0) {
    students = [
        { name: "Rahul", usn: "CS001", marks: 85 },
        { name: "Ram", usn: "CS002", marks: 92 },
        { name: "Kumar", usn: "CS003", marks: 76 },
        { name: "John", usn: "CS004", marks: 64 },
        { name: "Sam", usn: "CS005", marks: 48 }
    ];

    localStorage.setItem("students", JSON.stringify(students));
}

// ================= DISPLAY =================

function displayStudents(list = students) {
    let table = document.getElementById("studentTable");
    if (!table) return;

    table.innerHTML = "";

    let marksArr = students.map(s => Number(s.marks));
    let highest = Math.max(...marksArr);

    list.forEach((s, i) => {
        let rowColor = Number(s.marks) === highest ? "#d4edda" : "";

        table.innerHTML += `
        <tr style="background:${rowColor}">
            <td>${s.name}</td>
            <td>${s.usn}</td>
            <td>${s.marks}</td>
            <td>${getGrade(s.marks)}</td>
            <td>
                <button class="edit-btn" onclick="editStudent(${i})">Edit</button>
                <button class="delete-btn" onclick="deleteStudent(${i})">Delete</button>
            </td>
        </tr>`;
    });

    updateStats();
}

// ================= EDIT =================

function editStudent(i) {
    let s = students[i];

    document.getElementById("name").value = s.name;
    document.getElementById("usn").value = s.usn;
    document.getElementById("marks").value = s.marks;

    editIndex = i;
    document.getElementById("submitBtn").innerText = "Update Student";
}

// ================= DELETE =================

function deleteStudent(i) {
    students.splice(i, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

// ================= SEARCH =================

function searchStudent() {
    let val = document.getElementById("search").value.toLowerCase();

    let filtered = students.filter(s =>
        s.name.toLowerCase().includes(val) ||
        s.usn.toLowerCase().includes(val)
    );

    displayStudents(filtered);
}

// ================= SORT =================

function sortByMarks() {
    students.sort((a, b) => b.marks - a.marks);
    displayStudents();
}

function sortByName() {
    students.sort((a, b) => a.name.localeCompare(b.name));
    displayStudents();
}

// ================= FILTER =================

function filterGrade(grade) {
    if (grade === "all") {
        displayStudents();
        return;
    }

    let filtered = students.filter(s => getGrade(s.marks) === grade);
    displayStudents(filtered);
}

// ================= STATS =================

function updateStats() {
    if (students.length === 0) return;

    let marks = students.map(s => Number(s.marks));

    let total = students.length;
    let avg = (marks.reduce((a, b) => a + b, 0) / total).toFixed(2);
    let high = Math.max(...marks);
    let low = Math.min(...marks);

    if (document.getElementById("total"))
        document.getElementById("total").innerText = total;

    if (document.getElementById("avg"))
        document.getElementById("avg").innerText = avg;

    if (document.getElementById("high"))
        document.getElementById("high").innerText = high;

    if (document.getElementById("low"))
        document.getElementById("low").innerText = low;
}

// ================= COURSE ENROLL =================

function enroll(course) {
    alert("You have enrolled in " + course + " 🎉");
}

// ================= CLEAR FORM =================

function clearForm() {
    if (document.getElementById("name"))
        document.getElementById("name").value = "";

    if (document.getElementById("usn"))
        document.getElementById("usn").value = "";

    if (document.getElementById("marks"))
        document.getElementById("marks").value = "";
}

// ================= INIT =================

window.onload = function () {
    displayStudents();
    updateStats();
};
