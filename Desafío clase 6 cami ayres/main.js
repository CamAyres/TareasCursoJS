


class Libro{
    
    constructor(titulo, autor, genero, precio, paginas, stock){

        this.titulo = titulo;
        this.autor = autor; 
        this.genero = genero; 
        this.precio = precio; 
        this.paginas = paginas; 
        this.stock = stock; 
        

    }

    

    verStock(){

        console.log( "la cantidad de stock disponible de "+ (this.titulo) + " es de: " +  (this.stock) + " unidades");
    
    }

    
    infoLibro(){
        console.log("Este libro es del género: " + (this.genero) + " del autor: " + (this.autor) + " con un total de " + (this.paginas) + " páginas");


    }

    
}


// ARRAYS 
libritos = []; 

libritos.push (new Libro ( "Batman: Silencio", "jeph Loeb", "comic", 1200, 350, 3));
libritos.push (new Libro( "El hombre ilustrado", "Ray Bradbury", "ciencia ficcion", 850, 283, 5));  
libritos.push (new Libro ("Damian", "Herman Hesse", "novela", 800, 250, 4 ));  
libritos.push (new Libro ( " Tokio blues", "Haruki Murakami", "novela", 900, 260, 0)); 

console.log( libritos.infoLibro);

console.log (libritos.length)

for (const libro of libritos){
console.log(libro.titulo);
console.log ("precio: " + "$" + libro.precio);
console.log ("stock: " +  libro.stock + " unidades");

};


//ordenando por precio de menor a mayor ( sirve tambien cambiando el .precio para el stock)

libritos.sort((a, b) =>{
    
    if (a.precio < b.precio){
        return -1;
    }
    
    if (a.precio > b.precio){
        return 1; 

    }
    return 0;

});

console.log(libritos); 

let saludo = alert ( "Bienvenido a librería Clementine! "); 

let producto1 = prompt( "ingrese el nombre del libro que quiere comprar"); 

let montoA = parseInt(prompt ( "ingrese el monto del libro")); 



const suma = (a, b) => a + b;
const iva = (x) => x * 0.21; 



let montoTotal = 

 suma( montoA, iva(montoA)); 
  





    let totalConIva = alert ( "el monto de su compra con el iva incluido es de: " + montoTotal);

    console.log ("libro elegido: " + producto1);      
    console.log ("total + IVA: "+ montoTotal);

let despedida = alert ("Muchas gracias por comprar con nosotros"); 




