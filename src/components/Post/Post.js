
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Postuser from '../Postuser/Postuser';
// import Postuser from '../Postuser/Postuser';

const Post = () => {
    const post = useLoaderData ();
    console.log(post);
    return (
        <div>
              <h1>this is post pages {post.length} </h1>
              {
                post.map( postuser => <Postuser
                    key={postuser.id}
                    postuser={postuser}
                ></Postuser>)
              }
        </div>
    );
};

export default Post;