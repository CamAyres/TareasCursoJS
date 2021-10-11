


const librero = [ 

    
  { id:1, nombre: "El hombre ilustrado", autor:"Ray Bradbury", precio: 850},
  { id:2, nombre: "Tokio Blues", autor: "Herman Hesse",  precio: 900},
  { id:3, nombre: "Damian",autor:"Haruki Murakami", precio: 800}, 

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