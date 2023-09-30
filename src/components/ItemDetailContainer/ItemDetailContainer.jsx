import Card from 'react-bootstrap/Card';
import { ItemCount } from "../ItemCount/ItemCount"

function ContenedorDetalles({ product }) {
    return (
        <div>
            <div className="item">
                <Card className="text-center">
                    <img className='itemImg' src={product.image} />
                    <Card.Header>{product.title}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>${product.price}</Card.Footer>
                </Card>
            </div>
            <ItemCount />
        </div>
    );
}

export default ContenedorDetalles

//<Card.Img src={product.image} />