// PRODUCTOS
const productos = [
    // Abrigos
    {
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "./img/abrigos/01.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "./img/abrigos/02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "./img/abrigos/03.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "./img/abrigos/04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "./img/abrigos/05.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    // Camisetas
    {
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "./img/camisetas/01.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta 02",
        imagen: "./img/camisetas/02.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta 03",
        imagen: "./img/camisetas/03.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta 04",
        imagen: "./img/camisetas/04.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-05",
        titulo: "Camiseta 05",
        imagen: "./img/camisetas/05.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-06",
        titulo: "Camiseta 06",
        imagen: "./img/camisetas/06.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-07",
        titulo: "Camiseta 07",
        imagen: "./img/camisetas/07.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-08",
        titulo: "Camiseta 08",
        imagen: "./img/camisetas/08.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        imagen: "./img/pantalones/01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        imagen: "./img/pantalones/02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón 03",
        imagen: "./img/pantalones/03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-04",
        titulo: "Pantalón 04",
        imagen: "./img/pantalones/04.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón 05",
        imagen: "./img/pantalones/05.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const contenedorCarrito = document.querySelector("#contenedor-carrito");

function actualizarContenedorProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach((producto) => {
    
        const div = document.createElement("div");
        div.classList.add("producto");
    
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="">
            <div class="producto-detalles">
                <h3 class="producto-nombre">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="agregar-${producto.id}">Agregar</button>
            </div>
        `
        contenedorProductos.append(div);
    
    });

    actualizarBotonesAgregar();
}

actualizarContenedorProductos(productos);

const botones = document.querySelectorAll(".boton-categoria");
const titulo = document.querySelector("#titulo");
const contenedorTotal = document.querySelector("#total");
const carritoAcciones = document.querySelector("#carrito-acciones");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        botones.forEach(boton => boton.classList.remove("active"));
        boton.classList.add("active");

        if (boton.id === "boton-todos") {

            actualizarContenedorProductos(productos);
            titulo.innerText = "Todos los productos";

            contenedorProductos.classList.remove("disabled");
            contenedorCarrito.classList.add("disabled");

        } else if (boton.id === "boton-carrito") {

            titulo.innerText = "Carrito";
            contenedorProductos.classList.add("disabled");
            contenedorCarrito.classList.remove("disabled");

        } else {

            let productoSeleccionado = productos.find(producto => "boton-" + producto.categoria.id === boton.id);
            titulo.innerText = productoSeleccionado.categoria.nombre;

            const productosNuevos = productos.filter(producto => "boton-" + producto.categoria.id === boton.id);
            actualizarContenedorProductos(productosNuevos);

            contenedorProductos.classList.remove("disabled");
            contenedorCarrito.classList.add("disabled");

        }

    });

})

const productosEnCarrito = [];

function actualizarBotonesAgregar() {

    const botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })

};

function agregarAlCarrito(e) {

    const productoElegido = productos.find(producto => "agregar-" + producto.id === e.currentTarget.id);

    if (productosEnCarrito.find(producto => producto.id === productoElegido.id)) {
        const productoIndex = productosEnCarrito.findIndex(producto => producto.id === productoElegido.id);
        productosEnCarrito[productoIndex].cantidad++;
    } else {
        productoElegido.cantidad = 1;
        productosEnCarrito.push(productoElegido);
    }

    actualizarCarritoProductos();

}


const carritoProductos = document.querySelector("#carrito-productos");

function actualizarCarritoProductos() {
    carritoProductos.innerHTML = "";

    productosEnCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-producto-nombre">
                <small>Nombre</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>$${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-eliminar" id="eliminar-${producto.id}">
                <i class="bi bi-trash-fill"></i>
            </button>
        `;
        carritoProductos.append(div);
    });

    actualizarBotonesEliminar();
    actualizarTotal();
    actualizarCarritoNumero();
    carritoVacio();

}

function actualizarBotonesEliminar() {
    const botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    })
};

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => "eliminar-" + producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
    actualizarCarritoProductos();
}


function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    contenedorTotal.textContent = "$" + totalCalculado;
}

const botonVaciarCarrito = document.querySelector("#vaciar-carrito");
botonVaciarCarrito.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    productosEnCarrito.length = 0;
    actualizarCarritoProductos();
}


const carritoNumero = document.querySelector("#carrito-numero");
function actualizarCarritoNumero() {
    const numeroCalculado = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    carritoNumero.textContent = numeroCalculado;
}


function carritoVacio() {
    if (productosEnCarrito.length === 0) {
        carritoAcciones.classList.add("disabled");
        carritoProductos.innerHTML = "<p class='carrito-vacio'>Tu carrito está vacío. <i class='bi bi-emoji-frown'></i></p>";
    } else {
        carritoAcciones.classList.remove("disabled");
    }
}

carritoVacio();