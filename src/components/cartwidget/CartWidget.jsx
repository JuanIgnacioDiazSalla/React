import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from 'react-bootstrap';

const MiCarrito = () => {

    const { cartItems, setCartItems } = useContext(CartContext)

    const deleteCart = () => {
        setCartItems(0)
    }

    return (
        <div className="carrito">
            <div className="carritoEspecifico">
                <img src="../src/img/Carrito/carrito.png" alt="image" className='logoCarrito' />
                <strong>{cartItems}</strong>
            </div>
            <div >
                <Button variant="secondary" onClick={deleteCart}>Vaciar Carrito</Button>
            </div>
        </div>)
}

export default MiCarrito;