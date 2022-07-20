import {
    MainWrapper,
    Image,
    InfoWrapper,
    ButtonWrapper
} from "./style";
import CounterButton from "./components/CounterButtons";

const SearchItem = ({brand, serialNumber, title, inStock, price, maxDelivery, minDelivery, handleAddToCart, data}) => {

    return (
        <MainWrapper>
            <InfoWrapper>
                <h4 style={{marginBottom: 5}}>{title}</h4>
                <p style={{margin: 0}}>{brand}</p>
                <p style={{marginTop: 5, fontSize: 12}}>{serialNumber}</p>
            </InfoWrapper>

            <ButtonWrapper>
                <h2 style={{marginBottom: 5}}>₸ {new Intl.NumberFormat().format(price)}</h2>
                <p style={{marginTop: 5, marginBottom: 0, fontSize: 12}}>{minDelivery === maxDelivery ? `Доставка займет ${minDelivery} рабочих дня` : `Доставка от ${minDelivery} дней до ${maxDelivery} дней`}</p>
                {inStock && <p style={{marginTop: 3, fontSize: 12}}>{inStock > 20 ? 'В наличии' : `Осталось ${inStock}`}</p>}
                <CounterButton handleAddToCart={handleAddToCart} inStock={inStock} data={data} />
            </ButtonWrapper>
        </MainWrapper>
    )
}

export default SearchItem
