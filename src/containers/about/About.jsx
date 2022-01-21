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
                    <p>Seeking a beginner role to enhance and explore my technical knowledge .</p>
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
                        <div className="skill-item">blockchain</div>
                    </div>
                    <div className="about-tabs">
                        {aboutTab ? (
                            <>
                            <button type='button' className='tab-item' onClick={()=>setAboutTab(false)} data-target="#education">education</button>
                            <button type='button' className='tab-item active' onClick={()=>setAboutTab(true)} data-target="#experience">Experience</button>
                            </>
                        ) : (
                            <>
                            <button type='button' className='tab-item active' onClick={()=>setAboutTab(false)} data-target="#education">education</button>
                            <button type='button' className='tab-item' onClick={()=>setAboutTab(true)} data-target="#experience">Experience</button>
                            </>
                        )
                        }
                    </div>
                        {!aboutTab ? (
                    <div className="tab-content" id='education'>
                        <div className="timeline">
                            <div className="timeline-item">
                                <h4>Bachelor of Information technology (2019 - 2022) (9.5)</h4>
                                <p>Shankar Narayan College of Arts, Science and Commerce</p>
                            </div>
                            <div className="timeline-item">
                                <h4>HSC (2017 - 2019) (78%)</h4>
                                <p>Shankar Narayan College of Arts, Science and Commerce</p>
                            </div>
                            <div className="timeline-item">
                                <h4>SSC (2017) (68%)</h4>
                                <p>St. Aloysuis English High School</p>
                            </div>
                        </div>
                    </div>
                        ):
                            (
                    <div className="tab-content" id='experience'>
                        <div className="timeline">
                            <div className="timeline-item">
                                <span className='date'>2020 - 2021</span>
                                <h4>Web Developer - <span>Aero2Astro</span></h4>
                                <p>Worked as a Web Developer for 6 months. During my internship I worked on laravel, CMS and UI.</p>
                            </div>
                        </div>
                    </div>
                            )}

                    <Link to="/contact" className='btn'>Contact Me</Link>
                </div>
            </div>
        </div>
    </section>
  )
};
