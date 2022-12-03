/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useHttpClient } from "../hooks/http-hook";
import ViewFood from '../components/ViewFood';
import RecViewFood from '../components/RecViewFood';

const ReqViewFood = () => {

    const foodId = useParams().foodId;
    const { sendRequest } = useHttpClient();

    const [loadedFood, setloadedFood] = useState();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    'http://localhost:5000/api/users/viewfood',
                    'POST',
                    JSON.stringify({
                        foodId
                    }),
                    
                );
                setloadedFood(responseData);
            } catch (err) { }
        };
        fetchUsers();
    }, [sendRequest]);
    return (
        <React.Fragment>
            {loadedFood && <ViewFood items={loadedFood} /> } 
            {loadedFood && <RecViewFood items={loadedFood} />}  
        </React.Fragment>
    );
};

export default ReqViewFood;