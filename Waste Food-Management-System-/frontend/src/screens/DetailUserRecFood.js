/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext} from 'react';
import { useParams} from 'react-router-dom';
import { useHttpClient } from "../hooks/http-hook";
import DisplayDetailUserRecFood from '../components/DisplayDetailUserRecFood';

const DetailUserRecFood = () => {

    const foodId = useParams().foodId;
    const { sendRequest } = useHttpClient();
    const [loadedFood, setLoadedFood] = useState();

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const responseData = await sendRequest(
                    'http://localhost:5000/api/users/openviewreceivedfood',
                    'POST',
                    JSON.stringify({
                        foodId
                    }),
                    
                );
                setLoadedFood(responseData);
            } catch (err) { }
        };
        fetchFoods();
    }, [sendRequest]);

    return (
        <React.Fragment>
            {loadedFood && <DisplayDetailUserRecFood items={loadedFood} />}
        </React.Fragment>
    );
};

export default DetailUserRecFood;
