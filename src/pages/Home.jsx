import { useEffect, useState } from 'react';
import axios from 'axios';

import Contenedor from '../components/ItemListContainer/ItemListContainer';


function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => { setProducts(res.data) })
            .catch((err) => { console.log(err) })
    }, [])


    return (
        <div>
            <Contenedor products={products} />
        </div>
    )
}

export default Home