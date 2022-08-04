import React from 'react'
import ProductContext from './ProductContext'

export default class AddProduct extends React.Component {
    state = {
        name: '',
        cost: ''
    }

    static contextType = ProductContext

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addProduct = () => {
        this.context.addProduct(this.state.name, this.state.cost)
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <label>Product Name</label>
                    <input type='text'
                           name='name'
                           value={this.state.name}
                           onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Cost</label>
                    <input type='text'
                           name='cost'
                           value={this.state.cost}
                           onChange={this.updateFormField} />
                </div>
                <button onClick={this.addProduct}>Add</button>
            </React.Fragment>
        )
    }
}