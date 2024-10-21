const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

const courses = [
    {
        name: "Computer Science",
        code: "CS101",
        description: "Learn the fundamentals of computer science.",
        subjects: ["Programming", "Algorithms", "Data Structures", "Operating Systems"]
    },
    {
        name: "Mechanical Engineering",
        code: "ME201",
        description: "Understand the mechanics behind machines.",
        subjects: ["Thermodynamics", "Fluid Mechanics", "Materials Science", "Mechanical Design"]
    },
    {
        name: "Electrical Engineering",
        code: "EE301",
        description: "Explore the world of electricity and circuits.",
        subjects: ["Circuit Theory", "Electromagnetism", "Digital Systems", "Power Electronics"]
    }
];

app.get('/', (req, res) => {
    res.render('index', { courses });
});

app.get('/course/:code', (req, res) => {
    const courseCode = req.params.code;
    const course = courses.find(c => c.code === courseCode);
    
    if (course) {
        res.render('course', { course });
    } else {
        res.status(404).send('Course not found');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
