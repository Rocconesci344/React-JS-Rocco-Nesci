
import { ProductsDATA } from "./Products";

export const pedirDatos = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ProductsDATA)
        }, 2000)
    })
}