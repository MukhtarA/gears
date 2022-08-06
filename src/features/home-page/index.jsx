import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {checkIp, getUserInfo, selectorAccessToken, selectorCheckError} from "../login-page/slice";
import {getCart, selectorInitialCartData, selectorInitialCartStatus, setInitialCart} from "../cart-page/slice";
import {SUCCEEDED} from "../../constants/sliceConstants";

const MainPage = () =>  {
    const dispatch = useDispatch()
    const initialCartData = useSelector(selectorInitialCartData)
    const initialCartStatus = useSelector(selectorInitialCartStatus)

    useEffect(() => {
        dispatch(getCart())
        dispatch(getUserInfo())
    }, [dispatch])

    useEffect(() => {
        if(initialCartStatus === SUCCEEDED && initialCartData){
            dispatch(setInitialCart(initialCartData))
        }

    },[dispatch, initialCartStatus, initialCartData])

    return (
        <div>
            <p>home</p>
        </div>
    );
}

export default MainPage;
