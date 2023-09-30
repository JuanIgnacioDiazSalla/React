import { Button, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Contenedor = ({ products }) => {

    const navigate = useNavigate()

    console.log(products)

    return (
        <div className="contenedor">
            {products.map((product) => {
                return (
                    <Card style={{ width: '15rem' }}>
                        <Card.Img src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Button variant="primary" onClick={() => navigate(`/item/${product.id}`)}>Ir a detalles</Button>
                        </Card.Body>
                    </Card>)
            })
            }
        </div>
    )
}

export default Contenedor