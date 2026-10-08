/* =========================================================
   EDUADMIN - COMPLETE DASHBOARD JAVASCRIPT
========================================================= */


/* =========================================================
   DATA
========================================================= */

const defaultStudents = [
    {
        id: "STU001",
        name: "Arjun Sharma",
        email: "arjun@example.com",
        phone: "+91 98765 43210",
        className: "CSE-A",
        attendance: 96,
        status: "Present",
        gender: "Male"
    },
    {
        id: "STU002",
        name: "Priya Kumar",
        email: "priya@example.com",
        phone: "+91 98765 43211",
        className: "CSE-B",
        attendance: 91,
        status: "Present",
        gender: "Female"
    },
    {
        id: "STU003",
        name: "Rahul Mehta",
        email: "rahul@example.com",
        phone: "+91 98765 43212",
        className: "EEE",
        attendance: 87,
        status: "Absent",
        gender: "Male"
    },
    {
        id: "STU004",
        name: "Sneha Nair",
        email: "sneha@example.com",
        phone: "+91 98765 43213",
        className: "ECE",
        attendance: 94,
        status: "Present",
        gender: "Female"
    },
    {
        id: "STU005",
        name: "Vikram Kumar",
        email: "vikram@example.com",
        phone: "+91 98765 43214",
        className: "CSE-A",
        attendance: 82,
        status: "Absent",
        gender: "Male"
    }
];


const defaultTeachers = [
    {
        id: "TCH001",
        name: "Priya Sharma",
        email: "priya.sharma@eduadmin.com",
        phone: "+91 98765 10001",
        subject: "Mathematics",
        department: "Mathematics",
        experience: "8 Years",
        qualification: "M.Sc Mathematics",
        classes: "CSE-A, CSE-B, ECE",
        status: "Active"
    },
    {
        id: "TCH002",
        name: "Rahul Kumar",
        email: "rahul.kumar@eduadmin.com",
        phone: "+91 98765 10002",
        subject: "Physics",
        department: "Science",
        experience: "6 Years",
        qualification: "M.Sc Data science",
        classes: "CSE-B, ECE",
        status: "Active"
    },
    {
        id: "TCH003",
        name: "Sneha Reddy",
        email: "sneha.reddy@eduadmin.com",
        phone: "+91 98765 10003",
        subject: "Chemistry",
        department: "Science",
        experience: "5 Years",
        qualification: "M.Sc Chemistry",
        classes: "CSE-B, CSE-A, EEE",
        status: "Active"
    },
    {
        id: "TCH004",
        name: "Vikram Singh",
        email: "vikram.singh@eduadmin.com",
        phone: "+91 98765 10004",
        subject: "English",
        department: "Languages",
        experience: "10 Years",
        qualification: "M.A English",
        classes: "CSE-A, CSE-B",
        status: "Inactive"
    }
];


const courses = [
    {
        id: "CRS001",
        name: "Advanced Mathematics",
        teacher: "Priya Sharma",
        students: 180,
        duration: "1 Year",
        icon: "∑"
    },
    {
        id: "CRS002",
        name: "Physics",
        teacher: "Rahul Kumar",
        students: 145,
        duration: "1 Year",
        icon: "⚛"
    },
    {
        id: "CRS003",
        name: "Chemistry",
        teacher: "Sneha Reddy",
        students: 138,
        duration: "1 Year",
        icon: "⚗"
    },
    {
        id: "CRS004",
        name: "English Literature",
        teacher: "Vikram Singh",
        students: 160,
        duration: "1 Year",
        icon: "📖"
    },
    {
        id: "CRS005",
        name: "Computer Science",
        teacher: "Priya Sharma",
        students: 125,
        duration: "1 Year",
        icon: "💻"
    },
    {
        id: "CRS006",
        name: "Data Science",
        teacher: "Sneha Reddy",
        students: 120,
        duration: "1 Year",
        icon: "🖥"
    }
];


const exams = [
    {
        name: "Mathematics Final Exam",
        className: "CSE",
        date: "15 June 2026",
        students: 42,
        status: "Upcoming"
    },
    {
        name: "Physics Unit Test",
        className: "ECE",
        date: "18 June 2026",
        students: 38,
        status: "Upcoming"
    },
    {
        name: "English Mid Term",
        className: "EEE",
        date: "20 June 2026",
        students: 45,
        status: "Upcoming"
    },
    {
        name: "Chemistry Practical",
        className: "MECH",
        date: "23 June 2026",
        students: 40,
        status: "Upcoming"
    }
];


/* =========================================================
   LOCAL STORAGE
========================================================= */

let students =
    JSON.parse(localStorage.getItem("BEHARAadmin_students")) ||
    defaultStudents;

let teachers =
    JSON.parse(localStorage.getItem("BEHARAadmin_teachers")) ||
    defaultTeachers;


