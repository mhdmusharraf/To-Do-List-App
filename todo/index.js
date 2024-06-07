const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Task = require('./models/task');
const Task_History = require('./models/task_history');

const methodOverride = require('method-override');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://mhdmusharrafedu:c4XGiwWUlL0k9tzx@cluster0.c1bua1g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log("MONGOOSE CONNECTION ESTABLISHED."))
    .catch((err) => console.log("MONGOOSE ERROR \n"+err));

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get('/todos', async (req, res) => {
    const tasks = await Task.find({});
    res.render('showList', { tasks });
})

app.post('/todos', async (req, res) => {
    const newTask = req.body;
    const T1 = new Task(newTask);
    await T1.save();
    res.redirect('/todos');
})

app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;
    console.log("deleted.....................")
    const getTask = await Task.findByIdAndDelete(id);
    console.log(getTask);

    res.redirect('/todos');
})

app.post('/todos/update/:id', async (req, res) => {
    const { id } = req.params;
    
    const getTask = await Task.findById(id);
    
    const T1 = new Task_History({title: getTask.title, category: getTask.category});
    await T1.save();

    const g = await Task.findByIdAndDelete(id);
    res.redirect('/todos');
})

app.get('/todos/history', async (req, res) => {
    const tasks = await Task_History.find({});
    res.render('taskHistory', { tasks });
})

app.delete('/todos/history/:id', async (req, res) => {
    const { id } = req.params;
    const getTask = await Task_History.findByIdAndDelete(id);
    console.log("history deleted");
    console.log(getTask);

    res.redirect('/todos/history');
})


app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000 ...");

})