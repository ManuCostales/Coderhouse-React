import { database } from ".";
import { getDocs, collection, query, where } from "firebase/firestore"

export const getProducts = (id) => {
    return new Promise((resolve, reject) => {
        const collRef = id ?
        query(collection(database, "products"), where("category", "==", id))
        : (collection(database, "products"))

        getDocs(collRef).then(response => {
            console.log(response.docs)
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() } 
            })
            resolve(products)
        }).catch(error => reject(error))
    })
}