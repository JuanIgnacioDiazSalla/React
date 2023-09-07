import { Button, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Contenedor = ({ products }) => {

    const navigate = useNavigate()

    return (
        <div className="contenedor">
            {products.map((product) => {
                return (
                    <Card style={{ width: '15rem' }}>
                        <Card.Img src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Button variant="primary" onClick={() => navigate(`/item/${product.id}`)}>Ir a detalles</Button>
                        </Card.Body>
                    </Card>)
            })
            }
        </div>
    )
}

export default Contenedor