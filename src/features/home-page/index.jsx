import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {checkIp, selectorAccessToken, selectorCheckError} from "../login-page/slice";

const MainPage = () =>  {

    const accessToken = useSelector(selectorAccessToken)

    useEffect(() => {
        sessionStorage.setItem('accessToken', JSON.stringify(accessToken))
    }, [accessToken])

    return (
        <div>
            <p>home</p>
        </div>
    );
}

export default MainPage;
