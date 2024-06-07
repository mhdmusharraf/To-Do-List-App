
const update_btn = document.querySelector('.update-btn');

update_btn.addEventListener('click', async () => {
    const allTasks = Array.from(document.querySelectorAll('.task__input'));
    
    const checkedTasks = allTasks.filter((task) => {
        return task.checked; 
    });

    checkedTasks.forEach(async (task) => {
        await fetch(`http://localhost:3000/todos/update/${task.id}`,{ method: 'POST'}).then(()=>{
            window.location.href = "http://localhost:3000/todos";
        })});
    
});