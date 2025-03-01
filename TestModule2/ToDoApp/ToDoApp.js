document.addEventListener("DOMContentLoaded", function() {
    const inputKey = document.getElementById('inputKey');
    const add = document.getElementById('add');
    const list = document.getElementById('list');
    const contents = document.querySelectorAll('.content'); 
    const deleteBtn = document.getElementById('delete');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let filterActive = 'all';

    // Hiển thị danh sách các task
    function showTask() {
        list.innerHTML = "";

        const filterTask = tasks.filter(task => {
            if (filterActive === 'active') return !task.completed;
            if (filterActive === 'completed') return task.completed;
            return true;
        });

        filterTask.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" data-index="${index}" ${task.completed ? "checked" : ""}>
                <span class="${task.completed ? "completed" : ""}">${task.text}</span>
                ${filterActive === "completed" ? `<button class="delete" data-index="${index}">✖</button>` : ""}
            `;
            list.appendChild(li);
        });
        
        inputKey.style.display = filterActive === "completed" ? "none" : "block";
        add.style.display = filterActive === "completed" ? "none" : "block";
        deleteBtn.style.display = filterActive === "completed" ? "block" : "none";
        
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Thêm task mới khi bấm add
    add.addEventListener("click", function() {
        const text = inputKey.value.trim();
        if (text) {
            tasks.push({ text: text, completed: false });
            inputKey.value = "";
            showTask();
        }
    });

    // Xử lý checkbox và delete
    list.addEventListener("click", function(e) {
        const index = e.target.dataset.index;
        if (index !== undefined) {
            if (e.target.type === "checkbox") {
                tasks[index].completed = !tasks[index].completed;
            }
            if (e.target.classList.contains("delete")) {
                tasks.splice(index, 1);
            }
            showTask();
        }
    });

    // Xử lý chuyển đổi tiêu đề các task
    contents.forEach(content => {
        content.addEventListener("click", function() {
            contents.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterActive = this.dataset.content;
            showTask();
        });
    });

    // Xử lý hàm delete tất cả task
    deleteBtn.addEventListener("click", function() {
        tasks = [];
        showTask();
    });

    showTask();
});
