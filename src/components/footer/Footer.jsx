import React from 'react'
import './footer.css'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import {SiCodechef} from 'react-icons/si'

const Footer = () => {
    return (
        <div className='crypto__footer section__padding' >
            <div className="container">
            <div className="crypto__footer-links">
                <div className="crypto__footer-links_logo">
                    <h1 className='gradient__text'>Basic Coder</h1>
                    <p>All Rights Reserved</p>
                </div>
                <div className="crypto__footer-links_div" >
                    <h4>Social Links</h4>
                    <a href='https://github.com/basic-coder' target="_blank" rel="noreferrer noopener"> <AiFillGithub className='i' /> Github</a>
                    <a href='https://www.instagram.com/basic_coder/' target="_blank" rel="noreferrer noopener" > <AiOutlineInstagram className='i' /> Instagram</a>
                    <a href='https://www.linkedin.com/in/bhavesh-sakpal-711770189/' target="_blank" rel="noreferrer noopener"> <AiFillLinkedin className='i' />Linked In</a>
                    <a href='https://www.codechef.com/users/bhavessh' target="_blank" rel="noreferrer noopener" > <SiCodechef className='i' />CodeChef</a>
                </div>
                <div className="crypto__footer-links_div">
                    <h4>Get in touch</h4>
                    <a href="#">basic-coder</a>
                    <a href="#">8108054243</a>
                    <a href='mailto:basiccoder01@gmail.com'>basiccoder01@gmail.com </a>
                </div>
            </div>
            <div className="crypto__footer-copyright">
                <p>2021 basic-coder. All Rights Reserved</p>
            </div>
            </div>
        </div>
    )
}

export default Footer