let menu_responsive = document.querySelector(".checkbtn");

      menu_responsive.onclick = function () {
        navBar = document.querySelector(".navbar");
        navBar.classList.toggle("active");
      };


       /*fornulario*/

      const form = document.getElementById("form");
      const nombre = document.getElementById("nombre");
      const parrafo = document.getElementById("alertas");
      
      function validarFormulario() {
        let warnings = "";
        let valido = true;
        parrafo.innerHTML = "";
      
        if (nombre.value.length < 4) {
          warnings += `El nombre debe contener más de 4 carcateres`;
          valido = false;
        }
      
        if (!valido) {
          parrafo.innerHTML = warnings;
        } else {
          parrafo.innerHTML = "Enviado";
        }
        return valido;
      }
      
      form.addEventListener("submit", (e) => {
        if (validarFormulario()) {
          // Si la validación es exitosa, puedes enviar el formulario
          formulario.submit();
        } else {
          e.preventDefault(); // Evita que el formulario se envíe automáticamente
        }
      });





//alert("Hola este es mi Javascript");

//let nombre = "WILLIAM";
     

//var nombre1 = "Marta";

//const nombre2 = "Marta";

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

//Revisar cómo se puede acceder a un elemento HTML desde el DOM y cambiar su contenido. (pendiente)

//Revisar cómo se escriben condiciones en Javascript
//Revisar cómo se utilizan funciones en Javascript

//1.Crea un condicional que modifique el texto del elemento “Acerca de mí” dependiendo de si la condición se cumple o no se cumple.  (pendiente)

//2.Crea una función que modifique el texto del elemento “Acerca de mí” definiendo previamente en la función el texto que quiero utilizar.  (pendiente)


let menu_responsive = document.querySelector(".checkbtn");

      menu_responsive.onclick = function () {
        navBar = document.querySelector(".navbar");
        navBar.classList.toggle("active");
      };

      

let contenidoh2 = "Acerca de Mi";

let h2 = document.querySelector(".log .fuente- ") 
h2.innerHTML = contenidoh2;

//(condicional)

let textoh2 = h2.innerText;
console.log(textoh2);

if (textoh2 == "Acerca de Mi") {
    h2.innerHTML = "SOY YO";
} else {
    console.log("no se cumple")
}

//(funciones) 

let nombre = "YO";
let ciudad = "Tokio";
let gusto  = "Cine";

let parrafo = document.querySelector(".parrafo2");


function cambiarTexto(nombre, ciudad,  gusto) {
    let contenido = ´Hola me llamo ${nombre}$, soy de ${ciudad}$. Me encanta aprender nuevas cosas y compartirlas con los demas, soy apasionado por el ${gusto}$ y la tecnologia. En este mundo de la programacion espero poder darte mi conocimiento para que asi, juntos creemos un mundo fascinante e innovador para la presente y futura generacion´.;

    return contenido;
}

parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);
