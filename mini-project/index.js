let students = JSON.parse(localStorage.getItem("students")) || [];
let currentPage = 1;
const pageSize = 5;

document.getElementById("createStudent").addEventListener("click", createStudent);

function createStudent() {
    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const math = parseFloat(document.getElementById('math').value);
    const english = parseFloat(document.getElementById('english').value);
    const literature = parseFloat(document.getElementById('literature').value);

    if (
        name && gender &&
        !isNaN(math) && !isNaN(english) && !isNaN(literature) &&
        math >= 0 && math <= 10 &&
        english >= 0 && english <= 10 &&
        literature >= 0 && literature <= 10
    ) {
        const avg = ((math + english + literature) / 3).toFixed(2);
        students.unshift({ name, gender, math, english, literature, avg });
        saveToLocalStorage();
        renderTable();
        clearForm();
    } else {
        alert('Please fill out all fields and ensure scores are between 0 and 10');
    }
}

function clearForm() {
    document.getElementById('name').value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById('math').value = '';
    document.getElementById('english').value = '';
    document.getElementById('literature').value = '';
}

function deleteStudent(index) {
    students.splice(index, 1);
    saveToLocalStorage();
    renderTable();
}

function updateStudent(index) {
    const student = students[index];
    document.getElementById('name').value = student.name;
    document.querySelector(`input[name="gender"][value="${student.gender}"]`).checked = true;
    document.getElementById('math').value = student.math;
    document.getElementById('english').value = student.english;
    document.getElementById('literature').value = student.literature;
    deleteStudent(index);
}

function searchStudent() {
    const keyword = document.getElementById('search').value.toLowerCase();
    const filtered = students.filter(student =>
        student.name.toLowerCase().includes(keyword) ||
        student.gender.toLowerCase().includes(keyword)
    );
    renderTable(filtered);
}

function renderTable(data = students) {
    const table = document.getElementById('student-table');
    table.innerHTML = '';
    const start = (currentPage - 1) * pageSize;
    const paginated = data.slice(start, start + pageSize);

    if (paginated.length === 0 && currentPage > 1) {
        currentPage--;
        return renderTable();
    }

    paginated.forEach((student, index) => {
        const row = `<tr>
            <td>${start + index + 1}</td>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.math}</td>
            <td>${student.english}</td>
            <td>${student.literature}</td>
            <td>${student.avg}</td>
            <td>
                <button class="update-btn" onclick="updateStudent(${start + index})">Update</button>
                <button class="delete-btn" onclick="deleteStudent(${start + index})">Delete</button>
            </td>
        </tr>`;
        table.innerHTML += row;
    });
    document.getElementById('page-info').innerText = `Page ${currentPage}`;
}

function changePage(direction) {
    const maxPage = Math.ceil(students.length / pageSize);
    if (currentPage + direction > 0 && currentPage + direction <= maxPage) {
        currentPage += direction;
        renderTable();
    }
}

function saveToLocalStorage() {
    localStorage.setItem("students", JSON.stringify(students));
}

window.onload = function () {
    const storedStudents = localStorage.getItem("students");
    if (storedStudents) {
        students = JSON.parse(storedStudents);
    }
    renderTable();
};