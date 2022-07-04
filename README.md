# Proyecto Coderhouse React.js
## E-commerce: Nebula PC Store
### Venta de componentes para computadoras

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Nebula PC Store es una simulación de E-Commerce moderno dedicado a la venta de componentes para PC.
Toda la funcionalidad estara apuntada  al correcto funcionamiento como E-Commerce

- Proyecto hecho en React.
- Editado en VS Code.

## Features
- **Navbar** con funcionalidad y *Routing* aplicado.
- Lista General de Productos.
- Lista de Productos por Categoria.
- Detalle de Producto Seleccionado.
- Contador de Carrito (Cart Widget en Navbar).
- Carrito de compras con los items seleccionados.
- Checkout con la información de la orden de compra.

### Routing Aplicado:

- **Path: "/"** muestra la Homepage con la ***Lista general de productos***
- **Path: "/category/:id"** muestra la ***Lista de productos por Categoria***. *id* hace referencia al nombre de la categoria.
- **Path: "/item/:id"** muestra el ***Detalle del Producto Seleccionado***. *id* hace referencia al **numero de id** del producto.
- **Path: "/cart"** muestra el ***Carrito de Compras***. El carrito muestra los items seleccionados por el usuario para la compra junto con otros datos. Si el carrito se encuentra vacío se mostrara una opción para volver a comprar.
-Dentro del carrito tambien se encuentra el Componente ***"Checkout"***, pero debido a que este es un Modal, no posee un Path específico.
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF


## Desarrollo 
    Ademas de las librerias por defecto de React, se utilizaron las siguientes tecnologias:

    React-Router:
    Permite el establecimiento de un sistema de "routing" entre las diferentes paginas del sitio web, que hace que la navegación y transmision de datos entre componentes sea mucho mas facil y efectiva.

    Sass:
    Pre-processor de CSS que permite una escritura de CSS con mejor organización y estructura, y, por ende, una mayor legibilidad del codigo.

    Toastify:
    Libreria para notificaciones (toasts) personalizados. Es usada para hacer solamente una mejora estética al sitio.


![](ReactDemo.gif)
