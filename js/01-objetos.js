'use strict'

const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados:[
        "Curso definitivo de HTML Y CSS",
        "Curso Práctico de HTML Y CSS",
    ],
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }
};

function Student ( name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function(nuevoCurso){
    //     this.cursosAprobados.push(nuevoCurso)
    // }
}
Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso)
}

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introducción a los videojuegos",
        "Curso de creación de personajes"
    ]
);

//
