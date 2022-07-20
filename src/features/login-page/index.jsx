import {useCallback, useState} from "react";
import {MainWrapper, Button} from "./style";
import {useNavigate} from "react-router-dom";

const LoginPage = () =>  {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(false)

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        navigate('/search')
    }, [navigate])

    return (
        <MainWrapper>

            <h4>{isLogin ? 'Вход' : 'Регистрация' }</h4>

            <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
            {isLogin ?
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>

                    <input id="login" placeholder="Логин"/>
                    <input id="password" type="password" placeholder="Пароль"/>
                </div>
                :
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <input id="login" placeholder="Логин"/>
                    <input id="password" type="password" placeholder="Пароль"/>
                    <input id="iin" type="number" placeholder="ИИН" maxLength="12"/>
                    <input id="fullName" placeholder="ФИО"/>
                    <input id="phoneNumber" type="number" placeholder="Номер телефона"/>
                    <input id="email" placeholder="Email"/>
                </div>
            }

            <Button type="submit">Отправить</Button>
            </form>
            <p style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setIsLogin((prev) => !prev)} >{isLogin ? 'Регистрация' : 'Вход' }</p>

        </MainWrapper>
    );
}

export default LoginPage;
