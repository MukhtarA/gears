import {useCallback, useEffect, useState} from "react";
import {MainWrapper, Button, HeadingWrapper, Input, InputWrapper} from "./style";
import {useNavigate} from "react-router-dom";
import {SearchButton} from "../../components/SearchBar/style";
import {useDispatch, useSelector} from "react-redux";
import {login, register, selectorAccessToken, selectorLoginStatus, selectorRegisterStatus} from "../login-page/slice";
import {SUCCEEDED} from "../../constants/sliceConstants";
import Alert from '@mui/material/Alert';

const RegistrationPage = () =>  {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loginStatus = useSelector(selectorLoginStatus)
    const registrationStatus = useSelector(selectorRegisterStatus)
    const [password, setPassword] = useState('')
    const [loginInput, setLogin] = useState('')
    const [iin, setIin] = useState('')
    const [fullName, setFullName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const accessToken = useSelector(selectorAccessToken)

    const handleSubmit = useCallback(() => {
            dispatch(register({
                "username": loginInput,
                "password": password,
                "iin": iin,
                "full_name": fullName,
                "phone_number": number,
                "role_id": 1,
                "email": email,
                "partner_id": 1
            }))
    }, [dispatch, loginInput, password, iin, fullName, number, email])

    useEffect(() => {
        if (registrationStatus === SUCCEEDED){
            setTimeout(() =>
            navigate('/login'), 5000)
        }
    }, [registrationStatus, loginStatus, navigate, accessToken])

    return (
        <MainWrapper>
            <HeadingWrapper>
                <h4 style={{ fontSize: 30, margin: 0 }}>Регистрация</h4>
                <p style={{ color: 'blue', cursor: 'pointer', margin: 0 }} onClick={() => navigate('/login')} >Вход</p>
            </HeadingWrapper>
            <div style={{ textAlign: 'center', marginTop: 30}}>
                { registrationStatus !== 'idle' && <Alert style={{ marginBottom: 10 }} severity={registrationStatus === SUCCEEDED ? 'success' : 'error'}>{registrationStatus === SUCCEEDED ? 'Регистрация прошла успешно' : 'Такой пользователь существует'}</Alert>}

                <InputWrapper>
                    <Input onChange={(e) => setLogin(e.target.value)} id="login" placeholder="Логин"/>
                    <Input onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder="Пароль"/>
                    <Input onChange={(e) => setIin(e.target.value)} id="iin" type="number" placeholder="ИИН" maxLength="12"/>
                    <Input onChange={(e) => setFullName(e.target.value)} id="fullName" placeholder="ФИО"/>
                    <Input onChange={(e) => setNumber(e.target.value)} id="phoneNumber" type="number" placeholder="Номер телефона"/>
                    <Input onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Email"/>
                </InputWrapper>
            <SearchButton style={{ padding: 10, marginTop: 10 }} onClick={() => handleSubmit()}>Отправить</SearchButton>
            </div>
        </MainWrapper>
    );
}

export default RegistrationPage;
