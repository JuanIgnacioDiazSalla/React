import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function ContenedorDetalles({ product }) {
    return (
        <div className="item">
            <Card className="text-center">
                <img className='img-fluid itemImg' src={product.image} />
                <Card.Header>{product.title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>${product.price}</Card.Footer>
            </Card>
            <Button variant="primary">Comprar</Button>
        </div>
    );
}

export default ContenedorDetalles

//<Card.Img src={product.image} />