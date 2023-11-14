import React from 'react';
import '../App.css';

const Experience = () => {
    return (
        <div style={{marginBottom: '1.5em'}}>
            <div className='Section-Title' id='experience'>
                Professional Experience
            </div>
            <div>
                <div className='Experience-Title'>
                    6/15 to Present: VMware/Pivotal - Senior Consultant
                </div>

                <p className='Para'>
                    My role is to help customers with application and data modernization.  Usually that means pairing with the customer’s developers to actually write code (enablement), sometimes it means to define a path to success (the journey), and occasionally it means to recommend best practices  for design, development, and deployment (path-to-prod).  Since the mandate can be very broad, topics covered nearly always go beyond just the code to include automation using CI/CD, tooling to streamline and simplify the process, SRE, etc.
                </p>

                <p>
                    Since VMware/Pivotal’s customers are extremely diverse, the types of engagements and the technologies involved are very broad.  Customers include:
                </p>

                <ul>
                    <li>Banks</li>
                    <li>Insurance</li>
                    <li>Pharmaceuticals</li>
                    <li>Railroads</li>
                    <li>Telecommunications</li>
                    <li>Manufacturing of all types</li>
                    <li>Government: federal, state, and local</li>
                </ul>

                <p>
                    Typical engagements include:
                </p>

                <ul>
                    <li>Application modernization</li>
                    <li>New product development</li>
                    <li>Enablement</li>
                    <li>Modernization of mainframe and COBOL applications</li>
                </ul>

                <div className='Experience-Title-2'>
                    2/15 to 6/15: Rocana - Sales Engineer
                </div>

                <div className='Experience-Title-2'>
                    4/11 to 2/15: VMware/Pivotal - Senior Consultant
                </div>

                <div className='Experience-Title-2'>
                    9/07 to 4/11: Red Hat/JBoss - Senior Consultant
                </div>

                <div className='Experience-Title-2'>
                    9/06 to 9/07: Cognizant - Senior Consultant
                </div>
            </div>
        </div>
    )
}

export default Experience