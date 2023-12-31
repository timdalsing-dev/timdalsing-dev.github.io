import React from 'react';
import '../App.css';

const Title = () => {
    return (
        <div className='Title'>
            <div className='Title-Name'>Tim Dalsing</div>
            <div>
                <p>
                    I am a software developer and consultant from the midwest with over 20 years experience.  I mostly work in Java and Spring, but I also use Python, Bash, and many other technologies.  I have extensive experience with Kafka and streaming technologies, as well as In-memory Data Grids, SQL, and NoSQL databases.  I have worked extensively with all 3 major cloud providers, especially AWS and Azure.
                </p>
                <p>
                    I started out as a semiconductor engineer, but switched to software.  I wrote C and C++ for many years before discovering Java.
                </p>
                <p><a href='https://linkedin.com/in/tdalsing'>https://linkedin.com/in/tdalsing</a></p>
                <p><a href='mailto:tim@timdalsing.dev'>tim@timdalsing.dev</a></p>
            </div>
        </div>
    )
}

export default Title