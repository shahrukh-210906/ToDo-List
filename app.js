

const wrapper = document.querySelector(".wrapper");
const menuBtn = document.querySelector(".menu-btn");
const backBtn = document.querySelector(".back-btn")
const toggleScreen = () => {
    wrapper.classList.toggle("show-category");
};

menuBtn.addEventListener("click", toggleScreen);
backBtn.addEventListener("click", toggleScreen);

const addTaskBtn = document.querySelector(".add-task-btn");
const addTaskForm = document.querySelector(".add-task");
const blackBackdrop = document.querySelector(".black-backdrop");

const toggleAddTaskForm = () => {
    addTaskForm.classList.toggle("active");
    blackBackdrop.classList.toggle("active");
    addTaskBtn.classList.toggle("active");
};

addTaskBtn.addEventListener("click", toggleAddTaskForm);
blackBackdrop.addEventListener("click", toggleAddTaskForm);


// add tasks and categories
let categories = [
    {
        title: "Personal",
        img: "boy.png"
    },
    {
        title: "Work",
        img: "briefcase.png"
    },
    {
        title: "Shopping",
        img: "shopping.png"
    },
    {
        title: "Coding",
        img: "web-design.png"
    },
    {
        title: "Health",
        img: "healthcare.png"
    },
    {
        title: "Fitness",
        img: "dumbbell.png"
    },
    {
        title: "Education",
        img: "education.png"
    },
    {
        title: "Finance",
        img: "saving.png",
    }
];

let tasks = [
    {
        id: 1,
        task: "Bath",
        categories: "Personal",
        completed: false,
    },
    {
        id: 2,
        task: "Buy a t-shirt",
        categories: "Shopping",
        completed: false,
    },
    {
        id: 3,
        task: "Go to Office",
        categories: "Work",
        completed: false,
    },
    {
        id: 4,
        task: "Make to-do list",
        categories: "Coding",
        completed: false,
    },
    {
        id: 5,
        task: "Take medicines",
        categories: "Health",
        completed: false,
    },
    {
        id: 6,
        task: "Go to Gym",
        categories: "Fitness",
        completed: false,
    },
    {
        id: 7,
        task: "Study Physics",
        categories: "Education",
        completed: false,
    },
    {
        id: 8,
        task: "Save $50000",
        categories: "Finance",
        completed: false,
    },
    
]

let selectedCategory = categories[0];

const categoriesContainer = document.querySelector(".categories");
const categoryTitle = document.querySelector(".category-title");
const totalcategoryTasks = document.querySelector(".category-task");
const categoryImg = document.querySelector("#category-img");
const totalTasks = document.querySelector(".total-tasks");

const calculateTotalTasks = () => {
    const TasksInCategory = tasks.filter(
        (task) => task.categories.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    totalcategoryTasks.innerHTML = `${TasksInCategory.length} Tasks`;
    totalTasks.innerHTML = tasks.length;
};

calculateTotalTasks();

const renderCategories = () => {
    categoriesContainer.innerHTML = "";
    categories.forEach((category) => {
        const TasksInCategory = tasks.filter(
            (task) => task.categories.toLowerCase() === category.title.toLowerCase()
        );

        const div = document.createElement("div");
        div.classList.add("category");
        div.addEventListener("click", () =>{
            wrapper.classList.add("show-category");
            selectedCategory = category;
            categoryTitle.innerHTML = category.title;
            categoryImg.src = `./images/${category.img}`;
            calculateTotalTasks();
            
        });

        div.innerHTML =`
                            <div class="left">
                            <img src="./images/${category.img}" alt="${category.title}">
                            <div class="content">
                                <h1>${category.title}</h1>
                                <p>${TasksInCategory.length} tasks</p>
                            </div>
                        </div>
                        <div class="options">
                            <div class="toggle-btn">
                                <svg width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#1C274C"></path> <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#1C274C"></path> <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#1C274C"></path> </g></svg>
                            </div>
                        </div>
                        `;

        categoriesContainer.appendChild(div);
    });
};
calculateTotalTasks();
renderCategories();