import React from 'react';
import '../App.css';

const NavHome = () => {
    return (
        <div className='Nav-Item'>Home</div>
    )
}


const NavProjects = () => {
    return (
        <div className='Nav-Item'>Projects</div>
    )
}

const NavExperience = () => {
    return (
        <div className='Nav-Item'>Experience</div>
    )
}

const NavEducation = () => {
    return (
        <div className='Nav-Item'>Education</div>
    )
}

const Navbar = () => {
    return (
        <div className='Nav-Bar'>
            <NavHome />
            <NavProjects />
            <NavExperience />
            <NavEducation />
        </div>
    )
}

const Nav = () => {
    return (
        <div className='Nav'>
            <Navbar/>
        </div>
    )
}

export default Nav