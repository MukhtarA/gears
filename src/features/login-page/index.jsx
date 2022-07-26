import {useCallback, useEffect, useState} from "react";
import {MainWrapper, Button, HeadingWrapper, Input, InputWrapper} from "./style";
import {useNavigate} from "react-router-dom";
import {SearchButton} from "../../components/SearchBar/style";
import {useDispatch, useSelector} from "react-redux";
import {login, register, selectorAccessToken, selectorLoginStatus, selectorRegisterStatus} from "./slice";
import {FAILED, SUCCEEDED} from "../../constants/sliceConstants";
import Alert from "@mui/material/Alert";

const LoginPage = () =>  {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loginStatus = useSelector(selectorLoginStatus)
    const registrationStatus = useSelector(selectorRegisterStatus)
    const [isLogin, setIsLogin] = useState(true)
    const [password, setPassword] = useState('')
    const [loginInput, setLogin] = useState('')
    const accessToken = useSelector(selectorAccessToken)

    const handleSubmit = useCallback(() => {
            dispatch(login({
                "username": loginInput,
                "password": password
            }))

    }, [dispatch, loginInput, password])

    useEffect(() => {
     if(loginStatus === SUCCEEDED){
            localStorage.setItem('accessToken', accessToken)
            setTimeout(() =>{
                navigate('/')
            }, 5000)}
    }, [registrationStatus, loginStatus, navigate])

    return (
        <MainWrapper>
            <HeadingWrapper>
                <h4 style={{ fontSize: 30, margin: 0 }}>Вход</h4>
                <p style={{ color: 'blue', cursor: 'pointer', margin: 0 }} onClick={() => navigate('/registration')}>Регистрация</p>
            </HeadingWrapper>
            <div style={{ textAlign: 'center', marginTop: 30}}>
                { loginStatus === SUCCEEDED ?  <Alert style={{ marginBottom: 10 }} severity={'success'}>Авторизация прошла успешно</Alert> : null}
                { loginStatus === FAILED ?  <Alert style={{ marginBottom: 10 }} severity={'error'}>Неправельный логин или пароль</Alert> : null}

                <InputWrapper>
                    <Input onChange={(e) => setLogin(e.target.value)} id="login" placeholder="Логин"/>
                    <Input onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder="Пароль"/>
                </InputWrapper>
            <SearchButton style={{ padding: 10, marginTop: 10 }} onClick={() => handleSubmit()}>Отправить</SearchButton>
            </div>
        </MainWrapper>
    );
}

export default LoginPage;
