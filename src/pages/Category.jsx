import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore'

import Contenedor from '../components/ItemListContainer/ItemListContainer';
import { useParams } from 'react-router-dom';

import { useCollection } from '../hooks/useCollection';

function Category() {

    const [products, setProducts] = useState([])

    const { data } = useCollection("products")

    const { categoryid } = useParams()

    useEffect(() => {

        const products = data.filter((product) => {
            return product.category == categoryid;
        })

        setProducts(products)
    }, [data, categoryid])


    return (
        <div>
            <Contenedor products={products} />
        </div>
    )
}

export default Category