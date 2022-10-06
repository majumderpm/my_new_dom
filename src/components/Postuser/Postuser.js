import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Postuser = ({postuser}) => {
    const {id, title, body} = postuser;
    const navigator = useNavigate ();
    const clickbtn = () =>{
        navigator (`/postuser/${id}`);
    }
    return (
        <div className='post'>
               <h3>{title}</h3>
            <p>{body}</p>
            {/* <small>{userId}</small> */}
           
            <Link to={`/postuser/${id}`}>
            <button>view details</button>
            </Link>

            <button onClick={clickbtn}>show</button>
        </div>
    );
};

export default Postuser;

