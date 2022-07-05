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
- Base de datos con los productos y ordenes almacenados.

### Routing Aplicado:

- **Path: "/"** muestra la Homepage con la ***Lista general de productos***
- **Path: "/category/:id"** muestra la ***Lista de productos por Categoria***. *id* hace referencia al nombre de la categoria.
- **Path: "/item/:id"** muestra el ***Detalle del Producto Seleccionado***. *id* hace referencia al **numero de id** del producto.
- **Path: "/cart"** muestra el ***Carrito de Compras***. El carrito muestra los items seleccionados por el usuario para la compra junto con otros datos. Si el carrito se encuentra vacío se mostrara una opción para volver a comprar.
-Dentro del carrito tambien se encuentra el Componente ***"Checkout"***, pero debido a que este es un Modal, no posee un Path específico.

## Especificaciones:

    -Estructura product/item:
        -calification: number
        -category: string
        -description: string
        -img: string (URL)
        -name: string
        -price: number
        -selled: string
        -specific: string
        -stock: number
        -use: string

    -Estructura orders:
        -id: string,
        -buyerData: 
            name: string,
            email: string,
            phone: number,
            address: string,
        -products: array con los productos comprados,
        -total: number


## Desarrollo 

    Firebase-Firestore: Database utilizada para almacenar los datos.

    Ademas de las librerias por defecto de React, se utilizaron las siguientes tecnologias:

    React-Router:
    Permite el establecimiento de un sistema de "routing" entre las diferentes paginas del sitio web, que hace que la navegación y transmision de datos entre componentes sea mucho mas facil y efectiva.

    Sass:
    Pre-processor de CSS que permite una escritura de CSS con mejor organización y estructura, y, por ende, una mayor legibilidad del codigo.

    Toastify:
    Libreria para notificaciones (toasts) personalizados. Es usada para hacer solamente una mejora estética al sitio.

    React-Spinners:
    Libreria para agregar funcionalidades de Spinner a la app.


## Running Locally

```bash
$ git clone https://github.com/ManuCostales/Coderhouse-React
$ cd Coderhouse-React
$ npm install
$ npm start
```

## Environment Variables

Variables de entorno de configuracion para el uso de Firebase - Firestore

Crear archivo '.env' y configurar variables de entorno como en el siguiente ejemplo:

See [`.env.example`](https://github.com/ManuCostales/Coderhouse-React) for an example.


## Built Using

- [Create-React-App](https://create-react-app.dev/)
- [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start)
- [sass](https://sass-lang.com/)
- [toastify](https://apvarun.github.io/toastify-js/)
- [firebase](https://firebase.google.com/)
- [react-spinners](https://www.npmjs.com/package/react-spinners)

## Test App 
-npm run start
[Deploy]()

![](ReactDemo.gif)
