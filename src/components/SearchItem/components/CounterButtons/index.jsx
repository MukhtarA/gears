import {Button, ButtonPrimary, Count} from "./style";
import {useState} from "react";

const CounterButton = ({handleAddToCart, inStock, data, isCart, countValue}) => {
    const [count, setCount] = useState(isCart ? countValue : 0 )

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
            {inStock > 0 ?
                <>
                    {isCart ?
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <Button onClick={handleAddToCart(data, countValue === 0 ? 0 : countValue - 1)}>-</Button>
                            <Count>{countValue}</Count>
                            <Button onClick={handleAddToCart(data, countValue === inStock ? inStock : countValue + 1)}>+</Button>
                        </div>
                        :
                        <>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <Button onClick={() => setCount((prev) => prev > 0 ? prev - 1 : prev)}>-</Button>
                                <Count>{count}</Count>
                                <Button onClick={() => setCount((prev) => prev === inStock ? prev : prev + 1)}>+</Button>

                            </div>
                            <ButtonPrimary onClick={handleAddToCart(data, count)}>Купить</ButtonPrimary>
                        </>
                    }
                </>
                : null
            }
        </div>
    )
}

export default CounterButton
