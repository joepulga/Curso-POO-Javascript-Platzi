
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
        "cursoJs",
        "cursoReact",
        "CursoAsincronismo",
    ]
});

const escuelaDataScience = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
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

