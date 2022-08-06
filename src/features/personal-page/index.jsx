import {useCallback, useEffect, useState} from "react";
import {ContentWrapper, Image, MainWrapper, Text} from "./style";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import kaspi from '../../assets/image/kaspi.png'
import {selectorUserData, updateUserInfo} from "../login-page/slice";
import {Button, Input, InputWrapper} from "../login-page/style";

const PersonalPage = () =>  {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userData = useSelector(selectorUserData)

    const [loginInput, setLogin] = useState(userData?.username)
    const [iin, setIin] = useState(userData?.iin)
    const [fullName, setFullName] = useState(userData?.full_name)
    const [number, setNumber] = useState(userData?.phone_number)
    const [email, setEmail] = useState(userData?.email)

    const updateUserData = useCallback(() => {
        dispatch(updateUserInfo({
            "id": userData?.id,
            "username": loginInput,
            "iin": iin,
            "full_name": fullName,
            "phone_number": number,
            "email": email
        }))
    }, [dispatch, userData, loginInput, iin, fullName, number, email])

    return (
        <MainWrapper>
            <h1>Личный кабинет</h1>

            <div style={{ border: '1px solid darkgray', padding: 20, display: 'flex', flexDirection: 'column', borderRadius: 8}}>
                <h3 style={{ marginBottom: 10, marginTop: 0}}>Личные данные</h3>

                <InputWrapper>
                    <label>Логин</label>
                    <Input value={loginInput} onChange={(e) => setLogin(e.target.value)} id="login" placeholder="Логин"/>
                    <label>ИИН</label>
                    <Input value={iin} onChange={(e) => setIin(e.target.value)} id="iin" type="number" placeholder="ИИН" maxLength="12"/>
                    <label>ФИО</label>
                    <Input value={fullName} onChange={(e) => setFullName(e.target.value)} id="fullName" placeholder="ФИО"/>
                    <label>Номер телефона</label>
                    <Input value={number} onChange={(e) => setNumber(e.target.value)} id="phoneNumber" type="number" placeholder="Номер телефона"/>
                    <label>Email</label>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Email"/>
                </InputWrapper>
            </div>
            <Button style={{ borderRadius: 8 }} onClick={updateUserData}>Сохранить изменения</Button>
        </MainWrapper>
    );
}

export default PersonalPage;
