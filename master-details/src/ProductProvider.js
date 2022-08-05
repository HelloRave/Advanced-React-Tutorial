import React, { useState } from 'react'
import ProductContext from './ProductContext'

export default function ProductProvider(props) {
    const [products, setProducts] = useState([
        {
            id: 1,
            product_name: 'Cookies',
            cost: 9.99
        },
        {
            id: 2,
            product_name: 'Cakes',
            cost: 10.10
        },
        {
            id: 3,
            product_name: 'Milkshake',
            cost: 15.00
        }
    ])

    const context = {
        productId: (productId) => {
            return products.find(p => {return p.id === productId})
        },
        products: () => {
            return products
        },
        addProduct: (newProduct) => {
            const cloned = [
                ...products, newProduct
            ]
            setProducts(cloned)
        }
    }

    // Higher order components - other components nested inside
    return <ProductContext.Provider value={context}>
        {props.children}
    </ProductContext.Provider>
}