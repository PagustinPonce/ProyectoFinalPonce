
import React,{useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import '../ItemList/itemList.css'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const[productos,setProductos] = useState([]);

    const {categoryId} = useParams

    useEffect(()=>{
        
        const fetchData = async()=>{
            try{
                const response = await fetch("/productos.json")
                const data = await response.json()
                if(categoryId){
                    const filteredProductos = data.filter((p)=>p.categoria == categoryId)
                    setProductos(filteredProductos)
                }else{
                    setProductos(data)
                }
            }catch(error) {
                console.log("error en el fetch")
            }
        }

        fetchData()
    },[categoryId])

    
    return (
    <div className="itemcontainer">

        {productos.length ==0?
        <h1>Cargando...</h1> 
        : 

        <ItemList productos={productos} />
        }


    </div>
    )
}

export default ItemListContainer