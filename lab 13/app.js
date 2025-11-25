let students = [];
let studentMap = new Map();

// Добавление
function addStudent() {
    const name = document.getElementById("nameInput").value.trim();
    if (!name) return alert("Введите имя!");

    const id = Date.now();
    const student = { id, name };

    students.push(student);
    studentMap.set(id, student);

    renderList();
    document.getElementById("nameInput").value = "";
}

// Удаление
function deleteStudent(id) {
    students = students.filter(s => s.id !== id);
    studentMap.delete(id);
    renderList();
}

// Поиск
function searchStudent() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const results = students.filter(s => s.name.toLowerCase().includes(search));
    renderList(results);
}

// Сортировка
function sortStudents() {
    students.sort((a, b) => a.name.localeCompare(b.name));
    renderList();
}

// Отрисовка
function renderList(list = students) {
    const ul = document.getElementById("studentList");
    ul.innerHTML = "";

    list.forEach(s => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${s.name}
            <span class="btn" onclick="deleteStudent(${s.id})">Удалить</span>
        `;
        ul.appendChild(li);
    });
}