function saveData() {

    localStorage.setItem(
        "BEHARAadmin_students",
        JSON.stringify(students)
    );

    localStorage.setItem(
        "BEHARAadmin_teachers",
        JSON.stringify(teachers)
    );
}


/* =========================================================
   DOM
========================================================= */

const pageContainer =
    document.getElementById("pageContainer");

const pageTitle =
    document.getElementById("pageTitle");

const pageSubtitle =
    document.getElementById("pageSubtitle");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalContent =
    document.getElementById("modalContent");

const modalClose =
    document.getElementById("modalClose");

const toast =
    document.getElementById("toast");


/* =========================================================
   HELPERS
========================================================= */

function initials(name) {

    return name
        .split(" ")
        .map(word => word[0])
        .join("")
        .substring(0, 2)
        .toUpperCase();
}


function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


function openModal(html) {

    modalContent.innerHTML = html;

    modalOverlay.classList.add("show");
}


function closeModal() {

    modalOverlay.classList.remove("show");
}


modalClose.addEventListener(
    "click",
    closeModal
);


modalOverlay.addEventListener(
    "click",
    function(event) {

        if (event.target === modalOverlay) {
            closeModal();
        }

    }
);


/* =========================================================
   NAVIGATION
========================================================= */

const navItems =
    document.querySelectorAll(".nav-item");


navItems.forEach(button => {

    button.addEventListener("click", function() {

        const page =
            this.dataset.page;

        navItems.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        renderPage(page);

        document
            .querySelector(".sidebar")
            .classList.remove("open");

    });

});


function setPageInfo(title, subtitle) {

    pageTitle.textContent = title;

    pageSubtitle.textContent = subtitle;
}


/* =========================================================
   PAGE ROUTER
========================================================= */

function renderPage(page) {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    switch(page) {

        case "dashboard":
            renderDashboard();
            break;

        case "students":
            renderStudents();
            break;

        case "teachers":
            renderTeachers();
            break;

        case "courses":
            renderCourses();
            break;

        case "attendance":
            renderAttendance();
            break;

        case "exams":
            renderExams();
            break;

        case "fees":
            renderFees();
            break;

        case "reports":
            renderReports();
            break;

        case "settings":
            renderSettings();
            break;

        default:
            renderDashboard();

    }

}


/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard() {

    setPageInfo(
        "Dashboard",
        "Overview of your college management system"
    );


    pageContainer.innerHTML = `

        <section class="welcome-banner">

            <div>

                <small>WELCOME BACK</small>

                <h2>
                    Manage your college
                    smarter and faster.
                </h2>

                <p>
                    Monitor students, teachers,
                    attendance and academic activities
                    from one place.
                </p>

            </div>

            <div class="banner-icon">
                🎓
            </div>

        </section>


        <section class="stats">

            ${statCard(
                "Total Students",
                students.length + 1243,
                "👨‍🎓",
                "8.2% this month",
                "blue"
            )}

            ${statCard(
                "Teachers",
                teachers.length + 82,
                "👩‍🏫",
                "4.5% this month",
                "green"
            )}

            ${statCard(
                "Present Today",
                1105,
                "✓",
                "88.5% attendance",
                "orange"
            )}

            ${statCard(
                "Absent Today",
                143,
                "!",
                "11.5% absent",
                "red"
            )}

        </section>


        <section class="dashboard-grid">

            <div class="card card-padding">

                <div class="card-header">

                    <div>

                        <h2>Attendance Overview</h2>

                        <p>
                            Weekly attendance percentage
                        </p>

                    </div>

                    <span class="badge present">
                        This Week
                    </span>

                </div>


                <div class="chart-placeholder">

                    <div class="chart-bar" style="height:75%"></div>
                    <div class="chart-bar" style="height:82%"></div>
                    <div class="chart-bar" style="height:68%"></div>
                    <div class="chart-bar" style="height:91%"></div>
                    <div class="chart-bar" style="height:86%"></div>
                    <div class="chart-bar" style="height:94%"></div>
                    <div class="chart-bar" style="height:88%"></div>

                </div>

            </div>


            <div class="card card-padding">

                <div class="card-header">

                    <div>

                        <h2>Recent Activity</h2>

                        <p>Latest system updates</p>

                    </div>

                </div>


                ${activity(
                    "👨‍🎓",
                    "Arjun Sharma was added",
                    "10 minutes ago"
                )}

                ${activity(
                    "📝",
                    "Math exam results published",
                    "1 hour ago"
                )}

                ${activity(
                    "📅",
                    "Attendance updated for Class CSE-A",
                    "2 hours ago"
                )}

                ${activity(
                    "💰",
                    "25 fee payments received",
                    "Yesterday"
                )}

            </div>

        </section>


        <br>


        <section class="summary-grid">

            ${summaryCard(
                "📚",
                "Total Courses",
                "42",
                "5 new courses this semester",
                "blue"
            )}

            ${summaryCard(
                "💰",
                "Fee Collection",
                "₹8.4L",
                "78% collected this month",
                "green"
            )}

            ${summaryCard(
                "📝",
                "Upcoming Exams",
                "12",
                "Next exam in 3 days",
                "orange"
            )}

        </section>

    `;
}


