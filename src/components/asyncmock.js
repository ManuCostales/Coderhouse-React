

const products = [
    {
        id: "1",
        name: "Nvidia GTX 1080",
        price: 8000,
        category: "GPU",
        img: "./Item/images/1080TI.jpg",
        stock: 6,
    },
    {
        id: "2",
        name: "Ryzen 5 3600",
        price: 3000,
        category: "CPU",
        img: "./public/images/Ryzen 5 3600.jpg",
        stock: 9,
    },
    {
        id: "3",
        name: "Motherboard MSI",
        price: 2000,
        category: "Motherboard",
        img: "./public/images/Motherboard.jpg",
        stock: 4,
    }
]

const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 2000)
    })
}

export default getProducts

