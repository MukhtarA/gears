import {useDispatch, useSelector} from "react-redux";
import _ from "lodash"

import {selectorSearchData, selectorSearchStatus} from "../../components/SearchBar/slice";
import {MainWrapper} from "./style";
import SearchItem from "../../components/SearchItem";
import {useCallback} from "react";
import {addItemToCart, addToCart, selectorCart} from "../cart-page/slice";
import {ItemStyled} from "../../components/SearchItem/style";

const SearchResultPage = () => {
    const dispatch = useDispatch()
    const searchData = useSelector(selectorSearchData)
    const searchStatus = useSelector(selectorSearchStatus)

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

    return (
        <MainWrapper>
            <SearchItem
                type="header"
                brand="Производитель"
                price="Цена"
                inStock="Осталось"
                serialNumber="Артикул"
                deliveryDays="Срок"
                catalog="Склад"
                rating="Рейтинг"

            />
            {searchData && _.map(searchData, (item) =>
                <SearchItem
                    key={item?.id}
                    brand={item?.brand}
                    price={item?.price}
                    inStock={item?.available}
                    serialNumber={item?.partNumber}
                    deliveryDays={item?.days}
                    catalog={item?.catalog}
                    rating={item?.rating}
                    data={item}
                    handleAddToCart={handleAddToCart}

                />
            )}
        </MainWrapper>
    );
}

export default SearchResultPage;
