import React, { useState } from 'react'
import AddProduct from './AddProductForm'
import ProductContext from './ProductContext'
import ProductListing from './ProductListing'

export default function App() {

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
      id: 1,
      product_name: 'Milkshake',
      cost: 15.00
    }
  ])

  const context = {
    // get all products
    products: () => {
      return products
    },
    addProduct: (productName, cost) => {
      const cloned = [
        ...products, {
          id: Math.floor(Math.random() * 100000 + 10000),
          product_name: productName,
          cost: cost
        }
      ]
      setProducts(cloned)
    }
  }

  return (
    <React.Fragment>
      <ProductContext.Provider value={context}>
        <h1>Catalog</h1>
        <ProductListing />
        <AddProduct />
      </ProductContext.Provider>
    </React.Fragment>
  )
}