import React, {useContext} from 'react'
import ProductContext from './ProductContext'

export default function ProductListing(){
    const context = useContext(ProductContext)
    return(
        <React.Fragment>
            <ul>
                {context.products().map(p => {
                    return <li>{p.product_name} ${p.cost}</li>
                })}
            </ul>
        </React.Fragment>
    )
}