function statCard(title, value, icon, change, color) {

    return `

        <div class="card stat-card">

            <div>

                <h3>${title}</h3>

                <h2>${value}</h2>

                <span class="stat-change ${color === "red" ? "red" : ""}">
                    ↑ ${change}
                </span>

            </div>

            <div class="icon ${color}">
                ${icon}
            </div>

        </div>

    `;
}


function activity(icon, text, time) {

    return `

        <div class="activity">

            <div class="activity-icon">
                ${icon}
            </div>

            <div>

                <p>
                    ${text}
                </p>

                <small>
                    ${time}
                </small>

            </div>

        </div>

    `;
}


function summaryCard(icon, title, number, text, color) {

    return `

        <div class="card summary-card">

            <div class="summary-icon ${color}">
                ${icon}
            </div>

            <div>

                <p>${title}</p>

                <h2>${number}</h2>

                <small>${text}</small>

            </div>

        </div>

    `;
}


/* =========================================================
   STUDENTS
========================================================= */

function renderStudents() {

    setPageInfo(
        "Students",
        "Manage student records and information"
    );


    pageContainer.innerHTML = `

        <div class="page-header">

            <h2>
                Student Management
            </h2>

            <p>
                Add, view, edit and manage all students.
            </p>

        </div>


        <div class="card card-padding">

            <div class="toolbar">

                <div class="search-box">

                    <span>🔍</span>

                    <input
                        type="text"
                        id="studentSearch"
                        placeholder="Search students..."
                    >

                </div>


                <button
                    class="btn"
                    onclick="openStudentForm()"
                >
                    + Add Student
                </button>

            </div>


            <div id="studentTableContainer"></div>

        </div>

    `;


    drawStudentTable();


    document
        .getElementById("studentSearch")
        .addEventListener("input", drawStudentTable);

}


function drawStudentTable() {

    const container =
        document.getElementById("studentTableContainer");

    if (!container) return;


    const search =
        document
            .getElementById("studentSearch")
            ?.value
            .toLowerCase() || "";


    const filtered =
        students.filter(student =>
            (
                student.name +
                student.id +
                student.className +
                student.email
            )
            .toLowerCase()
            .includes(search)
        );


    if (filtered.length === 0) {

        container.innerHTML = `

            <div class="empty">

                <div class="empty-icon">
                    🔍
                </div>

                <p>
                    No students found.
                </p>

            </div>

        `;

        return;
    }


    container.innerHTML = `

        <div class="table-wrapper">

            <table>

                <thead>

                    <tr>

                        <th>Student</th>
                        <th>ID</th>
                        <th>Class</th>
                        <th>Attendance</th>
                        <th>Status</th>
                        <th>Actions</th>

                    </tr>

                </thead>


                <tbody>

                    ${filtered.map(student => `

                        <tr>

                            <td>

                                <div class="person">

                                    <div class="person-avatar">
                                        ${initials(student.name)}
                                    </div>

                                    <div>

                                        <strong>
                                            ${student.name}
                                        </strong>

                                        <small>
                                            ${student.email}
                                        </small>

                                    </div>

                                </div>

                            </td>


                            <td>
                                ${student.id}
                            </td>


                            <td>
                                ${student.className}
                            </td>


                            <td>
                                ${student.attendance}%
                            </td>


                            <td>

                                <span class="badge ${
                                    student.status === "Present"
                                        ? "present"
                                        : "absent"
                                }">

                                    ${student.status}

                                </span>

                            </td>


                            <td>

                                <div class="table-actions">

                                    <button
                                        class="action-btn"
                                        onclick="viewStudent('${student.id}')"
                                    >
                                        View
                                    </button>

                                    <button
                                        class="action-btn"
                                        onclick="editStudent('${student.id}')"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        class="action-btn delete"
                                        onclick="deleteStudent('${student.id}')"
                                    >
                                        Delete
                                    </button>

                                </div>

                            </td>

                        </tr>

                    `).join("")}

                </tbody>

            </table>

        </div>

    `;
}


