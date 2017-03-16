function Persona(nombre,edad,genero){
  this.nombre=nombre;
  this.edad=edad;
  this.genero=genero;
  this.obtDetalles=function(){
      var div=document.createElement("div");
      var p=document.createElement("p");
      p.innerHTML += "Nombre: "+this.nombre+"<br>"+
                     "Edad: " +this.edad+"<br>"+
                     "Genero: "+this.genero
      div.appendChild(p);
      return div;
  };
}

function Estudiante(persona,curso,grupo){
  this.persona=persona;
  this.curso=curso;
  this.grupo=grupo;
  this.registrar=function(){
      var div=document.createElement("div");
      var p=document.createElement("p");
      p.innerHTML +="Nombre: "+this.persona.nombre+"<br>"+
                    "Edad: "  +this.persona.edad+"<br>"+
                    "Genero: "+this.persona.genero+"<br>"+
                    "curso: " +this.curso+"<br>"+
                    "Grupo: " +this.grupo
      div.appendChild(p);
      return div;
    };
}

function Profesor(persona,asignatura,nivel){
  this.persona=persona;
  this.asignatura=asignatura;
  this.nivel=nivel;
  this.asignar=function(){
    var div=document.createElement("div");
    var p=document.createElement("P");
    p.innerHTML +="Nombre: "+this.persona.nombre+"<br>"+
                "Edad: "  +this.persona.edad+"<br>"+
                "Genero: "  +this.persona.genero+"<br>"+
                "Asignatura: "+this.asignatura+"<br>"+
                "Nivel: "+this.nivel
    div.appendChild(p);
    return div;
  };
}
var persona1=new Persona("Brilly",23,"femenino");
var estudiante1=new Estudiante(persona1,"Front End","A");
var profesor1=new Profesor(persona1,"Javascript","Basico");

var contenedor=document.getElementById("contenedor");
contenedor.appendChild(persona1.obtDetalles());
contenedor.appendChild(estudiante1.registrar());
contenedor.appendChild(profesor1.asignar());
