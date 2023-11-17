import React from 'react';
import '../App.css';

const Compentencies = () => {
    return (
        <div id='compentencies'>
            <div className='Section-Title'>Compentencies</div>
            <div className='Section-Subtitle' style={{marginTop: '10px'}}>Extensive Experience</div>
            <table>
                <tr>
                    <td style={{ width: '50%' }}>
                        <ul style={{ verticalAlign: 'top' }}>
                            <li>Java 5-17 (20 years)</li>
                            <li>Spring (16 years)</li>
                            <li>Spring Core, Webflux, MVC, Data, Security</li>
                            <li>Spring Cloud, Stream, Boot</li>
                            <li>Reactive - Project Reactor</li>
                            <li>IMDG: Apache Geode/GemFire, Ignite, Hazelcast</li>
                            <li>Geospatial: Geotools, GeoServer, PostGIS</li>
                            <li>Hibernate, JPA</li>
                            <li>IoT and streaming</li>
                            <li>Timeseries: InfluxDB</li>
                            <li>ProtocolBuffers, Avro</li>
                        </ul>
                    </td>
                    <td style={{ width: '50%' }}>
                        <ul style={{ verticalAlign: 'top' }}>
                            <li>Messaging: Kafka (8 years), RabbitMQ, MQTT</li>
                            <li>Kubernetes, Docker, Helm</li>
                            <li>CloudFoundry</li>
                            <li>REST, JSON</li>
                            <li>Agile, SCRUM</li>
                            <li>SSL, HTTPS, PKI, Oauth2</li>
                            <li>Gradle, Maven, JUnit, Mockito</li>
                            <li>Linux, OS/X</li>
                            <li>AWS</li>
                            <li>Automation: Terraform, Packer, Ansible</li>
                            <li>Intellij, VSCode, Git</li>
                        </ul>
                    </td>
                </tr>
            </table>
            <div className='Section-Subtitle'>Knowledgeable</div>
            <table>
                <tr>
                    <td style={{ width: '50%' }}>
                        <ul style={{ verticalAlign: 'top' }}>
                            <li>NoSQL: Cassandra, MongoDB</li>
                            <li>CI/CD: Jenkins, Concourse, Gitlab CI, GitHub Actions</li>
                            <li>React, JavaScript, CSS, HTML</li>
                            <li>Python</li>
                            <li>Bash</li>
                        </ul>
                    </td>
                    <td style={{ width: '50%' }}>
                        <ul style={{ verticalAlign: 'top' }}>
                            <li>Virtualization: VirtualBox, VMware, Vagrant</li>
                            <li>Azure, Google Cloud</li>
                            <li>TDD, DDD, Agile methodologies</li>
                            <li>SQL: Oracle, MySQL, PostgreSQL</li>
                            <li>Windows</li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Compentencies