function viewStudent(id) {

    const student =
        students.find(item => item.id === id);

    if (!student) return;


    setPageInfo(
        "Student Details",
        `${student.name} • ${student.id}`
    );


    pageContainer.innerHTML = `

        <button
            class="btn btn-secondary"
            onclick="renderStudents()"
        >
            ← Back to Students
        </button>


        <br><br>


        <div class="card card-padding">

            <div class="detail-header">

                <div class="detail-avatar">
                    ${initials(student.name)}
                </div>

                <div>

                    <h2>
                        ${student.name}
                    </h2>

                    <p>
                        Student • ${student.className}
                    </p>

                </div>


                <div class="detail-actions">

                    <button
                        class="btn"
                        onclick="editStudent('${student.id}')"
                    >
                        Edit Student
                    </button>

                </div>

            </div>


            <div class="detail-grid">

                ${detail("Student ID", student.id)}
                ${detail("Class", student.className)}
                ${detail("Email", student.email)}
                ${detail("Phone", student.phone)}
                ${detail("Gender", student.gender)}
                ${detail("Attendance", student.attendance + "%")}
                ${detail("Today's Status", student.status)}

            </div>

        </div>

    `;
}


function openStudentForm(id = null) {

    const student =
        id
            ? students.find(item => item.id === id)
            : null;


    openModal(`

        <h2>
            ${student ? "Edit Student" : "Add Student"}
        </h2>

        <p style="color:#6b7280;margin:5px 0 20px">
            Enter student information below.
        </p>


        <form id="studentForm">

            <div class="form-grid">

                <div class="form-group">

                    <label>Full Name</label>

                    <input
                        id="studentName"
                        required
                        value="${student?.name || ""}"
                    >

                </div>


                <div class="form-group">

                    <label>Email</label>

                    <input
                        type="email"
                        id="studentEmail"
                        required
                        value="${student?.email || ""}"
                    >

                </div>


                <div class="form-group">

                    <label>Phone</label>

                    <input
                        id="studentPhone"
                        required
                        value="${student?.phone || ""}"
                    >

                </div>


                <div class="form-group">

                    <label>Class</label>

                    <select id="studentClass">

                        ${["9-A","9-B","10-A","10-B"]
                            .map(c => `
                                <option
                                    ${student?.className === c ? "selected" : ""}
                                >
                                    ${c}
                                </option>
                            `).join("")}

                    </select>

                </div>


                <div class="form-group">

                    <label>Gender</label>

                    <select id="studentGender">

                        <option
                            ${student?.gender === "Male" ? "selected" : ""}
                        >
                            Male
                        </option>

                        <option
                            ${student?.gender === "Female" ? "selected" : ""}
                        >
                            Female
                        </option>

                    </select>

                </div>


                <div class="form-group">

                    <label>Attendance %</label>

                    <input
                        type="number"
                        id="studentAttendance"
                        min="0"
                        max="100"
                        value="${student?.attendance || 100}"
                    >

                </div>

            </div>


            <div class="form-actions">

                <button
                    type="button"
                    class="btn btn-secondary"
                    onclick="closeModal()"
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    class="btn"
                >
                    ${student ? "Save Changes" : "Add Student"}
                </button>

            </div>

        </form>

    `);


    document
        .getElementById("studentForm")
        .addEventListener("submit", function(event) {

            event.preventDefault();


            const data = {

                name:
                    document.getElementById("studentName").value,

                email:
                    document.getElementById("studentEmail").value,

                phone:
                    document.getElementById("studentPhone").value,

                className:
                    document.getElementById("studentClass").value,

                gender:
                    document.getElementById("studentGender").value,

                attendance:
                    Number(
                        document
                            .getElementById("studentAttendance")
                            .value
                    ),

                status: "Present"

            };


            if (student) {

                Object.assign(student, data);

                showToast("Student updated successfully.");

            } else {

                const nextNumber =
                    students.length + 1;

                students.push({
                    ...data,
                    id:
                        "STU" +
                        String(nextNumber).padStart(3, "0")
                });

                showToast("Student added successfully.");

            }


            saveData();

            closeModal();

            renderStudents();

        });

}


function editStudent(id) {
    openStudentForm(id);
}


function deleteStudent(id) {

    const student =
        students.find(item => item.id === id);

    if (!student) return;


    if (
        confirm(
            `Delete ${student.name}?`
        )
    ) {

        students =
            students.filter(
                item => item.id !== id
            );

        saveData();

        showToast("Student deleted.");

        renderStudents();

    }

}


/* =========================================================
   TEACHERS
========================================================= */

function renderTeachers() {

    setPageInfo(
        "Teachers",
        "Manage teaching staff and teacher information"
    );


    pageContainer.innerHTML = `

        <div class="page-header">

            <h2>
                Teacher Management
            </h2>

            <p>
                View teacher profiles, subjects and assignments.
            </p>

        </div>


        <div class="card card-padding">

            <div class="toolbar">

                <div class="search-box">

                    <span>🔍</span>

                    <input
                        type="text"
                        id="teacherSearch"
                        placeholder="Search teachers..."
                    >

                </div>


                <button
                    class="btn"
                    onclick="openTeacherForm()"
                >
                    + Add Teacher
                </button>

            </div>


            <div id="teacherTableContainer"></div>

        </div>

    `;


    drawTeacherTable();


    document
        .getElementById("teacherSearch")
        .addEventListener(
            "input",
            drawTeacherTable
        );

}


