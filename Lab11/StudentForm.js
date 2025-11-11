import React, { useState } from "react";

export default function StudentForm({ addStudent }) {
    const [text, setText] = useState("");

    return (
        <div style={{ marginBottom: 10 }}>
            <input
                type="text"
                placeholder="Имя студента..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => {
                if (text.trim() !== "") {
                    addStudent(text);
                    setText("");
                }
            }}>
                Добавить
            </button>
        </div>
    );
}