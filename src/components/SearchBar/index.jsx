import {useCallback, useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping, faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'

import {selectorCart} from "../../features/cart-page/slice";
import {searchByNumber} from "./slice";
import {
    CartModal,
    InputLabel,
    InputWrapper,
    MainWrapper, Pin,
    SearchButton,
    SubMenuWrapper
} from "./style";
import {computedCardItemsAmount, computedCardPrice} from "../../helpers/computed";

const SearchBar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [searchValue, setValue] = useState('')
    const [cartHover, setCartHover] = useState(false)
    const cart = useSelector(selectorCart)
    const cartPrice = useMemo(() => computedCardPrice(cart), [cart])
    const cartItemsAmount = useMemo(() => computedCardItemsAmount(cart), [cart])

    const onSearch = useCallback(({target}) => {
        setValue(target.value)
    }, [])
    console.log(cart.length)
    useEffect(() => {
        dispatch(searchByNumber(searchValue))
    }, [dispatch, searchValue])

    return (
        <MainWrapper>
            <SubMenuWrapper>Categories</SubMenuWrapper>
            <InputWrapper>
                <InputLabel placeholder="Введите артикул или VIN/номер кузова" value={searchValue} onChange={onSearch}/>
                <SearchButton onClick={() => navigate('/search')}>Search</SearchButton>
            </InputWrapper>
            <SubMenuWrapper onMouseOver={() => setCartHover((prev) => !prev)} style={{ position: "relative" }}>
                <div style={{position: 'relative'}}>
                    <FontAwesomeIcon icon={faCartShopping} color="darkgray"/>
                    {cartItemsAmount ? <Pin>{cartItemsAmount}</Pin> : null}
                </div>
                <p style={{margin: 0, fontSize: 14, whiteSpace: 'nowrap', color: 'darkGray'}}>₸{new Intl.NumberFormat().format(cartPrice)}</p>
                <FontAwesomeIcon icon={cartHover ? faChevronUp : faChevronDown} color="darkgray"/>

                {cartHover && <CartModal onMouseOver={() => setCartHover((prev) => !prev)}
                                         onMouseOut={() => setCartHover((prev) => !prev)}>
                    {cart.length > 0 ? cart.map((item) =>
                        <div style={{ fontSize: 12, borderBottom: '1px solid grey' }}>
                            {item.count} X {item.data.brand} {item.data.description}
                        </div>)
                        :
                        <div>В корзине нет товаров</div>
                    }
                </CartModal>}
            </SubMenuWrapper>
        </MainWrapper>
    )
}

export default SearchBar