function drawTeacherTable() {

    const container =
        document.getElementById(
            "teacherTableContainer"
        );

    if (!container) return;


    const search =
        document
            .getElementById("teacherSearch")
            ?.value
            .toLowerCase() || "";


    const filtered =
        teachers.filter(teacher =>
            (
                teacher.name +
                teacher.subject +
                teacher.department +
                teacher.id
            )
            .toLowerCase()
            .includes(search)
        );


    container.innerHTML = `

        <div class="table-wrapper">

            <table>

                <thead>

                    <tr>

                        <th>Teacher</th>
                        <th>ID</th>
                        <th>Subject</th>
                        <th>Department</th>
                        <th>Experience</th>
                        <th>Status</th>
                        <th>Actions</th>

                    </tr>

                </thead>


                <tbody>

                    ${filtered.map(teacher => `

                        <tr>

                            <td>

                                <div class="person">

                                    <div class="person-avatar">
                                        ${initials(teacher.name)}
                                    </div>

                                    <div>

                                        <strong>
                                            ${teacher.name}
                                        </strong>

                                        <small>
                                            ${teacher.email}
                                        </small>

                                    </div>

                                </div>

                            </td>


                            <td>
                                ${teacher.id}
                            </td>


                            <td>
                                ${teacher.subject}
                            </td>


                            <td>
                                ${teacher.department}
                            </td>


                            <td>
                                ${teacher.experience}
                            </td>


                            <td>

                                <span class="badge ${
                                    teacher.status === "Active"
                                        ? "active"
                                        : "inactive"
                                }">

                                    ${teacher.status}

                                </span>

                            </td>


                            <td>

                                <div class="table-actions">

                                    <button
                                        class="action-btn"
                                        onclick="viewTeacher('${teacher.id}')"
                                    >
                                        View
                                    </button>

                                    <button
                                        class="action-btn"
                                        onclick="editTeacher('${teacher.id}')"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        class="action-btn delete"
                                        onclick="deleteTeacher('${teacher.id}')"
                                    >
                                        Delete
                                    </button>

                                </div>

                            </td>

                        </tr>

                    `).join("")}

                </tbody>

            </table>

        </div>

    `;
}


function viewTeacher(id) {

    const teacher =
        teachers.find(item => item.id === id);

    if (!teacher) return;


    setPageInfo(
        "Teacher Details",
        `${teacher.name} • ${teacher.subject}`
    );


    pageContainer.innerHTML = `

        <button
            class="btn btn-secondary"
            onclick="renderTeachers()"
        >
            ← Back to Teachers
        </button>


        <br><br>


        <div class="card card-padding">

            <div class="detail-header">

                <div class="detail-avatar">
                    ${initials(teacher.name)}
                </div>


                <div>

                    <h2>
                        ${teacher.name}
                    </h2>

                    <p>
                        ${teacher.subject} Teacher
                    </p>

                </div>


                <div class="detail-actions">

                    <button
                        class="btn"
                        onclick="editTeacher('${teacher.id}')"
                    >
                        Edit Teacher
                    </button>

                </div>

            </div>


            <div class="detail-grid">

                ${detail("Teacher ID", teacher.id)}
                ${detail("Email", teacher.email)}
                ${detail("Phone", teacher.phone)}
                ${detail("Department", teacher.department)}
                ${detail("Subject", teacher.subject)}
                ${detail("Experience", teacher.experience)}
                ${detail("Qualification", teacher.qualification)}
                ${detail("Assigned Classes", teacher.classes)}
                ${detail("Status", teacher.status)}

            </div>

        </div>

    `;
}


function detail(label, value) {

    return `

        <div class="detail-item">

            <label>
                ${label}
            </label>

            <strong>
                ${value}
            </strong>

        </div>

    `;
}


