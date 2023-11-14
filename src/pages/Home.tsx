import React from 'react';
import '../App.css';
import Title from './Title';
import Content from './Content';
import Nav from '../components/Nav';

const Home = () => {
    return (
        <div className='Home' id='home'>
            <Nav />
            <Content />
        </div>
    )
}

export default Home