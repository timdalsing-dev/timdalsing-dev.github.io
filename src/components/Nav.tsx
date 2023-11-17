import React from 'react';
import '../App.css';

const NavCompentencies = () => {
    return (
        <div className='Nav-Item'><a href='#compentencies'>Compentencies</a></div>
    )
}

const NavProjects = () => {
    return (
        <div className='Nav-Item'><a href='#projects'>Projects</a></div>
    )
}

const NavExperience = () => {
    return (
        <div className='Nav-Item'><a href='#experience'>Experience</a></div>
    )
}

const NavEducation = () => {
    return (
        <div className='Nav-Item'><a href='#education'>Education</a></div>
    )
}

const Navbar = () => {
    return (
        <nav className='Nav-Bar'>
            <NavCompentencies />
            <NavProjects />
            <NavExperience />
            <NavEducation />
        </nav>
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