function openTeacherForm(id = null) {

    const teacher =
        id
            ? teachers.find(item => item.id === id)
            : null;


    openModal(`

        <h2>
            ${teacher ? "Edit Teacher" : "Add Teacher"}
        </h2>

        <p style="color:#6b7280;margin:5px 0 20px">
            Enter teacher information below.
        </p>


        <form id="teacherForm">

            <div class="form-grid">


                <div class="form-group">

                    <label>Full Name</label>

                    <input
                        id="teacherName"
                        required
                        value="${teacher?.name || ""}"
                    >

                </div>


                <div class="form-group">

                    <label>Email</label>

                    <input
                        type="email"
                        id="teacherEmail"
                        required
                        value="${teacher?.email || ""}"
                    >

                </div>


                <div class="form-group">

                    <label>Phone</label>

                    <input
                        id="teacherPhone"
                        required
                        value="${teacher?.phone || ""}"
                    >

                </div>


                <div class="form-group">

                    <label>Subject</label>

                    <input
                        id="teacherSubject"
                        required
                        value="${teacher?.subject || ""}"
                    >

                </div>


                <div class="form-group">

                    <label>Department</label>

                    <select id="teacherDepartment">

                        ${[
                            "Mathematics",
                            "Science",
                            "Languages",
                            "Computer Science",
                            "Social Studies"
                        ].map(d => `

                            <option
                                ${teacher?.department === d ? "selected" : ""}
                            >
                                ${d}
                            </option>

                        `).join("")}

                    </select>

                </div>


                <div class="form-group">

                    <label>Experience</label>

                    <input
                        id="teacherExperience"
                        placeholder="Example: 5 Years"
                        required
                        value="${teacher?.experience || ""}"
                    >

                </div>


                <div class="form-group">

                    <label>Qualification</label>

                    <input
                        id="teacherQualification"
                        required
                        value="${teacher?.qualification || ""}"
                    >

                </div>


                <div class="form-group">

                    <label>Assigned Classes</label>

                    <input
                        id="teacherClasses"
                        placeholder="Example: 8-A, 9-A"
                        required
                        value="${teacher?.classes || ""}"
                    >

                </div>

            </div>


            <div class="form-actions">

                <button
                    type="button"
                    class="btn btn-secondary"
                    onclick="closeModal()"
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    class="btn"
                >
                    ${teacher ? "Save Changes" : "Add Teacher"}
                </button>

            </div>

        </form>

    `);


    document
        .getElementById("teacherForm")
        .addEventListener("submit", function(event) {

            event.preventDefault();


            const data = {

                name:
                    document.getElementById("teacherName").value,

                email:
                    document.getElementById("teacherEmail").value,

                phone:
                    document.getElementById("teacherPhone").value,

                subject:
                    document.getElementById("teacherSubject").value,

                department:
                    document.getElementById("teacherDepartment").value,

                experience:
                    document.getElementById("teacherExperience").value,

                qualification:
                    document.getElementById("teacherQualification").value,

                classes:
                    document.getElementById("teacherClasses").value,

                status: teacher?.status || "Active"

            };


            if (teacher) {

                Object.assign(teacher, data);

                showToast("Teacher updated successfully.");

            } else {

                const nextNumber =
                    teachers.length + 1;

                teachers.push({

                    ...data,

                    id:
                        "TCH" +
                        String(nextNumber).padStart(3, "0")

                });

                showToast("Teacher added successfully.");

            }


            saveData();

            closeModal();

            renderTeachers();

        });

}


function editTeacher(id) {

    openTeacherForm(id);

}


function deleteTeacher(id) {

    const teacher =
        teachers.find(item => item.id === id);

    if (!teacher) return;


    if (
        confirm(
            `Delete ${teacher.name}?`
        )
    ) {

        teachers =
            teachers.filter(
                item => item.id !== id
            );

        saveData();

        showToast("Teacher deleted.");

        renderTeachers();

    }

}


/* =========================================================
   COURSES
========================================================= */

function renderCourses() {

    setPageInfo(
        "Courses",
        "Manage courses and academic subjects"
    );


    pageContainer.innerHTML = `

        <div class="page-header">

            <h2>Courses</h2>

            <p>
                View all courses offered by the institution.
            </p>

        </div>


        <div class="course-grid">

            ${courses.map(course => `

                <div class="card course-card">

                    <div class="course-icon">
                        ${course.icon}
                    </div>

                    <h3>
                        ${course.name}
                    </h3>

                    <p>
                        Instructor:
                        <strong>
                            ${course.teacher}
                        </strong>
                    </p>

                    <div class="course-footer">

                        <span>
                            👨‍🎓 ${course.students} Students
                        </span>

                        <span>
                            ${course.duration}
                        </span>

                    </div>

                </div>

            `).join("")}

        </div>

    `;
}


/* =========================================================
   ATTENDANCE
========================================================= */

