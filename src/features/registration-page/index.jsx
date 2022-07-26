import {useCallback, useEffect, useState} from "react";
import {MainWrapper, Button, HeadingWrapper, Input, InputWrapper} from "./style";
import {useNavigate} from "react-router-dom";
import {SearchButton} from "../../components/SearchBar/style";
import {useDispatch, useSelector} from "react-redux";
import {login, register, selectorAccessToken, selectorLoginStatus, selectorRegisterStatus} from "../login-page/slice";
import {SUCCEEDED} from "../../constants/sliceConstants";
import Alert from '@mui/material/Alert';
import MaskInput from 'react-maskinput';
import InputMask from 'react-input-mask';


const RegistrationPage = () =>  {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loginStatus = useSelector(selectorLoginStatus)
    const registrationStatus = useSelector(selectorRegisterStatus)
    const [password, setPassword] = useState('')
    const [loginInput, setLogin] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const accessToken = useSelector(selectorAccessToken)

    const formatPhoneNumber = (phoneNumberString) =>  {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        }
        return null
    }

    const handleLoginChange = useCallback((value) => {
        value.replace(/^[A-Za-z0-9]*$/, '')
        setLogin(value)
    }, [])

    const handleNumberChange = useCallback((value) => {
        console.log(formatPhoneNumber(value))
        setNumber(value)
    }, [])


    console.log(number)

    const handleSubmit = useCallback(() => {
            dispatch(register({
                "username": loginInput,
                "password": password,
                "first_name": firstName,
                "last_name": lastName,
                "phone_number": number,
                "role_id": 1,
                "city_id":2,
                "email": email,
                "partner_id": 1
            }))
    }, [dispatch, loginInput, password, firstName, lastName, number, email])

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
                    <Input onChange={(e) => handleLoginChange(e.target.value)} maxLength={10} minLength={5} value={loginInput} id="login" placeholder="Логин" />
                    <Input onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder="Пароль"/>
                    <Input onChange={(e) => setFirstName(e.target.value)}  id="firstName" placeholder="Имя"/>
                    <Input onChange={(e) => setLastName(e.target.value)} id="lastName" placeholder="Фамилия"/>
                    <InputMask style={{ padding: 10, border: '1px solid lightgray' }} mask="+8\ (999) 999 99 99" maskChar=" " value={number} placeholder="Номер телефона" onChange={(e) => setNumber(e.target.value)} />
                    <Input onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Email"/>
                </InputWrapper>
            <SearchButton style={{ padding: 10, marginTop: 10 }} onClick={() => handleSubmit()}>Отправить</SearchButton>
            </div>
        </MainWrapper>
    );
}

export default RegistrationPage;
