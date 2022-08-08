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
    const [lastName, setLastName] = useState(userData?.last_name)
    const [firstName, setFirstName] = useState(userData?.first_name)
    const [number, setNumber] = useState(userData?.phone_number)
    const [email, setEmail] = useState(userData?.email)

    const updateUserData = useCallback(() => {
        dispatch(updateUserInfo({
            "id": userData?.id,
            "username": loginInput,
            "first_name": firstName,
            "last_name": lastName,
            "phone_number": number,
            "email": email
        }))
    }, [dispatch, userData, loginInput, firstName, lastName, number, email])

    return (
        <MainWrapper>
            <h1>Личный кабинет</h1>
            <label>Имя: {userData?.first_name}</label>
            <label>Фамилия: {userData?.last_name}</label>
            <label>Баланс: {userData?.balance} тг</label>

            <div style={{ border: '1px solid darkgray', padding: 20, display: 'flex', flexDirection: 'column', borderRadius: 8}}>
                <h3 style={{ marginBottom: 10, marginTop: 0}}>Редактировать личные данные</h3>
                <InputWrapper>
                    <label>Логин</label>
                    <Input style={{ width: '80%' }} value={loginInput} onChange={(e) => setLogin(e.target.value)} id="login" placeholder="Логин"/>
                    <label>Имя</label>
                    <Input style={{ width: '80%' }} value={firstName} onChange={(e) => setFirstName(e.target.value)} id="firstName" type="number" placeholder="Имя" maxLength="12"/>
                    <label>Фамилия</label>
                    <Input style={{ width: '80%' }} value={lastName} onChange={(e) => setLastName(e.target.value)} id="lastName" placeholder="Фамилия"/>
                    <label>Номер телефона</label>
                    <Input style={{ width: '80%' }} value={number} onChange={(e) => setNumber(e.target.value)} id="phoneNumber" type="number" placeholder="Номер телефона"/>
                    <label>Email</label>
                    <Input style={{ width: '80%' }} value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Email"/>
                </InputWrapper>
            </div>
            <Button style={{ borderRadius: 8 }} onClick={updateUserData}>Сохранить изменения</Button>
        </MainWrapper>
    );
}

export default PersonalPage;