function renderAttendance() {

    setPageInfo(
        "Attendance",
        "Manage daily student attendance"
    );


    pageContainer.innerHTML = `

        <div class="page-header">

            <h2>Today's Attendance</h2>

            <p>
                Mark students as present or absent.
            </p>

        </div>


        <div class="card card-padding">

            <div class="card-header">

                <div>

                    <h2>
                        Class 10-A
                    </h2>

                    <p>
                        ${new Date().toLocaleDateString()}
                    </p>

                </div>


                <span class="badge present">
                    Attendance Open
                </span>

            </div>


            <div class="table-wrapper">

                <table>

                    <thead>

                        <tr>

                            <th>Student</th>
                            <th>ID</th>
                            <th>Class</th>
                            <th>Attendance</th>
                            <th>Today's Status</th>

                        </tr>

                    </thead>


                    <tbody>

                        ${students.map(student => `

                            <tr>

                                <td>

                                    <div class="person">

                                        <div class="person-avatar">
                                            ${initials(student.name)}
                                        </div>

                                        <strong>
                                            ${student.name}
                                        </strong>

                                    </div>

                                </td>


                                <td>
                                    ${student.id}
                                </td>


                                <td>
                                    ${student.className}
                                </td>


                                <td>
                                    ${student.attendance}%
                                </td>


                                <td>

                                    <button
                                        class="btn btn-small ${
                                            student.status === "Present"
                                                ? ""
                                                : "btn-secondary"
                                        }"
                                        onclick="toggleAttendance('${student.id}')"
                                    >
                                        ${student.status === "Present"
                                            ? "✓ Present"
                                            : "✕ Absent"}
                                    </button>

                                </td>

                            </tr>

                        `).join("")}

                    </tbody>

                </table>

            </div>

        </div>

    `;
}


function toggleAttendance(id) {

    const student =
        students.find(item => item.id === id);

    if (!student) return;


    student.status =
        student.status === "Present"
            ? "Absent"
            : "Present";


    saveData();

    renderAttendance();

    showToast(
        `${student.name}: ${student.status}`
    );

}


/* =========================================================
   EXAMS
========================================================= */

function renderExams() {

    setPageInfo(
        "Exams",
        "Manage examinations and academic results"
    );


    pageContainer.innerHTML = `

        <div class="page-header">

            <h2>Examinations</h2>

            <p>
                View upcoming examinations.
            </p>

        </div>


        <div class="card card-padding">

            <div class="card-header">

                <div>

                    <h2>
                        Upcoming Exams
                    </h2>

                    <p>
                        Scheduled academic examinations
                    </p>

                </div>


                <button
                    class="btn"
                    onclick="showToast('Exam creation form coming next.')"
                >
                    + Add Exam
                </button>

            </div>


            <div class="table-wrapper">

                <table>

                    <thead>

                        <tr>

                            <th>Examination</th>
                            <th>Class</th>
                            <th>Date</th>
                            <th>Students</th>
                            <th>Status</th>

                        </tr>

                    </thead>


                    <tbody>

                        ${exams.map(exam => `

                            <tr>

                                <td>
                                    <strong>
                                        ${exam.name}
                                    </strong>
                                </td>

                                <td>
                                    ${exam.className}
                                </td>

                                <td>
                                    ${exam.date}
                                </td>

                                <td>
                                    ${exam.students}
                                </td>

                                <td>

                                    <span class="badge pending">
                                        ${exam.status}
                                    </span>

                                </td>

                            </tr>

                        `).join("")}

                    </tbody>

                </table>

            </div>

        </div>

    `;
}


/* =========================================================
   FEES
========================================================= */

function renderFees() {

    setPageInfo(
        "Fees",
        "Manage student fee payments"
    );


    pageContainer.innerHTML = `

        <div class="page-header">

            <h2>Fee Management</h2>

            <p>
                Monitor payments and outstanding fees.
            </p>

        </div>


        <section class="stats">

            ${statCard(
                "Total Collected",
                "₹8.4L",
                "₹",
                "78% collected",
                "green"
            )}

            ${statCard(
                "Pending Fees",
                "₹2.3L",
                "!",
                "22% remaining",
                "orange"
            )}

            ${statCard(
                "Paid Students",
                "972",
                "✓",
                "78% students",
                "blue"
            )}

            ${statCard(
                "Pending Students",
                "276",
                "!",
                "22% students",
                "red"
            )}

        </section>


        <div class="card card-padding">

            <div class="card-header">

                <div>

                    <h2>
                        Recent Payments
                    </h2>

                    <p>
                        Latest fee transactions
                    </p>

                </div>

                <button
                    class="btn"
                    onclick="showToast('Payment recorded successfully.')"
                >
                    + Record Payment
                </button>

            </div>


            <div class="table-wrapper">

                <table>

                    <thead>

                        <tr>
                            <th>Student</th>
                            <th>Receipt</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>

                    </thead>


                    <tbody>

                        <tr>
                            <td>Arjun Sharma</td>
                            <td>REC001</td>
                            <td>₹12,500</td>
                            <td>Today</td>
                            <td>
                                <span class="badge paid">
                                    Paid
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td>Priya Kumar</td>
                            <td>REC002</td>
                            <td>₹10,000</td>
                            <td>Today</td>
                            <td>
                                <span class="badge paid">
                                    Paid
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td>Rahul Mehta</td>
                            <td>REC003</td>
                            <td>₹8,500</td>
                            <td>Yesterday</td>
                            <td>
                                <span class="badge pending">
                                    Partial
                                </span>
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>

        </div>

    `;
}


