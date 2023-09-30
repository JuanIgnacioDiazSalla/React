import { useContext, useState } from "react"
import { Button } from 'react-bootstrap';
import { CartContext } from "../../context/CartContext"

export const ItemCount = () => {

    const [count, setCount] = useState(0);

    const { cartItems, setCartItems } = useContext(CartContext)

    const addProduct = () => {
        setCount(count + 1);
    }

    const removeProduct = () => {
        if (count >= 1) {
            setCount(count - 1);
        }
    }

    const addToCart = () => {
        setCartItems(cartItems + count)
    }

    return (
        <div>
            <div className="itemButton">
                <button onClick={removeProduct}>-</button>
                <label>{count}</label>
                <button onClick={addProduct}>+</button>
            </div>
            <div className='itemButton'>
                <Button variant="primary" onClick={addToCart}>Comprar</Button>
            </div>
        </div>
    )
}

