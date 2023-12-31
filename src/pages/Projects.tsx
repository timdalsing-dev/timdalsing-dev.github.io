import React from 'react';
import '../App.css';

const Projects = () => {
    return (
        <div>
            <div className='Section-Title' id='projects'>
                Key Projects and Engagements
            </div>
            <div>
                <ul>
                    <li className='List-Item'>
                        Designed and developed application to generate data usage accumulations for a major cell phone provider.  Used Spring Boot, Spring Cloud Stream, and Spring MVC.  Used Cassandra Counters for concurrent updates to accumulations.  The requirement was to support a minimum of 40k updates per second.  The solution easily met that, and was able to ingest a peak of 250k updates per second.  Deployed to Google Cloud on VMs and Kubernetes using Terraform and Ansible.
                    </li>
                    <li className='List-Item'>
                        Designed and helped develop applications for a major pharmacy benefits company that performs adjudication using Apache Geode/GemFire in-memory data grid, Spring Boot, and Reactor.  Used MongoDB as the main backing data store.  The use of in-memory data grid dramatically reduces the time required for adjudication.  This solution replaces an old mainframe application.  Deployed to Tanzu Application Service (Cloud Foundry).
                    </li>
                    <li className='List-Item'>
                        Developed automation tool that converts legacy Java-based applications to Spring Boot and Spring MVC.  This tool is targeted for Struts, JEE, JAX-RS, and JSF applications, but could be used on any type of application via customizations.  Does in-place modifications to the code and build files, including removing old code, adding Spring annotations, adding and removing build dependencies, and modifying configuration.  This tool is expected to reduce the amount of manual effort of converting older applications by 60-70% and allow the consultant to focus on core business value.  Open sourced in 2020.
                    </li>
                    <li className='List-Item'>
                        Developed release automation system for a major pharmaceutical company.  Most of the scripts were written in Python with some supporting Bash scripts.  Automation provided a complete, end-to-end solution to release management for backends written in Java/Spring and .NET, as well as iOS and Android mobile apps and back-office web sites.  Backends and web sites are hosted in Azure, code in GitHub Enterprise, and GitHub Actions were used to trigger automation scripts.  This system replaced a completely manual process that was tedious and error prone.  Release cadence was improved from many weeks to hours using this automation.
                    </li>
                    <li className='List-Item'>
                        Defined architecture for and helped develop an IoT system that is capable of ingesting over 100k messages per second.  Kafka was used as the messaging layer.  For fast access a portion of the data was stored in Gemfire.  For analytics data was stored in Greenplum, and long term storage via Avro in HDFS.  Spring Cloud Stream modules were used for stream processing and real-time analytics via PMML.  Spring Boot was used for microservices that provide REST APIs for web and mobile applications.  All streaming applications and REST microservices were deployed to Cloud Foundry.  Application was deployed to AWS using Packer, Terraform, and Ansible.
                    </li>
                    <li className='List-Item'>
                        Designed and helped develop IoT system for major insurance company to rate drivers based on driving characteristics.  Design supports ingest rates of 500k/sec for individual waypoints from in-car device, and 50k/sec from phone app.  Designed and implemented high-performance server using Gemfire IMDG that determines the road that the driver is on based on the waypoint, which provides the speed limit for the road.  Used Kafka, Spring Boot/Spring Cloud Stream, and Avro for streaming.  Data is ingested into Greenplum MPP database for analysis.  Deployed to AWS using Terraform, Packer, and Ansible.  Initial implementation allows all 8M drivers to be rated daily, but the design supports near-real time rating.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Projects