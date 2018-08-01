
import React, { Component } from 'react';
import * as products from '../services/products';


class Post extends Component {
    constructor(props){
        super(props)
        this.state={
            product:{}
        }
    }
    
    componentDidMount(){
        products.get(this.props.match.params.id)
        .then(product => this.setState({product}))
    }

    render() {
        console.log(this.state)
        const {product} = this.state;
        return(
            <div>
                <img src={product.image} />
                <h1>{product.title}</h1>
                <h1>{product.price}</h1>
            </div> 
        )
    }
}
export default (Post);