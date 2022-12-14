class classes {
    constructor({
        name = [],
        instructor,
    }){
        this.name = name;
        this.instructor = instructor;
    }
}

const introducciónProgBasica = new classes({
    name: "¿Introducción a la programación Basica"
})
const introducciónHTML = new classes({
    name: "Introducción a HTML"
})

class Course {
    constructor({
        name,
        classes = [],
    }) {
        this.name = name;
        this.classes = classes;
    }
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    classes : introducciónProgBasica,
});
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
    classes: introducciónHTML,
});
const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
    classes: introducciónHTML,
});
class LearningPath {
    constructor({
        name,
        courses = []
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    name: "Escuela Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
        "CursoAsincronismo",
    ]
});

const escuelaDataScience = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "cursoPhyton",
        "cursoExcel",
        "Curso de probabilidad y estadistica",
    ],
})

class Student {
    constructor ({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;

    }
}

const juan2 = new Student({
    name: "Joe",
    username: "joepulga",
    email: "pulgarinjoe@gmail.com",
    twitter : "@jopulga",
    learningPaths: [
        escuelaWeb
    ],
})

const miguelito2 = new Student({
    name: "Miguelito",
    username: "MiguelitoFeliz",
    email: "miguelito@miguel.com",
    twitter : "@Miguelito",
    learningPaths: [
        escuelaDataScience
    ],
})

