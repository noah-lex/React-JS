const tortaSelvaNegra = {
    nombre: 'Torta Selva Negra',
    precio: '42000',
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

const user = new PerfilUsuario ('Mar', 'max18@gmail.com', 1124293536, 'contraseña123', 'contraseña123');
const user2 = new PerfilUsuario ('Lea', 'leamr2@gmail.com', 1135369596, 'contra20', 'contra20');
const user3 = new PerfilUsuario ('Alex', 'alexrizo84@gmail.com', 1128589090, 'frodo0208', 'frodo0208');

console.log (user, user2, user3);
