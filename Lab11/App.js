import React, { useState, useEffect } from "react";
import StudentList from "./StudentList.js";
import StudentForm from "./StudentForm.js";

export default function App() {
    const [students, setStudents] = useState(() => {
        return JSON.parse(localStorage.getItem("students")) || [];
    });

    const addStudent = (name) => {
        const updated = [...students, name];
        setStudents(updated);
        localStorage.setItem("students", JSON.stringify(updated));
    };

    const removeStudent = (index) => {
        const updated = students.filter((_, i) => i !== index);
        setStudents(updated);
        localStorage.setItem("students", JSON.stringify(updated));
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Список студентов</h2>
            <StudentForm addStudent={addStudent} />
            <StudentList students={students} removeStudent={removeStudent} />
        </div>
    );
}