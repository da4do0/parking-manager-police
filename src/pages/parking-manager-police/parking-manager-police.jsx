import React, {useEffect} from "react";
import {useNavigate, Navigate} from 'react-router-dom';

const ParkingManager = ()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        navigate('/');
    }, [])
    return(
        <>
        <Navigate to="/" />;
        </>
    )
}

export default ParkingManager;