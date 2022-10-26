const { Router } = require('express');
const { listCourses, addCourse, courseDetail } = require('../controllers/courses');


const router = Router();


// todos los cursos
router.get('/',listCourses);


// agregar un curso
router.post('/',addCourse);

// un curso
router.get('/:id',courseDetail);



// lo exporto
module.exports = router;