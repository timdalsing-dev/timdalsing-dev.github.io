import React from 'react';
import '../App.css';
import About from './About';
import Projects from './Projects';
import Title from './Title';
import Experience from './Experience';
import Education from './Education';
import Portfolio from './Portfolio';
import Compentencies from './Compentencies';

const Content = () => {
    return (
        <div className='Content'>
            <div className='Content-Title'>
                <Title />
            </div>
            <div className='Content-About'>
                <Compentencies />
                <Projects />
                <Experience />
                {/* <Portfolio /> */}
                <Education />
            </div>
        </div>
    )
}

export default Content