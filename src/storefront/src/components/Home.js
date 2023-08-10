import React from 'react'
import '../css/Home.css'
import Navbar from './Navbar'
import Products from './Products'
import {ToastContainer} from 'react-toastify'

const Home = ({user}) => {
    return (
        <div className='wrapper'>
            <Navbar user={user} />
            <Products />
            <ToastContainer/>
        </div>
    );
};

export default Home;