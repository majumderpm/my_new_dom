import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Main from './layout/Main';
import Details from './components/Details/Details';
import Post from './components/Post/Post';
import User from './components/User/User';

function App() {
  const router = createBrowserRouter([
    {path : '/', element: <Main></Main>, children: [
      {path : '/', element: <Home></Home>},
      {path : '/home', element: <Home></Home>},
      {path : '/about',
      loader: async () => {
        return fetch(`https://jsonplaceholder.typicode.com/users`);
      },
       element: <About></About>},


      {
        path: '/friend/:friendId',
        loader: async ({params}) => {
          console.log(params.friendId);
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`);
        } ,
        element: <Details></Details>
      },


      {path : '/post', 
      
      loader: async () => {
        return fetch(`https://jsonplaceholder.typicode.com/posts`)
      },
      
      element: <Post></Post>},

      {
        path: '/postuser/:postuserId',
        loader: async ({params}) => {
          console.log(params.postuserId)
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postuserId}`)
        },
        element: <User></User>
      },


    ]},
   {path: '*', element: <div>this routh not found</div>},
  
  ])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
