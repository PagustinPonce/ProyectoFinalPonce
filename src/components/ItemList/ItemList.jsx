import React from 'react'
import Item from '../Item/Item'
import '../ItemList/itemListPost.css'

const ItemList = ({productos}) => {

    return (
    <div className='itemlistcontainer'>
    {
        productos.map((producto)=>{
            return(
                <Item producto={producto} />
            )
        })
    }
    </div>
    )
}

export default ItemList
