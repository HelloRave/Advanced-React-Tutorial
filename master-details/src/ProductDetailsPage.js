import {Fragment, useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import ProductContext from './ProductContext'

export default function ProductDetailsPage(props){
    // path in mind: /products/:productId
    const {productId} = useParams()
    const [product, setProduct] = useState({})
    const context = useContext(ProductContext)

    useEffect(() => {
        const product = context.productId(Number(productId))
        setProduct(product)
    }, [productId])

    return (
        <Fragment>
            <h1>{product.product_name}</h1>
            <ul>
                <li>ID: {product.id}</li>
                <li>Cost: {product.cost}</li>
            </ul>
        </Fragment>
    )
}