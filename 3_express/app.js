const express = require('express');
const myMiddleware = require('./middlewares/middle')
const app = express();
const morgan = require('morgan');

app.use(express.json);
app.use(myMiddleware);

app.use(function(req,res,next) {
    console.log('I am the second middleware')
    next();
})

app.use(morgan)

let courses = [
    {id:1, name:'javascript'},
    {id:2, name:'java'},
    {id:3, name:'python'}
]

let port = 3000;

app.get('/', (req,res) => {
    res.send('Hello from avi');
})

app.get('/about',(req,res)=> {
    res.send('we created / about in express')
})

app.get('/contact',(req,res)=> {
    res.send('Contact us at avi@gmail.com')
})

app.get('/courses', (req,res) => {
    res.send(courses)
})

app.post('/courses', (req,res) => {
    const  course = {
        id: courses.length +1,
        name: req.body.name
    }
    
    courses.push(course);
    res.send(course);
})

app.put('/courses/:coursename', (req, res) => {
    let course = courses.find(course => course.id === parseInt(req.params.id));
    if(!course)res.status(404).send('The course youre looking for does not exist');

    course.name = req.body.name
    res.send(course)
})

// Route paramaters
app.get('/courses/:id', (req,res) => {
    console.log(req.params)
    let course = courses.find(course => course.id === parseInt(req.params.id));
    
    if(!course)res.status(404).send('The course youre looking for does not exist');
    res.send(course);
})

app.delete('/courses/:id' , (req,res) => {
    let updatedCourses = courses.filter(course => courses.name !== req.params.coursename)
    courses = updatedCourses
    res.send(courses);
})

app.listen(port,()=>{
    console.log(`Server is running at port : ${port}`);
})