import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const About = () => {
    const about = useLoaderData();
    return (
        <div>
          
            <h1>this is about pages {about.length} </h1>
            {
                about.map(friend => <Friend
                key={friend.id}
                friend={friend}
                
                ></Friend>)
                
            }
        </div>
    );
};

export default About;