

const products = [
    {
        id: "1",
        name: "Nvidia GTX 1080",
        price: 8000,
        category: "GPU",
        img: "https://asset.msi.com/resize/image/global/product/product_10_20160517143659_573abc0b7851a.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
        stock: 6,
    },
    {
        id: "2",
        name: "Ryzen 5 3600",
        price: 3000,
        category: "CPU",
        img: "https://www.amd.com/system/files/2019-06/238593-ryzen-5-pib-left-facing-1260x709.png",
        stock: 9,
    },
    {
        id: "3",
        name: "Motherboard MSI",
        price: 2000,
        category: "Motherboard",
        img: "https://storage-asset.msi.com/event/2020/mb/amd-550-motherboard/images/msi-mpg_b550_gaming_carbon_wifi-3d3_rgb.png",
        stock: 4,
    }
]

const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 1000)
    })
}

export default getProducts

