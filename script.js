function addTask(type) {
    const inputId = type + "-input";
    const listId = type + "-list";

    const input = document.getElementById(inputId);
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement("li");
    li.innerHTML = `
    <span class="task">${text}</span>
    <div>
      <span class="tick">✔</span>
      <span class="delete">✖</span>
    </div>
  `;

    const tick = li.querySelector(".tick");
    const del = li.querySelector(".delete");
    const taskText = li.querySelector(".task");

    tick.addEventListener("click", () => {
        taskText.classList.toggle("completed");
    });

    del.addEventListener("click", () => {
        li.remove();
    });

    document.getElementById(listId).appendChild(li);
    input.value = "";
    input.focus();
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        if (document.activeElement.id === "todo-input") addTask('todo');
        if (document.activeElement.id === "daily-input") addTask('daily');
        if (document.activeElement.id === "monthly-input") addTask('monthly');
    }
});
