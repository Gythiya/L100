// One-time To-Do list: tick = remove
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="tick-btn" onclick="removeTask(this)">✔</button>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function removeTask(element) {
    element.parentElement.remove();
}

// Daily tasks: tick = mark completed, but item stays
function addDailyTask() {
    const input = document.getElementById("dailyInput");
    const taskText = input.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <div class="daily-left">
            <input type="checkbox" onchange="toggleDailyComplete(this)">
            <span class="task-text">${taskText}</span>
        </div>
    `;

    document.getElementById("dailyList").appendChild(li);
    input.value = "";
}

function toggleDailyComplete(checkbox) {
    const textSpan = checkbox.nextElementSibling;
    if (!textSpan) return;
    textSpan.classList.toggle("completed", checkbox.checked);
}
