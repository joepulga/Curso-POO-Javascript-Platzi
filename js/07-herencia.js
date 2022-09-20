
class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    }) {
        this.name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    isFree: true,
});
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});

const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
    lang: "english",
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

// Clase Padre
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

class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.isFree ){
            this.approvedCourses.push(newCourse)
        }else {
            console.warn("Lo sentimos" + this.name + "Solo puedes tomar cursos abiertos");
        }
    }
    
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== "english" ){
            this.approvedCourses.push(newCourse)
        }else {
            console.warn("Lo sentimos" + this.name + "Solo puedes tomar cursos en inglés");
        }
    }
}

class ExperStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse)      
    }
}


const juan = new FreeStudent({
    name: "Joe",
    username: "joepulga",
    email: "pulgarinjoe@gmail.com",
    twitter : "@jopulga",
    learningPaths: [
        escuelaWeb
    ],
})

const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "MiguelitoFeliz",
    email: "miguelito@miguel.com",
    twitter : "@Miguelito",
    learningPaths: [
        escuelaDataScience
    ],
})