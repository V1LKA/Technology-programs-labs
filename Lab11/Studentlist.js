import React from "react";

export default function StudentList({ students, removeStudent }) {
    return (
        <ul>
            {students.map((name, index) => (
                <li key={index}>
                    {name} <button onClick={() => removeStudent(index)}>Удалить</button>
                </li>
            ))}
        </ul>
    );
}