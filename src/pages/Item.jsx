import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { doc, getDoc, getFirestore } from 'firebase/firestore'

import ContenedorDetalles from "../components/ItemDetailContainer/ItemDetailContainer"


const Item = () => {

    const [product, setProduct] = useState([])

    const { itemid } = useParams()

    useEffect(() => {

        const db = getFirestore();

        const productItem = doc(db, "products", itemid)

        getDoc(productItem).then((snapshot) => {
            setProduct({ id: snapshot.id, ...snapshot.data() })
        })

    }, [itemid])

    return (
        <div className="contenedorDetalles">
            <ContenedorDetalles product={product} />
        </div>
    )
}

export default Item