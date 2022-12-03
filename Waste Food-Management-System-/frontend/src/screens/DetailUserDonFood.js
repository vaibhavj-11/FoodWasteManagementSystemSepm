/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext} from 'react';
import { useParams} from 'react-router-dom';
import { useHttpClient } from "../hooks/http-hook";
import DisplayDetailUserDonFood from '../components/DisplayDetailUserDonFood';

const DetailUserDonFood = () => {

    const foodId = useParams().foodId;
    const { sendRequest } = useHttpClient();
    const [loadedFood, setLoadedFood] = useState();

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const responseData = await sendRequest(
                    'http://localhost:5000/api/users/openviewdonatefood',
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
            {loadedFood && <DisplayDetailUserDonFood items={loadedFood} />}
        </React.Fragment>
    );
};

export default DetailUserDonFood;
