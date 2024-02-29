
import React,{useContext} from 'react'
import {CartContext} from '../CartContext/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

    const {cart,vaciarCarrito,eliminarItem,totalCarrito} = useContext(CartContext)

    return (
    <div>
        {cart.length ==0?
        <>
        <h1>El carrito esta vacio</h1>
        <Link to={"/"}>Ir al inicio</Link>
        </>
        :
        <>
        <h1>Lista de productos</h1>

        {cart.map((p)=>{
            <CartItem key={p.id} producto={p} 
            eliminarItem={eliminarItem}/>
        })}

        <p>Total:${totalCarrito()} </p>

        <button onClick={vaciarCarrito}>Vaciar Carrito</button>

        </>}
    </div>
    )
}

export default Cart