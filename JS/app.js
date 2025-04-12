const tortaSelvaNegra = {
    nombre: 'Torta Selva Negra',
    precio: '42000',
}

const Rogel = {
    nombre: 'Torta Rogel',
    precio: '36000',
}

class PerfilUsuario {
    constructor (nombre = ' ', mail = ' ', telefono = 0, contraseña = ' ', confirmarcontraseña = ' '){
        this.nombre = nombre;
        this.mail = mail;
        this.telefono = telefono;
        this.contraseña = contraseña;
        this.confirmarcontraseña = confirmarcontraseña;
    }
}

const registroForm = document.getElementById("registroForm");

registroForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const mail = document.getElementById("mail").value;
  const telefono = document.getElementById("telefono").value;
  const contraseña = document.getElementById("contraseña").value;
  const confirmar = document.getElementById("confirmarContraseña").value;

  if (contraseña !== confirmar) {
    alert("Las contraseñas no coinciden");
    return;
  }

  const nuevoUsuario = new PerfilUsuario(nombre, mail, telefono, contraseña, confirmar);
  console.log("Usuario creado:", nuevoUsuario);

const user = new PerfilUsuario ('Mar', 'max18@gmail.com', 1124293536, 'contraseña123', 'contraseña123');
const user2 = new PerfilUsuario ('Lea', 'leamr2@gmail.com', 1135369596, 'contra20', 'contra20');
const user3 = new PerfilUsuario ('Alex', 'alexrizo84@gmail.com', 1128589090, 'frodo0208', 'frodo0208');

localStorage.setItem("usuario", JSON.stringify(nuevoUsuario));
})

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const btnAgregar = document.getElementById("agregarTorta");
const btnAgregarRogel = document.getElementById("agregarRogel");
const divCarrito = document.getElementById("carrito");

btnAgregar.addEventListener("click", () => {
  carrito.push(tortaSelvaNegra);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});

btnAgregarRogel.addEventListener("click", () => {
    carrito.push(Rogel);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  });

function mostrarCarrito() {
    divCarrito.innerHTML = "<h2>Carrito</h2>";
    carrito.forEach((producto, index) => {
      divCarrito.innerHTML += `<p>${producto.nombre} - $${producto.precio} 
      <button onclick="eliminarProducto(${index})">Eliminar</button></p>`;
    });
  }

  function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  }

  mostrarCarrito();