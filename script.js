const inputBox = document.querySelector("#inputBox")
const btn = document.querySelector(".addTask")
const tasks = document.querySelector(".tasks")
const nothing = document.querySelector(".nothing")
const number = document.querySelector(".number")
let taskCount = 0
const clearBtn = document.querySelector(".clear-btn")
// const sun = document.querySelector(".sun")


inputBox.addEventListener("keydown",(e)=>{
        if(e.key === "Enter"){
            btn.click()
        }
})

btn.addEventListener("click", (e) => {
    const taskBox = document.createElement("div")
    if (inputBox.value.trim() === "") {
        alert("Please enter your task!")
        return
    }
    nothing.style.display = "none"
    taskBox.classList.add("task-box")

    taskBox.innerHTML = `
        <h3 class="task-title">${inputBox.value}</h3>
                <div class="options">
                    <i class="ri-check-line tick"></i>
                    <i class="ri-edit-line edit"></i>
                    <i class="ri-delete-bin-line delete"></i>
                    </div>
    `
    taskCount += 1
    number.textContent = taskCount
    tasks.appendChild(taskBox)
    localStorage.setItem("tasks", tasks.innerHTML)
    localStorage.setItem("count", taskCount)
    inputBox.value = ""

})

tasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("tick")) {
        const parentTask = e.target.closest(".task-box")
        if (parentTask.classList.contains("completed")) {
            parentTask.classList.remove("completed")
            taskCount++
        }
        else {
            parentTask.classList.add("completed")
            taskCount--
        }
        number.textContent = taskCount


        if (tasks.querySelector(".task-box") === null) {
            tasks.innerHTML = `
        <div class="nothing">
            <span>
                <i class="fa-solid fa-person-drowning person"></i>
                <h1>There is nothing to show here.... Add Some tasks</h1>
            </span>
        </div>
    `
        }

        localStorage.setItem("tasks", tasks.innerHTML)
        localStorage.setItem("count", taskCount)

    }

    if (e.target.classList.contains("delete")) {
        const parentTask = e.target.closest(".task-box")

        if (!parentTask.classList.contains("completed")) {
            taskCount--
        }
        parentTask.remove()
        number.textContent = taskCount
        localStorage.setItem("tasks", tasks.innerHTML)
        localStorage.setItem("count", taskCount)
    }

    if (e.target.classList.contains("edit")) {
        let newInput = prompt("Edit your task...")
        const parentTask = e.target.closest(".task-box")
        const tasktitle = parentTask.querySelector(".task-title")

        if (newInput && newInput.trim() != "") {
            tasktitle.textContent = newInput

        }
        localStorage.setItem("tasks", tasks.innerHTML)

    }

})


const savedTasks = localStorage.getItem("tasks")
const savedCount = localStorage.getItem("count")


if (savedTasks) {
    tasks.innerHTML = savedTasks
    nothing.style.display = "none"
}

if (savedCount) {
    taskCount = Number(savedCount)
    number.textContent = taskCount
}

clearBtn.addEventListener("click", () => {

    localStorage.removeItem("tasks")
    localStorage.removeItem("count")

    tasks.innerHTML = `
        <div class="nothing">
            <span>
                <i class="fa-solid fa-person-drowning person"></i>
                <h1>There is nothing to show here.... Add Some tasks</h1>
            </span>
        </div>
    `

    taskCount = 0
    number.textContent = 0
})
