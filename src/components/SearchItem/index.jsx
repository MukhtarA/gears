import {
    MainWrapper,
    Image,
    InfoWrapper,
    ButtonWrapper, ItemStyled
} from "./style";
import CounterButton from "./components/CounterButtons";
import {useEffect, useState} from "react";

const SearchItem = ({
                        type,
                        brand,
                        serialNumber,
                        title,
                        inStock,
                        price,
                        deliveryDays,
                        handleAddToCart,
                        data,
                        catalog,
                        rating,
    ...rest
                    }) => {

    const ratingColor = (rating) => {
        if (rating < 50) {
            return '#f32525'
        } else if (rating > 50 && rating < 75) {
            return '#cdc400'
        } else {
            return '#26b049'
        }
    }

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    return (
        <MainWrapper type={type === 'header'} {...rest}>
            {!matches && type !== 'header' &&
            <>
                <InfoWrapper>
                    <h4 style={{marginBottom: 5}}>{title}</h4>
                    <p style={{margin: 0}}>{brand}</p>
                    <p style={{marginTop: 5, fontSize: 12}}>{serialNumber}</p>
                </InfoWrapper>

                <ButtonWrapper>
                    <h2 style={{marginBottom: 5}}>₸ {new Intl.NumberFormat().format(price)}</h2>
                    <p style={{marginTop: 5, marginBottom: 0, fontSize: 12}}>Доставка займет {deliveryDays} рабочих дня</p>
                    {inStock && <p style={{marginTop: 3, fontSize: 12}}>{inStock > 20 ? 'В наличии' : `Осталось ${inStock}`}</p>}
                    <CounterButton handleAddToCart={handleAddToCart} inStock={inStock} data={data} />
                </ButtonWrapper>
            </>
            }
            {matches &&
             <>
                 {type === 'header' ?
                     <>
                         <ItemStyled>
                             <p>{brand}</p>
                         </ItemStyled>
                         <ItemStyled>
                             <p>{serialNumber}</p>
                         </ItemStyled>
                         <ItemStyled>
                             <p>{price}</p>
                         </ItemStyled>
                         <ItemStyled>
                             <p>{deliveryDays}</p>
                         </ItemStyled>
                         <ItemStyled>
                             <p>{inStock}</p>
                         </ItemStyled>
                         <ItemStyled>
                             <p>{catalog}</p>
                         </ItemStyled>
                         <ItemStyled>
                             <p>{rating}</p>
                         </ItemStyled>
                     </>
                     :
                     <>
                         <ItemStyled>
                             <p>{brand}</p>
                         </ItemStyled>
                         <ItemStyled>
                             <p>{serialNumber}</p>
                         </ItemStyled>
                         <ItemStyled>
                             <p>₸ {price}</p>
                         </ItemStyled>
                         <ItemStyled>
                             <p>{deliveryDays} дней</p>
                         </ItemStyled>
                         <ItemStyled>
                             {inStock < 0 ?
                                 <p style={{color: 'red'}}>Нет в наличии</p>
                                 : <p>{inStock} шт.</p>
                             }
                         </ItemStyled>
                         <ItemStyled>
                             <p>{catalog}</p>
                         </ItemStyled>
                         <ItemStyled style={{color: ratingColor(rating)}}>
                             <p>{rating}%</p>
                         </ItemStyled>
                     </>
                 }

                 <ItemStyled>
                     <CounterButton handleAddToCart={handleAddToCart} inStock={inStock} data={data}/>
                 </ItemStyled>
             </>
            }
        </MainWrapper>
    )
}

export default SearchItem
