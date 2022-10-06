import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
const User = () => {
    const user = useLoaderData();
    console.log(user);
    const {id, title, body, userId} = user;
    const navigator = useNavigate ();
    const useClickbtn = () =>{
        navigator (`/friend/${id}`);
    }
    return (
        <div className='user'>
              <h3>{title}</h3>
            <p>{body}</p>
            <small>{userId}</small>
            <button onClick={useClickbtn}>back to author</button>
        </div>
    );
};

export default User;