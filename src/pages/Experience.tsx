import React from 'react';
import '../App.css';

const Experience = () => {
    return (
        <div style={{ marginBottom: '1.5em' }}>
            <div className='Section-Title' id='experience'>
                Professional Experience
            </div>
            <div>
                <div className='Experience-Title'>
                    6/15 to Present: VMware/Pivotal - Senior Consultant
                </div>

                <p>
                    My role is to help customers with application and data modernization.  Usually that means pairing with the customer's developers to actually write code (enablement), sometimes it means to define a path to success (the journey), and occasionally it means to recommend best practices  for design, development, and deployment (path-to-prod).  Since the mandate can be very broad, topics covered nearly always go beyond just the code to include automation using CI/CD, tooling to streamline and simplify the process, SRE, etc.
                </p>

                <p>
                    Since VMware/Pivotal's customers are extremely diverse, the types of engagements and the technologies involved are very broad.  Customers include:
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

                <p>
                    Key projects and engagements:
                </p>

                <ul>
                    <li className='List-Item'>Designed and developed a prototype that demonstrates an R-like language for Gemfire. The models are trained against in-memory data. Predictions can be made via ad-hoc and dynamic methods. All standard machine learning models are supported, such as Support Vector Machine, Random Forest, Naive Bayes, and Gaussian Process. Fast Fourier Transforms are also supported.</li>
                    <li className='List-Item'>Defined architecture and developed a prototype for a system that stores credit card account information for fast access using Gemfire. Spring Boot microservices were used to build REST APIs. HBase was used as a backing store for long term storage. Due to the use of in-memory data in Gemfire, the response times were sub-10ms response times at very high volumes.</li>
                    <li className='List-Item'>Provided architecture and development guidance for an automotive provider for a connected car application. The system-of-record was Gemfire. Spring Boot applications were developed for REST API access from mobile apps.</li>
                    <li className='List-Item'>Developed various connectors for Gemfire for long term backing stores, such as Cassandra, MongoDB, Couchbase, and HBase.</li>
                </ul>

                <div className='Experience-Title-2'>
                    2/15 to 6/15: Rocana - Sales Engineer
                </div>

                <p>
                    My role was to provide technical assistance to the sales staff for Rocana's logs and metrics analytics product.  Rocana was a startup that was purchased by Splunk.  Essentially Rocana was building a big data version of Splunk.  The data was stored in Hadoop and used Impala as the query tool for metrics and Solr for log searching.  Kafka was used extensively for metrics and log collection.  The product supported ingest rates of up to 100k events/metrics per second.
                </p>

                <div className='Experience-Title-2'>
                    4/11 to 2/15: VMware/Pivotal - Senior Consultant
                </div>

                <ul>
                    <li className='List-Item'>Defined architecture for and helped develop an IoT system that is capable of ingesting over 100k messages per second.
                        Kafka was used as the messaging layer. For fast access a portion of the data was stored in Gemfire. For analytics data was stored in Greenplum, and long term storage via Avro in HDFS. Spring Cloud Stream modules were used for stream processing and real-time analytics via PMML. Spring Boot was used for microservices that provide REST APIs for web and mobile applications. All streaming applications and REST microservices were deployed to Cloud Foundry. Application was deployed to AWS using Packer, Terraform, and Ansible.</li>
                    <li className='List-Item'>Designed and developed a prototype that demonstrates an R-like language for Gemfire. The models are trained against in-memory data. Predictions can be made via ad-hoc and dynamic methods. All standard machine learning models are supported, such as Support Vector Machine, Random Forest, Naive Bayes, and Gaussian Process. Fast Fourier Transforms are also supported.</li>
                    <li className='List-Item'>Designed solution for railroad industry that automates and optimizes the movement and handling of automobiles that are moved via rail cars. This system will significantly reduce wasted effort and time over the manual techniques currently employed. This solution uses GemfireXD.</li>
                    <li className='List-Item'>Provided architecture and design guidance and developed prototype for caching application that is deployed within CloudFoundry for a financial services company. Used many Spring modules.</li>
                    <li className='List-Item'>Provided design and development guidance for a calculation engine for a travel services company that uses Gemfire. The application uses the distributed computation capability of Gemfire to parallelize the evaluation of rules across many servers. The total computation time was reduced by a factor of 10.</li>
                    <li className='List-Item'>Designed and developed caching application for a travel services company using Gemfire. The application reduced response time from about 300 milliseconds to 30 milliseconds.</li>
                    <li className='List-Item'>Designed and developed frameworks to simplify creation of applications for Gemfire enterprise cache and persistence product. These frameworks allow simple POJOs to be used as data and behavior objects. They also take advantage of Spring bean management facilities to wire together applications and to provide dependency management. These frameworks substantially simplify the building and testing of components for Gemfire.</li>
                    <li className='List-Item'>Created architecture and design for a large transaction processing system for a pharmacy benefits company. The system uses Gemfire as the underlying data storage and processing technology. Numerous Spring modules were used.</li>
                    <li className='List-Item'>Designed and led development of a JSON/REST service that provides metadata for a Platform-as-a-Service framework. The metadata is used to deploy, configure, and monitor SQL databases and NoSQL datastores, such as Cassandra, MongoDB, and Hadoop/HBase.</li>
                </ul>

                <div className='Experience-Title-2'>
                    9/07 to 4/11: Red Hat/JBoss - Senior Consultant
                </div>

                <ul>
                    <li className='List-Item'>Developed standards, specifications, and best practices for a comprehensive Enterprise SOA architecture for the Office of Veterans Affairs. Standards, specifications, and best practices were used as the basis for the SOA governance processes. Key participant in developing governance processes, including policies, procedures, rules, and responsibilities.</li>
                    <li className='List-Item'>Key participant in a project for the US Marine Corp to build a prototype for a GIS mapping application and SOA framework for use in command and control scenarios. Designed, architected, and developed web-based mapping portlet using JBoss Portal product, Java Applets, JavaScript/AJAX (using OpenLayers toolkit for GIS mapping), and Geoserver WMS/WFS mapping server. Project used Agile/SCRUM methodology.</li>
                    <li className='List-Item'>Designed, architected, and developed toolkits that implement MIL-STD-2045-47001, MIL-STD-6017 (VMF), and MIL- STD-6040 (USMTF) specifications for use in the SOA platform. Ported portions of the toolkit to run on small devices that support J2ME.</li>
                </ul>

                <div className='Experience-Title-2'>
                    9/06 to 9/07: Cognizant - Senior Consultant
                </div>

                <ul>
                    <li className='List-Item'>Architect for key J2EE module in Ameriprise's suite of applications provided to financial advisers. This module generates investment recommendations for the financial adviser using inputs from the customer, which is the foundation for the entire system. Also created a prototype of the module for the offshore development team.</li>
                    <li className='List-Item'>Enterprise architect for a major business process redesign that moves data entry and some financial analysis to an offshore facility. This is provided as a service to the advisers, who previously performed this work themselves.</li>
                    <li className='List-Item'>Architected, designed, and coded a critical automation utility that eliminates a manual process. This application is written in Java using Eclipse. It also uses MQ to query a mainframe for financial data.</li>
                </ul>
            </div>
        </div>
    )
}

export default Experience