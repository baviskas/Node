var express = require('express');
var router = express.Router();
let taskService = require('../services/taskService');

/* GET tasks listing. */

//get - /tasks --> Renders list of all tasks.
router.get('/', function(req, res, next) {
    res.render('tasks/index', {list: taskService.getAll()}); //render takes params as, path to template and variables to be passed as an object.
});

//get - /tasks/new --> serves a HTML page where user can submit new task.
router.get('/new', function (req, res, next) {
   res.render('tasks/new');
});

//post - /tasks/new --> add incoming task to the taskList arr and redirect user to /tasks route.
router.post('/new',function (req, res, next) {
    let taskName = req.body.newTask;
    taskService.add(taskName);
   res.redirect('/tasks');   // Redirecting to /tasks
});

//post - /tasks/toggle  --> toggle completed status of the given ID.

router.post('/toggle',function (req, res, next) {
    let taskId = parseInt(req.body.id);
    let task = taskService.toggle(taskId);
    res.json(task);
});

module.exports = router;
