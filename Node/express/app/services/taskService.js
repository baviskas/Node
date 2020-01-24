let taskList = [
    { id: 1, name:'Revise JS and fundamentals', isCompleted: false },
    { id: 2, name:'Master NodeJS', isCompleted: false },
    { id: 3, name:'Master  ReactJS', isCompleted: false },
    { id: 4, name:'Learn basics of MongoDB', isCompleted: false }
];

module.exports = {
    getAll : function () {
        return taskList.slice(0)
    },
    add: function (taskName) {
        let newId = taskList.reduce(function (seed, task) {
            return seed > task.id ? seed : task.id                //funct to find largest number in arr.
        }, 0) + 1;
        let newTask = {
            id: newId,
            name: taskName,
            isCompleted: false
        };
        taskList.push(newTask);
    },
    toggle: function (taskId) {
        let task = taskList.filter(function (task) {    //task is reference to the matched taskElem. Hence updating its attribute
            return task.id === taskId                   // will update actual task element in the array...
        })[0];
        if(task) {
            task.isCompleted = !task.isCompleted;
        }
        return task;
    }
};