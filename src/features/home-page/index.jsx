import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {checkIp, getUserInfo, selectorAccessToken, selectorCheckError} from "../login-page/slice";
import {getCart, selectorInitialCartData, selectorInitialCartStatus, setInitialCart} from "../cart-page/slice";
import {SUCCEEDED} from "../../constants/sliceConstants";
import {MainWrapper} from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import sliderItem1 from '../../assets/image/slideItem1.jpeg'
import sliderItem2 from '../../assets/image/slideItem2.jpg'

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
            // dispatch(setInitialCart(initialCartData.map((item) => ({
            //
            // }))))
        }

    },[dispatch, initialCartStatus, initialCartData])

    return (
        <MainWrapper>
            <Carousel id="carousel" showThumbs={false}>
                <div><img src={sliderItem1} /></div>
                <div><img src={sliderItem2} /></div>
            </Carousel>

        </MainWrapper>
    );
}

export default MainPage;
