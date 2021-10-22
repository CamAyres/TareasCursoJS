function obtenerdatos()
	{ //toma los valores de los input y muestra los resultados en la tabla de abajo
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

 
const librero = [ 

    
    { id:1, 
      nombre: "El hombre ilustrado", 
      autor:"Ray Bradbury", 
      precio: 850},
    { id:2, 
      nombre: "Tokio Blues", 
      autor: "Herman Hesse",  
      precio: 900},
    { id:3, 
      nombre: "Damian",
      autor:"Haruki Murakami", 
      precio: 800}, 
    { id:4, 
      nombre: "Historia de dos ciudades",
      autor: "charles Dickens",
      precio: 700},
    
    { id:5,
      nombre: "La vida invisible de Addie Larue",
      autor: "V. E. Schwab",
      precio: 1200}
  
  ]

   // para guardar mi lista de productos en el localstorage
  const guardarlLocal = (clave, valor) => { localStorage.setItem (clave, valor)};

  guardarlLocal ("listaLibros", JSON.stringify(librero));



//CARRITO DE COMPRA (lo del query lo tuve que chusmear bien para entender que hacia y xq me servía)
  let carrito = [];
  let total = 0;
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones


 //Dibuja todos los productos a partir del librero. No confundir con el carrito
 
function renderizarProductos() {
    librero.forEach((info) => {
        // Estructura
        const nodo = document.createElement('div');
        nodo.classList.add('card', 'col-sm-4');

        // Body
        const nodoCardBody = document.createElement('div');
        nodoCardBody.classList.add('card-body');

        // Titulo
        const nodoTitulo = document.createElement('h3');
        nodoTitulo.classList.add('card-titulo');
        nodoTitulo.textContent = info.nombre;

        /* Imagen (todavia no las voy a subir) tambien se tiene que hacer la linea para insertarlo en el html
        const nodoImagen = document.createElement('img');
        nodoImagen.classList.add('img-fluid');
        nodoImagen.setAttribute('src', info.imagen); */

        //autor
        const nodoAutor = document.createElement('h4');
        nodoAutor.classList.add('card-autor');
        nodoAutor.textContent = "Autor: " + info.autor;

        //ID
        const nodoId = document.createElement('p');
        nodoId.classList.add('card-id');
        nodoId.textContent = "ID: " + info.id;

        // Precio
        const nodoPrecio = document.createElement('p');
        nodoPrecio.classList.add('card-text');
        nodoPrecio.textContent = '$' + info.precio;

        // Boton
        const nodoBoton = document.createElement('button');
        nodoBoton.classList.add('btn', 'btn-primary');
        nodoBoton.textContent = '+';
        nodoBoton.setAttribute('marcador', info.id);
        nodoBoton.addEventListener('click', anyadirProductoAlCarrito);
     
      //para insertarlos en el html
        nodoCardBody.appendChild(nodoTitulo);
        nodoCardBody.appendChild(nodoAutor);
        nodoCardBody.appendChild(nodoId);
        nodoCardBody.appendChild(nodoPrecio);
        nodoCardBody.appendChild(nodoBoton);
        nodo.appendChild(nodoCardBody);
        DOMitems.appendChild(nodo);
    });
}


 // Evento para añadir un producto al carrito de la compra
 
function anyadirProductoAlCarrito(evento) {
   
    carrito.push(evento.target.getAttribute('marcador'));

    calcularTotal();
    // para actiaulizar carrito
    renderizarCarrito();

}


  //esto dibuja todos los productos guardados en el carrito

function renderizarCarrito() {
  
    DOMcarrito.textContent = '';
   
    const carritoSinDuplicados = [...new Set(carrito)];
    
    carritoSinDuplicados.forEach((item) => {
      
        const miItem = librero.filter((itemProductos) => {
            
            return itemProductos.id == parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
      
        const nodo = document.createElement('li');
        nodo.classList.add('list-group-item', 'text-right', 'mx-2');
        nodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - $${miItem[0].precio}`;
        //el primer $ es el simbolo de precio (DEJA DE BORRARLO CAMILA)

        // Boton de borrar (sacado de interneto :D)
        const botonCito = document.createElement('button');
        botonCito.classList.add('btn', 'btn-danger', 'mx-5');
        botonCito.textContent = 'X';
        botonCito.style.marginLeft = '16px'; // = a 1rem
        botonCito.dataset.item = item;
        botonCito.addEventListener('click', borrarItemCarrito);
       
        nodo.appendChild(botonCito);
        DOMcarrito.appendChild(nodo);
    });
}


 // Evento para borrar un elemento del carrito
 
function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
  
    renderizarCarrito();
 
    calcularTotal();
}


  //Calculando el precio total teniendo en cuenta los productos repetidos
 
function calcularTotal() {
    // para limpiar el precio anterior
    total = 0;
    // esto es para recorrer el array del carrito
    carrito.forEach((item) => {
        const miItem = librero.filter((itemProductos) => {
            return itemProductos.id === parseInt(item);
        });
        total = total + miItem[0].precio;
    });
    
    DOMtotal.textContent = total.toFixed(2);
}

//para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
   
    renderizarCarrito();
    calcularTotal();
}

// Evento boton vaciado de carrito 
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();


//TP animaciones


//animación del titulo principal h1, al no aparecer el slide toggle hace la funcion de slide down
$("h1").hide()
        .slideToggle(1000);


//DESAFÍO AJAX (usando api)

const URLGET = "https://rickandmortyapi.com/api/character";


$("#librazos").append ('<button id="botonL"> Ver personajes Rick & Morty</button>');

$("#botonL").click( () => 
{
  $.get(URLGET, function (respuesta, estado){

    console.log(respuesta);
    $("#librazos").append( 

      `<div>
        <h2>${respuesta.results[0].name} </h2>
        <p>Especie: ${respuesta.results[0].species}</p>
        <p>Status: ${respuesta.results[0].status}</p>
        <p>Origen: ${respuesta.results[0].origin.name}</p>
        <p>Location: ${respuesta.results[0].location.name}</p>
        <img class= "avatar" src="${respuesta.results[0].image}"></img>
        </div>

        <div>
        <h2>${respuesta.results[1].name} </h2>
        <p>Especie: ${respuesta.results[1].species}</p>
        <p>Status: ${respuesta.results[1].status}</p>
        <p>Origen: ${respuesta.results[1].origin.name}</p>
        <p>Location: ${respuesta.results[1].location.name}</p>
        <img class= "avatar" src="${respuesta.results[1].image}"></img>
        </div>

        <div>
        <h2>${respuesta.results[2].name} </h2>
        <p>Especie: ${respuesta.results[2].species}</p>
        <p>Status: ${respuesta.results[2].status}</p>
        <p>Origen: ${respuesta.results[2].origin.name}</p>
        <p>Location: ${respuesta.results[2].location.name}</p>
        <img class= "avatar" src="${respuesta.results[2].image}"></img>
        </div>

        <div>
        <h2>${respuesta.results[3].name} </h2>
        <p>Especie: ${respuesta.results[3].species}</p>
        <p>Status: ${respuesta.results[3].status}</p>
        <p>Origen: ${respuesta.results[3].origin.name}</p>
        <p>Location: ${respuesta.results[3].location.name}</p>
        <img class= "avatar" src="${respuesta.results[3].image}"></img>
        </div>

        <div>
        <h2>${respuesta.results[4].name} </h2>
        <p>Especie: ${respuesta.results[4].species}</p>
        <p>Status: ${respuesta.results[4].status}</p>
        <p>Origen: ${respuesta.results[4].origin.name}</p>
        <p>Location: ${respuesta.results[4].location.name}</p>
        <img class= "avatar" src="${respuesta.results[4].image}"></img>
        </div>

        <div>
        <h2>${respuesta.results[5].name} </h2>
        <p>Especie: ${respuesta.results[5].species}</p>
        <p>Status: ${respuesta.results[5].status}</p>
        <p>Origen: ${respuesta.results[5].origin.name}</p>
        <p>Location: ${respuesta.results[5].location.name}</p>
        <img class= "avatar" src="${respuesta.results[5].image}"></img>
        </div>


        <div>
        <h2>${respuesta.results[6].name} </h2>
        <p>Especie: ${respuesta.results[6].species}</p>
        <p>Status: ${respuesta.results[6].status}</p>
        <p>Origen: ${respuesta.results[6].origin.name}</p>
        <p>Location: ${respuesta.results[6].location.name}</p>
        <img class= "avatar" src="${respuesta.results[6].image}"></img>
        </div>


        <div>
        <h2>${respuesta.results[7].name} </h2>
        <p>Especie: ${respuesta.results[7].species}</p>
        <p>Status: ${respuesta.results[7].status}</p>
        <p>Origen: ${respuesta.results[7].origin.name}</p>
        <p>Location: ${respuesta.results[7].location.name}</p>
        <img class= "avatar" src="${respuesta.results[7].image}"></img>
        </div>


        <div>
        <h2>${respuesta.results[8].name} </h2>
        <p>Especie: ${respuesta.results[8].species}</p>
        <p>Status: ${respuesta.results[8].status}</p>
        <p>Origen: ${respuesta.results[8].origin.name}</p>
        <p>Location: ${respuesta.results[8].location.name}</p>
        <img class= "avatar" src="${respuesta.results[8].image}"></img>
        </div>


        <div>
        <h2>${respuesta.results[9].name} </h2>
        <p>Especie: ${respuesta.results[9].species}</p>
        <p>Status: ${respuesta.results[9].status}</p>
        <p>Origen: ${respuesta.results[9].origin.name}</p>
        <p>Location: ${respuesta.results[9].location.name}</p>
        <img class= "avatar" src="${respuesta.results[9].image}"></img>
        </div>


        <div>
        <h2>${respuesta.results[10].name} </h2>
        <p>Especie: ${respuesta.results[10].species}</p>
        <p>Status: ${respuesta.results[10].status}</p>
        <p>Origen: ${respuesta.results[10].origin.name}</p>
        <p>Location: ${respuesta.results[10].location.name}</p>
        <img class= "avatar" src="${respuesta.results[10].image}"></img>
        </div>
      `

    );

  });

});