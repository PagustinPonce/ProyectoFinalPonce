import { useState,useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ProductoDetail = () => {
    
    const [producto,setProducto] = useState([]);

    const {id} = useParams()

    const {idProducto} = useParams()

    useEffect(()=>{

    },[])

    console.log(idProducto)

    return (
    <div>
        <ItemDetail producto={producto} />
    </div>
    )
}

export default ProductoDetail