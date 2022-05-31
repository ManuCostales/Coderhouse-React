

const details = [
    {
        id: "1",
        name: "Nvidia GTX 1080",
        price: 8000,
        category: "GPU",
        img: "https://asset.msi.com/resize/image/global/product/product_10_20160517143659_573abc0b7851a.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
        stock: 6,
        description: "The GeForce GTX 1080 is a high-end graphics card by NVIDIA, launched on May 27th, 2016. Built on the 16 nm process, and based on the GP104 graphics processor, in its GP104-400-A1 variant, the card supports DirectX 12. This ensures that all modern games will run on GeForce GTX 1080.",
        use: "New",
        selled: "125 selled",
        calification: "8.25",
        specific: "Memory: 8GB VRAM"
    },
    {
        id: "2",
        name: "Ryzen 5 3600",
        price: 8000,
        category: "GPU",
        img: "https://asset.msi.com/resize/image/global/product/product_10_20160517143659_573abc0b7851a.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
        stock: 6,
        description: "The GeForce GTX 1080 is a high-end graphics card by NVIDIA, launched on May 27th, 2016. Built on the 16 nm process, and based on the GP104 graphics processor, in its GP104-400-A1 variant, the card supports DirectX 12. This ensures that all modern games will run on GeForce GTX 1080.",
        use: "New",
        selled: "125 selled",
        calification: "8.25",
        specific: "Memory: 8GB VRAM"
    },
    {
        id: "3",
        name: "Motherboard MSI ATX",
        price: 8000,
        category: "GPU",
        img: "https://asset.msi.com/resize/image/global/product/product_10_20160517143659_573abc0b7851a.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
        stock: 6,
        description: "The GeForce GTX 1080 is a high-end graphics card by NVIDIA, launched on May 27th, 2016. Built on the 16 nm process, and based on the GP104 graphics processor, in its GP104-400-A1 variant, the card supports DirectX 12. This ensures that all modern games will run on GeForce GTX 1080.",
        use: "New",
        selled: "125 selled",
        calification: "8.25",
        specific: "Memory: 8GB VRAM"
    }
]


const getDetails = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(details.find(detail => detail.id === id))
        }, 2000)
    })
}

export default getDetails

