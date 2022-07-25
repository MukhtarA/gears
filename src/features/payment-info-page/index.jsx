import {useCallback, useEffect, useState} from "react";
import {ContentWrapper, Image, MainWrapper, Text} from "./style";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import kaspi from '../../assets/image/kaspi.png'

const PaymentInfoPage = () =>  {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <MainWrapper>
            <h1>Оплата заказа</h1>
            <Text style={{ whiteSpace: "pre-line" }}>
                Для работы с заказами в системе Kazuma.kz используются внутренние Персональные счета клиентов. Все средства, полученные от клиента, попадают на Персональный счет клиента в системе Kazuma.kz и могут быть использованы для работы с заказами. </Text>

            <Text>На текущий момент мы можем предложить Вам способы оплаты:</Text>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20}}>
                <ContentWrapper style={{ border: '1px dashed gray'  }}>
                    <Image src={kaspi}/>
                    <span>Kaspi bank</span>
                </ContentWrapper>
                <ContentWrapper style={{ border: '1px dashed gray'  }}>
                    <Image src={kaspi}/>
                    <span>Kaspi bank</span>
                </ContentWrapper>
            </div>

            <h4>Безопасность онлайн платежей</h4>
            <Text>
                Предоставляемая Вами персональная информация (имя, адрес, телефон, e-mail, номер кредитной карты) является конфиденциальной и не подлежит разглашению. Данные Вашей кредитной карты передаются только в зашифрованном виде и не сохраняются на нашем Web-сервере.
                <br />
                При передаче информации используется специальные технологии безопасности карточных онлайн-платежей, обработка данных ведется на безопасном высокотехнологичном сервере процессинговой компании.
            </Text>
</MainWrapper>
    );
}

export default PaymentInfoPage;
