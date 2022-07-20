import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {checkIp, selectorCheckError} from "../login-page/slice";

const MainPage = () =>  {
    const dispatch = useDispatch()
    const checkIpError = useSelector(selectorCheckError)

    useEffect(() => {
        fetch('https://api.parts-catalogs.com/v1/catalogs', {
            method: "GET",
            headers: {
                Authorization: "OEM-API-54563777-0E09-4526-8FC3-96AE8439FD95"
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                alert(data.message);
            });
        }, [])

    return (
        <div>
            <p>home</p>

        </div>
    );
}

export default MainPage;
