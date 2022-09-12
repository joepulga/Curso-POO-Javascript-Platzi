'use strict'

// prototipos con la sintaxis de clases.
class Student {
    constructor({
        name,
        age,
        cursosAprobados = [],
        email
    }){
        this. name = name;
        this. age = age;
        this. cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const miguelito = new Student({
    email: "miguelito@platzi.com",
    name: "Miguel",
    age: 28,
    
});