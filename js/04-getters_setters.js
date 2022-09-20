'use strict'

class Course {
    constructor({
        name,
        classes = [],
    }) {
        this._name = name;
        this._classes = classes;
    }
    get name() {
        return this._name;
    }
    set name(nuevoNombre) {

        if (nuevoNombre === "Curso malito de programación Basica"){
            console.error("Web... no")
        }else {
            this._name = nuevoNombre;
        }
    }
}
const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica"
});