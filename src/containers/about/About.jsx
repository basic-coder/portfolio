import React, { useState } from 'react';
import './about.css'
import p1 from '../../assets/ai.png'
import {Link} from 'react-router-dom'

export const About = () => {
    const [aboutTab, setAboutTab] = useState(false);

  return (
    <section className='portfolio__about-section sec-padding'>
        <div className="container">
            <div className="row">
                <div className="section-title">
                    <h2>About me</h2>
                </div>
            </div>
            <div className="row">
                <div className="about-img">
                    <div className="img-box">
                        <img src={p1} alt="" />
                    </div>
                </div>
                <div className="about-text">
                    <h3>Exploring things to gain more knowledge .</h3>
                    <h3>skills</h3>
                    <div className="skills">
                        <div className="skill-item">html</div>
                        <div className="skill-item">css</div>
                        <div className="skill-item">javascript</div>
                        <div className="skill-item">bootstrap</div>
                        <div className="skill-item">python</div>
                        <div className="skill-item">java</div>
                        <div className="skill-item">react</div>
                        <div className="skill-item">php</div>
                        <div className="skill-item">node</div>
                        <div className="skill-item">express</div>
                        <div className="skill-item">mongodb</div>
                        {/* <div className="skill-item">blockchain</div> */}
                    </div>
                    <div className="about-tabs">
                        <button type='button' className='tab-item active' onClick={()=>setAboutTab(true)} data-target="#experience">Experience</button>                      
                    </div>
                        
                    <div className="tab-content" id='experience'>
                        <div className="timeline">
                            <div className="timeline-item">
                                <span className='date'>2020 - 2021</span>
                                <h4>Web Developer - <span>Aero2Astro</span></h4>
                                <p>Worked as a Web Developer for 6 months. During my internship I worked on laravel, CMS and UI.</p>
                            </div>
                            <div className="timeline-item">
                                <span className='date'>2021 - 2022</span>
                                <h4>Frontend Developer - <span>Teknopoint/Dept</span></h4>
                                <h4>Worked on latest <a href='https://ceat.com' target='_blank' rel="noreferrer">ceat.com</a></h4>
                                <ul>
                                    <li><span>Overview:</span>  Enhanced and maintained CEAT's official website.</li>
                                    <li><span>Responsibilities:</span> Updated pages and components for a modern user experience.</li>
                                    <li><span>Technologies:</span> Used HTML, CSS, JavaScript, and possibly other frontend tools.</li>
                                    <li><span>Progress:</span> Improved aesthetics and user navigation.</li>
                                </ul>
                            </div>

                            <div className="timeline-item">
                                <span className='date'>2022 - 2023</span>
                                <h4>Frontend Developer - <span>Teknopoint/Dept</span></h4>
                                <h4>Currently working on <a href='https://stage.ceatspecialty.com' target='_blank' rel="noreferrer">stage.ceatspecialty.com</a></h4>
                                <ul>
                                    <li><span>Overview:</span>  Updating pages and components for CEAT Specialty Tires.</li>
                                     <li><span>Responsibilities:</span> Ongoing updates, collaborating with cross-functional teams.</li>   
                                      <li><span>Technologies:</span> Using frontend technologies, possibly introducing new tools.</li>  
                                      <li><span>Progress:</span> Testing phases completed, achieving key milestones.</li>  
                                </ul>
                      </div>
                        </div>
                    </div>
                          

                    <Link to="/contact" className='btn'>Contact Me</Link>
                </div>
            </div>
        </div>
    </section>
  )
};
