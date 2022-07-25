import {useCallback, useEffect, useState} from "react";
import {ContentWrapper, Image, MainWrapper, Text} from "./style";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import pickup from '../../assets/image/pickup.png'
import delivery from '../../assets/image/delivery.png'

const DeliveryInfoPage = () =>  {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <MainWrapper>
            <h1>Доставка заказа</h1>
            <Text>
                В случае доставки курьером покупатели могут оплатить заказ как наличным, так и безналичным способом.
                Мы постоянно совершенствуем нашу службу доставки для того, чтобы сделать ее максимально удобной.
                Чтобы быть к Вам как можно ближе мы регулярно открываем новые пункты самовывоза.
            </Text>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20}}>
                <ContentWrapper style={{ border: '1px dashed gray' }}>
                    <Image src={pickup}/>
                    <span style={{ fontWeight: 500 }}>Самовывоз</span>
                    <p>Этот способ следует выбирать, если Вы сможете забрать заказ самостоятельно или через доверенное лицо в офисе регистрации.</p>
                </ContentWrapper>
                <ContentWrapper style={{ border: '1px dashed gray' }}>
                    <Image src={delivery}/>
                    <span style={{ fontWeight: 500 }}>Транспортная компания</span>
                    <p>Этот способ может быть выбран если в вашем регионе пока не открыто наше представительство и вы работаете напрямую с офисом в Алматы.</p>
                </ContentWrapper>
            </div>
        </MainWrapper>
    );
}

export default DeliveryInfoPage;
