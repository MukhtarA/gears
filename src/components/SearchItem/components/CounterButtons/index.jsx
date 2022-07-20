import {Button, ButtonPrimary, Count} from "./style";
import {useState} from "react";

const CounterButton = ({handleAddToCart, inStock, data}) => {
    const [count, setCount] = useState(0)

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20}}>
            {inStock > 0 ?
                <>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Button onClick={() => setCount((prev) => prev > 0 ? prev - 1 : prev)}>-</Button>
                        <Count>{count}</Count>
                        <Button onClick={() => setCount((prev) => prev === inStock ? prev : prev + 1)}>+</Button>

                    </div>
                    <ButtonPrimary onClick={handleAddToCart(data, count)}>Купить</ButtonPrimary>
                </>
                : <Count>Нет в наличии</Count>
            }
        </div>
    )
}

export default CounterButton
