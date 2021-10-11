


function obtenerdatos()
	{ //toma los valorew de los input y muestra los resultados en la tala de abajo
		let nombre = document.getElementById('nombre').value;
		let edad = parseFloat(document.getElementById('edad').value);
      

		document.registro.nombreobtenido.value = nombre;
		document.registro.edadobtenida.value = edad;
        console.log (nombre);
        console.log (edad);

       //los resultados tambien se ven en el console acumulados hasta no cargar nuevamente la página
  }

  let form = document.getElementById("formulario");
    form.addEventListener("submit", validarFormu);

    function validarFormu(e){
        e.preventDefault();
        console.log("datos enviados");

    }

 
//complementario D:
const librero = [ 

    
    { id:1, nombre: "El hombre ilustrado", autor:"Ray Bradbury", precio: 850},
    { id:2, nombre: "Tokio Blues", autor: "Herman Hesse",  precio: 900},
    { id:3, nombre: "Damian",autor:"Haruki Murakami", precio: 800}, 
    { id:4, nombre: "Historia de dos ciudades", autor: "charles Dickens", precio: 700}
  
  ]
  // lista de objetos del dom a htmlmostrandolos en un div
  for (const libro of librero) {
  
      let contenedor = document.createElement ("div"); 
  // acordarme de usar estos `` mas seguido sirve sirve :D
      contenedor.innerHTML = `
      
      <hr>
      <h3> libro: ${libro.nombre} </h3>
      <h4> autor: ${libro.autor}</h4>
      <P> ID: ${ libro.id} </P>
      <p> $ ${libro.precio} </p>
      `;
      
      document.body.appendChild(contenedor);    
  
  
  }

   // para guardar en el localstorage
   const guardarlLocal = (clave, valor) => { localStorage.setItem (clave, valor)};

   guardarlLocal ("listaLibros", JSON.stringify(librero));