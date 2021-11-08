
const figuras = [ 

    
    { id:1, 
      nombre: "Baby Yoda doble espada 15cm", 
      imagen: '../multimedia/ewok6.jpeg',
      precio: 1100},
    { id:2, 
      nombre: "Skeletor 25cm", 
      imagen:'../multimedia/ewok4.jpeg', 
      precio: 2000},
    { id:3, 
      nombre: "Dark Vader 25cm",
     imagen: '../multimedia/ewok37.jpeg', 
      precio: 2000}, 

    { id:4, 
      nombre: "Mini macetas ´Robert Plant´",
      imagen:'../multimedia/ewok1.jpeg',
      precio: 700},
    
    { id:5,
      nombre: "Dr Strange Porta Espirales 25cm",
      imagen: '../multimedia/ewok3.jpeg',
      precio: 2500},

    { id:6  ,
      nombre: "Mant at Arms Jumbo 30cm",
      imagen: '../multimedia/ewok7.jpeg',
      precio: 3000},  

    { id:7,
      nombre: "Han Solo Carbonita Lego",
      imagen: '../multimedia/ewok18.jpeg',
      precio: 650},  

    { id:8,
    nombre: "Yellow Submarine - John Lennon 12cm",
    imagen: '../multimedia/ewok21.jpeg',
    precio: 1200},  

    { id:9,
      nombre: "Yellow Submarine - Ringo Starr 12cm",
      imagen: '../multimedia/ewok22.jpeg',
      precio: 1200}, 
    
    { id:10,
      nombre: "Yellow Submarine - George Harrison 12cm",
      imagen: '../multimedia/ewok23.jpeg',
      precio: 1200}, 

    { id:11,
      nombre: "Yellow Submarine - Paul McCartney 12cm",
      imagen: '../multimedia/ewok24.jpeg',
      precio: 1200}, 

    { id:12,
      nombre: "Lampara Minas Tirith Lord of the Rings 50cm",
      imagen: '../multimedia/ewok25.jpeg',
      precio: 3200}, 

    { id:13,
      nombre: "Soporte para joystick ´the mandalorian´",
      imagen: '../multimedia/ewok27.jpeg',
      precio: 950}, 

    { id:14,
      nombre: "Figura ´Robert musical´",
      imagen: '../multimedia/ewok14.jpeg',
      precio: 600}, 

    { id:15,
      nombre: "Llaveros varios modelos",
      imagen: '../multimedia/ewok33.jpeg',
      precio: 500}, 

    { id:16,
      nombre: "Figura ´Robert Lector´",
      imagen: '../multimedia/ewok34.jpeg',
      precio: 600}, 

    { id:17,
      nombre: "Baby Yoda 18cm",
      imagen: '../multimedia/ewok36.jpeg',
      precio: 1250}, 

    { id:18,
      nombre: "Soporte para celulares Mujer Maravilla 22cm",
      imagen: '../multimedia/ewok 9.jpeg',
      precio: 1550}, 

    { id:19,
    nombre: "He Man Jumbo 30cm",
    imagen: '../multimedia/ewok38.jpeg',
    precio: 3000}, 

    { id:20,
      nombre: "Kit Card Star Wars y otros modelos",
      imagen: '../multimedia/ewok32.jpeg',
      precio: 690}, 

    { id:21,
      nombre: "Varitas mágicas Harry Potter con soporte (varios modelos)",
      imagen: '../multimedia/ewok15.jpeg',
      precio: 3500}, 

    
  
  ]

   // para guardar mi lista de productos en el localstorage
  const guardarlLocal = (clave, valor) => { localStorage.setItem (clave, valor)};

  guardarlLocal ("listaProductos", JSON.stringify(figuras));



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
    figuras.forEach((info) => {
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

        //imagen
        const nodoImagen = document.createElement('img');
        nodoImagen.classList.add('img-fluid');
        nodoImagen.setAttribute('src', info.imagen); 


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
        nodoCardBody.appendChild(nodoImagen);
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
      
        const miItem = figuras.filter((itemProductos) => {
            
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
        const miItem = figuras.filter((itemProductos) => {
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

//animaciones 



//animación del titulo principal h1, al no aparecer el slide toggle hace la funcion de slide down
$("h3").hide()
        .slideToggle(1000);