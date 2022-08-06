import {MainWrapper} from "../search-result-page/style";
import {useDispatch, useSelector} from "react-redux";
import {
    addItemToCart,
    addToCart,
    confirmToOrder,
    getCart,
    selectorCart,
    selectorInitialCartData,
    selectorInitialCartStatus
} from "./slice";
import {useCallback, useEffect, useMemo} from "react";
import {computedCardItemsAmount, computedCardPrice} from "../../helpers/computed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CounterButton from "../../components/SearchItem/components/CounterButtons";
import styled from "@emotion/styled";
import {FontAwesomeIconStyled} from "../../components/NavigationBar/style";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {Button} from "../login-page/style";
import {LinkStyled} from "../../components/Footer/style";
import {useNavigate} from "react-router-dom";

const CartPage = () =>  {
    const dispatch = useDispatch()
    const cart = useSelector(selectorCart)
    const cartPrice = useMemo(() => computedCardPrice(cart), [cart])
    const cartItemsAmount = useMemo(() => computedCardItemsAmount(cart), [cart])
    const navigate = useNavigate()
    const initialCartData = useSelector(selectorInitialCartData)
    const initialCartStatus = useSelector(selectorInitialCartStatus)

    const handleAddToCart = useCallback((data, count) => () => {
        dispatch(addItemToCart({
            "part_number": data?.partNumber,
            "brand": data?.brand,
            "booking": "test",
            "delivery": "test",
            "destination": "ALA",
            "transport": "fly",
            "quantity": count,
            "price": data?.price,
            "currency": "USD",
            "reference": "test"
        }))
        dispatch(addToCart({data, count}))
    }, [dispatch])

    const handleRemoveFromCart = useCallback( (data, count) => (e) => {
        e.preventDefault()
        dispatch(addItemToCart({
            "part_number": data?.partNumber,
            "brand": data?.brand,
            "booking": "test",
            "delivery": "test",
            "destination": "ALA",
            "transport": "fly",
            "quantity": count,
            "price": data?.price,
            "currency": "USD",
            "reference": "test"
        }))
        dispatch(addToCart({data, count}))
    }, [dispatch])

    console.log(cart.map((item) => item.id))

    const handleConfirmToOrder = useCallback(() => {
        dispatch(confirmToOrder(
            initialCartData.map((item) => ({
                "item_id": item.id,
                "lines": 2,
                "amount": item.quantity,
                "currency": item.currency
            }))
        ))
        navigate('/cart/success')
    }, [])
    const ItemStyled = styled.div`
      flex: 0 0 160px;
    `

    useEffect(() => {
        dispatch(getCart())
    }, [dispatch])

    return (
        <MainWrapper>
            {cart.length ?
                <>
                    <h3>
                        В корзине {cartItemsAmount} товара на сумму {new Intl.NumberFormat().format(cartPrice)} тг
                    </h3>
                    {
                        cart?.map((item) =>
                            <div style={{ display: 'flex', width: '100%', gap: 30, alignItems: 'center' }}>
                                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#ececec', padding: 20, borderRadius: 10}}>
                                    <ItemStyled>
                                        <p>{item.data.brand}</p>
                                        <p>{item.data.description}</p>
                                    </ItemStyled>
                                    <ItemStyled><p>
                                        Доставка за {item.data.days} дней
                                    </p></ItemStyled>
                                    <ItemStyled>{item.data.price} тг.</ItemStyled>
                                    <ItemStyled><CounterButton handleAddToCart={handleAddToCart} isCart data={item.data} inStock={item.data.available} countValue={item.count} /></ItemStyled>
                                </div>
                                    <FontAwesomeIconStyled style={{ fontSize: 24 }} icon={faClose} color="darkgray" onClick={handleRemoveFromCart(item.data, 0)} />
                            </div>
                        )
                    }
                </>
                :
                <h3>
                    В корзине нет товаров
                </h3>
            }

            {cart.length ? <Button onClick={handleConfirmToOrder} style={{ width: 'fit-content', textAlign: 'center', borderRadius: 8 }}>Оформить заказ</Button> : null}
        </MainWrapper>
    );
}

export default CartPage;
