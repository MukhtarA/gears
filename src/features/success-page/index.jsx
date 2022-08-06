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
} from "../cart-page/slice";
import {useCallback, useEffect, useMemo} from "react";
import {computedCardItemsAmount, computedCardPrice} from "../../helpers/computed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CounterButton from "../../components/SearchItem/components/CounterButtons";
import styled from "@emotion/styled";
import {FontAwesomeIconStyled} from "../../components/NavigationBar/style";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {Button} from "../login-page/style";
import {LinkStyled} from "../../components/Footer/style";

const SuccessPage = () =>  {
    const dispatch = useDispatch()
    const cart = useSelector(selectorCart)
    const cartPrice = useMemo(() => computedCardPrice(cart), [cart])
    const cartItemsAmount = useMemo(() => computedCardItemsAmount(cart), [cart])


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
                    <h2>
                        Заказ принят
                    </h2>
                    <h3>
                        Оплачено {new Intl.NumberFormat().format(cartPrice)} тг
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
                                    <ItemStyled>{item.count}</ItemStyled>
                                </div>
                            </div>
                        )
                    }
                </>
                : null
            }
        </MainWrapper>
    );
}

export default SuccessPage;
