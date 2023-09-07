import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ContenedorDetalles from "../components/ItemDetailContainer/ItemDetailContainer"

//setProduct(res)

const Item = () => {

    const [product, setProduct] = useState([])

    const { itemid } = useParams()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${itemid}`)
            .then(res => setProduct(res.data))
            .catch((err) => {
                console.log("error")
                console.log(err)
            })
    }, [itemid])

    return (
        <div className="contenedorDetalles">
            <ContenedorDetalles product={product} />
        </div>
    )
}

export default Item