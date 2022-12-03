/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import { useHttpClient } from "../hooks/http-hook";
import DisplayUserDonFood from '../components/DisplayUserDonFood';

const UserDonFood = () => {

    const { sendRequest } = useHttpClient();
    const [loadedFood, setLoadedFood] = useState();

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const responseData = await sendRequest(
                    'http://localhost:5000/api/users/viewdonatedfood',
                    'POST',
                    JSON.stringify({
                    }),
                    
                );
                setLoadedFood(responseData);
            } catch (err) { }
        };
        fetchFoods();
    }, [sendRequest]);

    return (
        <React.Fragment>
            {loadedFood && <DisplayUserDonFood items={loadedFood} />}
        </React.Fragment>
    );
};

export default UserDonFood;
