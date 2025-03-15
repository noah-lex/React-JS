// Lista de productos disponibles\const productos = [
    { id: 1, nombre: "Torta de Chocolate", precio: 1500 },
    { id: 2, nombre: "Cheesecake de Frutilla", precio: 1800 },
    { id: 3, nombre: "Alfajor de Maicena", precio: 500 },
    { id: 4, nombre: "Lemon Pie", precio: 1600 }
];

// Carrito de compras
const carrito = [];

// Función para mostrar productos disponibles
function mostrarProductos() {
    let lista = "Productos disponibles:\n";
    productos.forEach((producto) => {
        lista += `${producto.id}. ${producto.nombre} - $${producto.precio}\n`;
    });
    alert(lista);
}

// Función para agregar productos al carrito
function agregarAlCarrito() {
    mostrarProductos();
    let idProducto = parseInt(prompt("Ingresa el número del producto que deseas agregar:"));
    let producto = productos.find(p => p.id === idProducto);
    
    if (producto) {
        let itemCarrito = carrito.find(p => p.id === idProducto);
        if (itemCarrito) {
            itemCarrito.cantidad++;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }
        alert(`${producto.nombre} agregado al carrito.`);
    } else {
        alert("Producto no encontrado.");
    }
}

// Función para mostrar el carrito
function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        let lista = "Carrito de compras:\n";
        let total = 0;
        carrito.forEach((item, index) => {
            lista += `${index + 1}. ${item.nombre} - Cantidad: ${item.cantidad} - $${item.precio * item.cantidad}\n`;
            total += item.precio * item.cantidad;
        });
        lista += `\nTotal: $${total}`;
        alert(lista);
    }
}

// Función para eliminar productos del carrito
function eliminarDelCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }
    mostrarCarrito();
    let indice = parseInt(prompt("Ingresa el número del producto que deseas eliminar:")) - 1;
    
    if (indice >= 0 && indice < carrito.length) {
        let confirmacion = confirm(`¿Seguro que quieres eliminar "${carrito[indice].nombre}" del carrito?`);
        if (confirmacion) {
            carrito.splice(indice, 1);
            alert("Producto eliminado del carrito.");
        }
    } else {
        alert("Número de producto inválido.");
    }
}

// Menú de opciones
function menu() {
    let opcion;
    do {
        opcion = prompt("Selecciona una opción:\n1. Ver productos\n2. Agregar al carrito\n3. Ver carrito\n4. Eliminar del carrito\n5. Salir");
        switch (opcion) {
            case "1":
                mostrarProductos();
                break;
            case "2":
                agregarAlCarrito();
                break;
            case "3":
                mostrarCarrito();
                break;
            case "4":
                eliminarDelCarrito();
                break;
            case "5":
                alert("Gracias por visitar Dulce Alaska.");
                break;
            default:
                alert("Opción no válida.");
        }
    } while (opcion !== "5");
}

// Ejecutar el menú
menu();
