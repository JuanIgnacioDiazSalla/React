import { useEffect, useState } from 'react';
import axios from 'axios';

import Contenedor from '../components/ItemListContainer/ItemListContainer';
import { useParams } from 'react-router-dom';


function Category() {

    const [products, setProducts] = useState([])

    const { categoryid } = useParams()

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                const filtro = res.data.filter(item => item.category == categoryid)
                setProducts(filtro)
            })
            .catch((err) => { console.log(err) })
    }, [categoryid])


    return (
        <div>
            <Contenedor products={products} />
        </div>
    )
}

export default Category