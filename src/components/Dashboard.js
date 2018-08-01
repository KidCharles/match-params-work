import React, { Component } from 'react';
import * as products from '../services/products';
import { Link } from 'react-router-dom';


 class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            products:[]
        }
    }

    componentDidMount(){
        products.index()
        .then(products => this.setState({products}))
    }

    render() {
        console.log(this.state)
        const post = this.state.products.map((el,i)=> {
            return(
            <div key={i}>
                 <Link to={`/product/${el.id}`}>
                    <div>{el.title}</div>
                </Link>
                <hr/>
            </div>
            )
        })
        return (
            <div>
                <p>Dashboard</p>
                {/* <audio controls>
                    {/* <source src="viper.mp3" type="audio/mp3">
                    <source src="viper.ogg" type="audio/ogg">
                    <p>Your browser doesn't support HTML5 audio. Here is a <a href="viper.mp3">link to the audio</a> instead.</p> */}
                {/* </audio> */} */}
                {post}
            </div>
        )
    }
}

export default (Dashboard);