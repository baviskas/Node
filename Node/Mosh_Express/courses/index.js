const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
   {id: 1, name: 'Angular'},
   {id: 2, name: 'React'},
   {id: 3, name: 'Javascript'},
   {id: 4, name: 'Node'},
   {id: 5, name: 'JAVA'}
];

app.get('/', (req, res) => {
   res.send('Hello world!!');
});

app.get('/api/courses', (req, res) => {
   res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
   // const course = courses.filter(course => course.id === parseInt(req.params.id));
   const course = courses.find(course => course.id === parseInt(req.params.id));

   if(!course) return res.status(404).send('Course with given ID not found');

   res.send(course);
});

app.post('/api/courses',(req,res) => {
   const { error } = validateCourse(req.body); //checking if request body matches defined Joi schema
   if(error) return res.status(400).send(error.details[0].message); // sending bad request status code along with error message.

   const course = {
      id: courses.length + 1,
      name: req.body.name
   };
   courses.push(course);
   res.send(course);
});

app.put('/api/courses/:id',(req,res) => {
   //Find if course is present. If not, mark it as resource not found
   const course = courses.find(course => course.id === parseInt(req.params.id));
   if(!course) return res.status(404).send('Course with given ID not found');

   //Validate body of request. If request body is not as per schema, mark t as bad request
   const { error } = validateCourse(req.body);
   if(error) return res.status(400).send(error.details[0].message);

   //If resource is found and body is as per schema, update course name and return response.
   course.name = req.body.name;
   res.send(course);
});

app.delete('/api/courses/:id',(req,res) => {
   const course = courses.find(course => course.id === parseInt(req.params.id));
   if(!course) return res.status(404).send('Course with given ID not found');

   const index = courses.indexOf(course);
   courses.splice(index,1);

   res.send(course);
});

function validateCourse(course) {
   const schema = {
      name: Joi.string().min(3).required()
   };
   return Joi.validate(course, schema);
}

const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`Listening on port ${port}`));
