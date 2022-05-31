

const details = [
    {
        id: "1",
        name: "Nvidia GTX 1080",
        price: 120000,
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
        price: 50000,
        category: "CPU",
        img: "https://www.amd.com/system/files/2019-06/238593-ryzen-5-pib-left-facing-1260x709.png",
        stock: 6,
        description: "Ryzen 5 3600 is a 64-bit hexa-core high-end performance x86 desktop microprocessor introduced by AMD in mid-2019. Fabricated on TSMC's 7 nm process based on the Zen 2 microarchitecture, this processor operates at 3.6 GHz with a TDP of 65 W and a Boost frequency of up to 4.2 GHz.",
        use: "New",
        selled: "125 selled",
        calification: "8.25",
        specific: "Memory: 8GB VRAM"
    },
    {
        id: "3",
        name: "Motherboard MSI PRO Z690-A",
        price: 20000,
        category: "Motherboard",
        img: "https://storage-asset.msi.com/event/2020/mb/amd-550-motherboard/images/msi-mpg_b550_gaming_carbon_wifi-3d3_rgb.png",
        stock: 6,
        description: "Advanced technology to delivery pure data signals for the best performance, stability and compatibility",
        use: "New",
        selled: "125 selled",
        calification: "8.25",
        specific: "Memory: 8GB VRAM"
    },
    {
        id: "4",
        name: "Intel I7 8770",
        price: 50000,
        category: "CPU",
        img: "https://wiztech.com.ar/assets/images/products/procesador/intel_core_i7_10700kf_a.png",
        stock: 6,
        description: "The Intel Corei7 is available in two- to six-core varieties, and can support up to 12 different threads simultaneously. Its processor clock speed ranges from 1.70 GHz to up to 3.90 GHz, with cache memory from 4 to 12 MB. Intel Corei7 thermal design power (TDP) range goes from 130 watts TDP to as low as 15 watts TDP.",
        use: "New",
        selled: "125 selled",
        calification: "8.25",
        specific: "Memory: 8GB VRAM"
    },
    {
        id: "5",
        name: "RX 570 8GB",
        price: 100000,
        category: "GPU",
        img: "https://asset.msi.com/resize/image/global/product/product_0_20190502104732_5cca5a4447649.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
        stock: 6,
        description: "The Radeon RX 570 is a mid-range graphics card by AMD, launched on April 18th, 2017. Built on the 14 nm process, and based on the Polaris 20 graphics processor, in its Polaris 20 XL variant, the card supports DirectX 12. This ensures that all modern games will run on Radeon RX 570. The Polaris 20 graphics processor is an average sized chip with a die area of 232 mm² and 5,700 million transistors. Unlike the fully unlocked Radeon RX 580X, which uses the same GPU but has all 2304 shaders enabled, AMD has disabled some shading units on the Radeon RX 570 to reach the product's target shader count. It features 2048 shading units, 128 texture mapping units, and 32 ROPs. AMD has paired 4 GB GDDR5 memory with the Radeon RX 570, which are connected using a 256-bit memory interface. The GPU is operating at a frequency of 1168 MHz, which can be boosted up to 1244 MHz, memory is running at 1750 MHz (7 Gbps effective).",
        use: "New",
        selled: "125 selled",
        calification: "8.25",
        specific: "Memory: 8GB VRAM"
    },
    {
        id: "6",
        name: "Motherboard Asus ROG Strix Gaming",
        price: 30000,
        category: "Motherboard",
        img: "https://dlcdnimgs.asus.com/websites/global/products/sqlhk1j3w9jgpcci/img/z490/kv/hero.png",
        stock: 6,
        description: "Tarjeta madre para juegos AMD AM4 B450 ATX con soporte hasta DDR4 3200MHz, SATA 6Gbps, HDMI 2.0, dual NVMe M.2, USB 3.1 Gen 2, e iluminación Aura Sync RGB LED",
        use: "New",
        selled: "125 selled",
        calification: "8.25",
        specific: "Memory: 8GB VRAM"
    }
    
]

const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(details)
        }, 1000)
    })
}

const getDetails = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(details.find(detail => detail.id === id))
        }, 1000)
    })
}

const getProductsByCategory = (category) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(details.filter(detail => detail.category === category))
        }, 1000)
    })
}

export { getProducts, getDetails, getProductsByCategory }

