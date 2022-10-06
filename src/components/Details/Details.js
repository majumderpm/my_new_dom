import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Details = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h2>details about: {friend.name}</h2>
            <p>call Number: {friend.phone}</p>
        </div>
    );
};

export default Details;