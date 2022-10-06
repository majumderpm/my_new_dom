import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id, name, email, username} = friend;
    // console.log(friend);
    return (
        <div className='post'>
           <p> Name: <strong><i> {name}</i></strong></p>
           <p> E-mail: <strong><i> {email}</i></strong></p>
           <p>User-Name: <Link to={`/friend/${id}`}>{username}</Link></p>
        </div>
    );
};

export default Friend;