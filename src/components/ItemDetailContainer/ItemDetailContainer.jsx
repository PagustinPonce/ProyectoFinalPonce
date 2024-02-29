import React from 'react'
import { useState,useEffect,} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    
    const [producto,setProducto] = useState([]);

    const {id} = useParams()

    useEffect(()=>{
        
        const fetchData = async()=>{
            try{
                const response = await fetch("/productos.json")
                const data = await response.json()
                const producto = data.find((p)=>p.id == id)
                setProducto(producto)
            }catch(error) {
                console.log("error en el fetch")
            }
        }

        fetchData()
    },[id])

    return (
    <div>
        <ItemDetail producto={producto} />
    </div>
    )
}

export default ItemDetailContainer