const addNewTask = document.querySelector('.addTask');

const list = document.querySelector('.task-box');

const search = document.querySelector('.search input');

const countTask = document.querySelector('.numberOfTask span');

const progress = document.querySelector('.progress-box');

// console.log(list.children.length);

// count number of task 
const checkNumberOfTask = () =>
{
    const count = list.children.length;
   
    if(count === 0){
        search.classList.add('hide');
        countTask.innerHTML = `${count} tasks`;
    }else{
        search.classList.remove('hide');
        countTask.innerHTML = `${count} tasks`;
    }

};

checkNumberOfTask();


//Add New Task
const generateHtmlTemplate = task => {
    
    const html = 
    `<li class="task-list py-2 my-3 d-flex justify-content-between px-4 py-3">
        <span>${task}</span>
        <i class="fas fa-trash-alt delete"></i>
    </li>`;

    list.innerHTML += html;
};

addNewTask.addEventListener('submit', e => {

    e.preventDefault();

    const task = addNewTask.addTask.value.trim();

    if(task.length){
        generateHtmlTemplate(task);
        addNewTask.reset();
        checkNumberOfTask();
        // calculatePercentage();

    }

});

//Delete Task

list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        
        e.target.parentElement.remove();
        checkNumberOfTask();
    }

});


//Search Task

const filtered = SearchTask = (wordSearch) => {
 
    Array.from(list.children)
    .filter((task) => !task.textContent.toLowerCase().includes(wordSearch)) //compare task and term by using .includes
    .forEach((task) => task.classList.add('hide'));

    Array.from(list.children)
    .filter((task) => task.textContent.toLowerCase().includes(wordSearch))
    .forEach((task) => task.classList.remove('hide'));
}

search.addEventListener('keyup', () => {

    const wordSearch = search.value.trim().toLowerCase();

    SearchTask(wordSearch);
});

//Task Completed

// let done = 0;
// let score = 0;
// const calculatePercentage = () => {
//     done++;
//     score = (done/list.children.length)*100;
        
//     const html = `<p class="text-center py-3"><span>${score}%</span> Task Completed!</p>`;

//     progress.innerHTML = html;
// };

// list.addEventListener('click', e => {
    
//     if(e.target.tagName==='LI' || e.target.tagName==='SPAN')
//     {
//         e.target.style.textDecoration = 'line-through';
//         calculatePercentage();
       
//       };
    
// });