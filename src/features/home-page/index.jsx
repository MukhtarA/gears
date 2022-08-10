import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {checkIp, getUserInfo, selectorAccessToken, selectorCheckError} from "../login-page/slice";
import {getCart, selectorInitialCartData, selectorInitialCartStatus, setInitialCart} from "../cart-page/slice";
import {SUCCEEDED} from "../../constants/sliceConstants";
import {MainWrapper} from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'better-react-carousel'
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

    const MyDot = ({ isActive }) => (
        <span
            style={{
                display: 'inline-block',
                height: isActive ? '8px' : '5px',
                width: isActive ? '8px' : '5px',
                background: isActive ? '#005c1c' : '#999999',
                borderRadius: '100%',
            }}
        />
    )

    return (
        <MainWrapper>
            <Carousel cols={2} rows={1} gap={10} loop autoplay scrollSnap showDots dot={MyDot}>
                <Carousel.Item>
                    <img width="100%" src="https://picsum.photos/800/600?random=1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://picsum.photos/800/600?random=2" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://picsum.photos/800/600?random=3" />
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src="https://picsum.photos/800/600?random=4" />
                </Carousel.Item>
            </Carousel>

        </MainWrapper>
    );
}

export default MainPage;
