


class Articulos {
    constructor ( nombre, precio, detalle, cantidad){
        this.nombre = nombre; 
        this.precio = parseFloat(precio); 
        this.cantidad = cantidad;
        this.enStock = true;  

    }

    sumarIva(){

        return this.precio * 1.21; 
    }

    Vender(){
        return this.enStock = false; 

    }


}

let saludo = alert( "Bienvenido a Ewok 3D!")

arrayArticulos = []; 


let listaArticulos = prompt( " ingrese el el articulo que quiere comprar: ")