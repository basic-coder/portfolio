import React, { useState } from 'react'
import './project.css'
import p2 from '../../assets/p1.png'
import p1 from '../../assets/p3.png'
import p3 from '../../assets/p2.png'
import Card from '../../components/card/Card'

const cards = [
    {
        img: p1,
        head: 'Crypto',
        des: 'Crypto is online crypto coins website, where you can get details of all crypto coins and you can transfer ethers using metamask. It is made using react and blockchain',
        frontend: 'React',
        backend: 'blockchain',
        live: 'https://basic-coder.github.io/Crypto',
        code: 'https://github.com/basic-coder/MaiMart',
    },
    {
        img: p2,
        head: 'MaiMart',
        des: 'Maimart is an Ecommerce website which is made using MERN stack. It has a complete backend where you can add products, track order, sales etc',
        frontend: 'React',
        backend: 'Nodejs, Mongodb',
        live: 'https://mai-mart.herokuapp.com/',
        code: 'https://github.com/basic-coder/MaiMart',
    },
    {
        img: p3,
        head: 'Portfolio',
        des: 'A portfolio Website using React to share details about me, and my work',
        frontend: 'React',
        live: '#',
        code: 'https://github.com/basic-coder/MaiMart',
    },
]

const Project = () => {
    const [cardToggle, setCardToggle] = useState(false);
    return (
        <>
        <section className='portfolio-section sec-padding' id='project'>
           <div className="container">
               <div className="row">
                   <div className="section-title">
                       <h2>Projects</h2>
                   </div>
               </div>
               <div className="row">
               { cards.map((card)=>(
                
                   <Card key={card.head} close={()=>setCardToggle(false)} image={card.img} title={card.head} des={card.des} frontend={card.frontend} backend={card.backend} code={card.code} live={card.live} />
                   ))
                }
               </div>
           </div>
        </section>
        </>
    )
}

export default Project
