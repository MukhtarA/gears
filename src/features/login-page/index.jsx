import {useCallback, useEffect, useState} from "react";
import {MainWrapper, Button, HeadingWrapper, Input, InputWrapper} from "./style";
import {useNavigate} from "react-router-dom";
import {SearchButton} from "../../components/SearchBar/style";
import {useDispatch, useSelector} from "react-redux";
import {login, register, selectorAccessToken, selectorLoginStatus, selectorRegisterStatus} from "./slice";
import {SUCCEEDED} from "../../constants/sliceConstants";

const LoginPage = () =>  {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loginStatus = useSelector(selectorLoginStatus)
    const registrationStatus = useSelector(selectorRegisterStatus)
    const [isLogin, setIsLogin] = useState(true)
    const [password, setPassword] = useState('')
    const [loginInput, setLogin] = useState('')
    const [iin, setIin] = useState('')
    const [fullName, setFullName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const accessToken = useSelector(selectorAccessToken)

    const handleSubmit = useCallback(() => {
        if (isLogin) {
            dispatch(login({
                "username": loginInput,
                "password": password
            }))
        } else {
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
        }
    }, [dispatch, isLogin, loginInput, password, iin, fullName, number, email])

    useEffect(() => {
        if (registrationStatus === SUCCEEDED){
            setIsLogin(!isLogin)
        }else if(loginStatus === SUCCEEDED && accessToken){
            sessionStorage.setItem('accessToken', accessToken)
            navigate('/')
        }
    }, [registrationStatus, loginStatus, navigate, isLogin, accessToken])

    return (
        <MainWrapper>
            <HeadingWrapper>
                <h4 style={{ fontSize: 30, margin: 0 }}>{isLogin ? 'Вход' : 'Регистрация' }</h4>
                <p style={{ color: 'blue', cursor: 'pointer', margin: 0 }} onClick={() => setIsLogin((prev) => !prev)} >{isLogin ? 'Регистрация' : 'Вход' }</p>
            </HeadingWrapper>
            <div style={{ textAlign: 'center', marginTop: 30}}>
            {isLogin ?
                <InputWrapper>
                    <Input onChange={(e) => setLogin(e.target.value)} id="login" placeholder="Логин"/>
                    <Input onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder="Пароль"/>
                </InputWrapper>
                :
                <InputWrapper>
                    <Input onChange={(e) => setLogin(e.target.value)} id="login" placeholder="Логин"/>
                    <Input onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder="Пароль"/>
                    <Input onChange={(e) => setIin(e.target.value)} id="iin" type="number" placeholder="ИИН" maxLength="12"/>
                    <Input onChange={(e) => setFullName(e.target.value)} id="fullName" placeholder="ФИО"/>
                    <Input onChange={(e) => setNumber(e.target.value)} id="phoneNumber" type="number" placeholder="Номер телефона"/>
                    <Input onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Email"/>
                </InputWrapper>
            }
            <SearchButton style={{ padding: 10, marginTop: 10 }} onClick={() => handleSubmit()}>Отправить</SearchButton>
            </div>
        </MainWrapper>
    );
}

export default LoginPage;
