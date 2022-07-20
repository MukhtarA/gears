import {useDispatch, useSelector} from "react-redux";
import _ from "lodash"

import {selectorSearchData, selectorSearchStatus} from "../../components/SearchBar/slice";
import {MainWrapper} from "./style";
import SearchItem from "../../components/SearchItem";
import {useCallback} from "react";
import {addToCart, selectorCart} from "../cart-page/slice";

const SearchResultPage = () => {
    const dispatch = useDispatch()
    const searchData = useSelector(selectorSearchData)
    const searchStatus = useSelector(selectorSearchStatus)

    const handleAddToCart = useCallback((data, count) => () => {
        dispatch(addToCart({data, count}))
    }, [dispatch])

    return (
        <MainWrapper>
            {searchData && _.map(searchData, (item) =>
                <SearchItem
                    key={item?.id}
                    brand={item?.brand}
                    title={item?.detail_name}
                    price={item?.price}
                    inStock={item?.available}
                    serialNumber={item?.description}
                    maxDelivery={item?.days}
                    minDelivery={item?.days}
                    data={item}
                    handleAddToCart={handleAddToCart}

                />
            )}
        </MainWrapper>
    );
}

export default SearchResultPage;
