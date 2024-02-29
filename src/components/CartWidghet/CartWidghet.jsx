import React,{useContext} from 'react'
import { CartContext } from '../CartContext/CartContext'

const CartWidghet = () => {

    const {cantidadCarrito} = useContext(CartContext)
    return (
    <div>
        <p>cart</p>

        <p>{cantidadCarrito() == 0 ? null : cantidadCarrito()} </p>
    </div>
    )
}

export default CartWidghet