/* =========================================================
   REPORTS
========================================================= */

function renderReports() {

    setPageInfo(
        "Reports",
        "School performance and analytics"
    );


    pageContainer.innerHTML = `

        <div class="page-header">

            <h2>Reports & Analytics</h2>

            <p>
                Review overall school performance.
            </p>

        </div>


        <div class="report-grid">


            <div class="card report-card">

                <p>Student Attendance</p>

                <div class="report-number">
                    88.5%
                </div>

                <div class="progress">
                    <span style="width:88.5%"></span>
                </div>

            </div>


            <div class="card report-card">

                <p>Fee Collection</p>

                <div class="report-number">
                    78%
                </div>

                <div class="progress">
                    <span style="width:78%"></span>
                </div>

            </div>


            <div class="card report-card">

                <p>Exam Performance</p>

                <div class="report-number">
                    91%
                </div>

                <div class="progress">
                    <span style="width:91%"></span>
                </div>

            </div>

        </div>


        <br>


        <div class="card card-padding">

            <div class="card-header">

                <div>

                    <h2>
                        Generate Reports
                    </h2>

                    <p>
                        Select a report type.
                    </p>

                </div>

            </div>


            <div class="summary-grid">

                <button
                    class="btn"
                    onclick="showToast('Student report generated.')"
                >
                    Student Report
                </button>

                <button
                    class="btn"
                    onclick="showToast('Attendance report generated.')"
                >
                    Attendance Report
                </button>

                <button
                    class="btn"
                    onclick="showToast('Fee report generated.')"
                >
                    Fee Report
                </button>

            </div>

        </div>

    `;
}


/* =========================================================
   SETTINGS
========================================================= */

function renderSettings() {

    setPageInfo(
        "Settings",
        "Configure your EduAdmin system"
    );


    pageContainer.innerHTML = `

        <div class="page-header">

            <h2>
                System Settings
            </h2>

            <p>
                Manage administrator and school settings.
            </p>

        </div>


        <div class="settings-grid">


            <div class="card card-padding settings-menu">

                <button class="active">
                    👤 Profile
                </button>

                <button>
                    🏫 School Information
                </button>

                <button>
                    🔔 Notifications
                </button>

                <button>
                    🔒 Security
                </button>

            </div>


            <div class="card card-padding">

                <div class="card-header">

                    <div>

                        <h2>
                            Administrator Profile
                        </h2>

                        <p>
                            Update your account information.
                        </p>

                    </div>

                </div>


                <form id="settingsForm">

                    <div class="form-grid">

                        <div class="form-group">

                            <label>
                                Full Name
                            </label>

                            <input
                                value="Admin User"
                                id="adminName"
                            >

                        </div>


                        <div class="form-group">

                            <label>
                                Email
                            </label>

                            <input
                                value="admin@eduadmin.com"
                                id="adminEmail"
                            >

                        </div>


                        <div class="form-group">

                            <label>
                                Phone
                            </label>

                            <input
                                value="+91 98765 00000"
                                id="adminPhone"
                            >

                        </div>


                        <div class="form-group">

                            <label>
                                Role
                            </label>

                            <input
                                value="Administrator"
                                disabled
                            >

                        </div>

                    </div>


                    <div class="form-actions">

                        <button
                            type="submit"
                            class="btn"
                        >
                            Save Settings
                        </button>

                    </div>

                </form>

            </div>

        </div>

    `;


    document
        .getElementById("settingsForm")
        .addEventListener(
            "submit",
            function(event) {

                event.preventDefault();

                showToast(
                    "Settings saved successfully."
                );

            }
        );

}


/* =========================================================
   LOGOUT
========================================================= */

document
    .getElementById("logoutBtn")
    .addEventListener(
        "click",
        function() {

            if (
                confirm(
                    "Are you sure you want to logout?"
                )
            ) {

                window.location.href =
                    "login.html";

            }

        }
    );


/* =========================================================
   NOTIFICATION
========================================================= */

document
    .getElementById("notificationBtn")
    .addEventListener(
        "click",
        function() {

            openModal(`

                <h2>
                    Notifications
                </h2>

                <br>

                ${activity(
                    "👨‍🎓",
                    "New student Arjun Sharma was registered.",
                    "10 minutes ago"
                )}

                ${activity(
                    "📝",
                    "Mathematics exam results published.",
                    "1 hour ago"
                )}

                ${activity(
                    "💰",
                    "25 fee payments received.",
                    "Yesterday"
                )}

            `);

        }
    );


/* =========================================================
   MOBILE MENU
========================================================= */

document
    .getElementById("mobileMenu")
    .addEventListener(
        "click",
        function() {

            document
                .querySelector(".sidebar")
                .classList.toggle("open");

        }
    );


/* =========================================================
   INITIAL PAGE
========================================================= */

renderDashboard();
